import { useState, useEffect } from 'react';

interface VersionState {
  version: string | null;
  loading: boolean;
  error: string | null;
}

const cache: Record<string, string> = {};

export const useGitHubVersion = (repo?: string, branch: string = 'main') => {
  const [state, setState] = useState<VersionState>({
    version: null,
    loading: !!repo,
    error: null,
  });

  useEffect(() => {
    if (!repo) {
      setState({ version: null, loading: false, error: null });
      return;
    }

    if (cache[repo]) {
      setState({ version: cache[repo], loading: false, error: null });
      return;
    }

    const fetchVersion = async () => {
      try {
        // Try fetching package.json from raw.githubusercontent.com
        // This avoids API rate limits (60/hr)
        const response = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/package.json`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch package.json');
        }

        const data = await response.json();
        const version = data.version ? `v${data.version}` : null;

        if (version) {
          cache[repo] = version;
          setState({ version, loading: false, error: null });
        } else {
          throw new Error('No version found in package.json');
        }
      } catch (err) {
        // Fallback: Try GitHub API for latest release (subject to rate limits)
        try {
            const apiResponse = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
            if (apiResponse.ok) {
                const data = await apiResponse.json();
                const version = data.tag_name;
                cache[repo] = version;
                setState({ version, loading: false, error: null });
                return;
            }
        } catch (e) {
            // Ignore API error
        }

        setState({ 
          version: null, 
          loading: false, 
          error: err instanceof Error ? err.message : 'Failed to fetch version' 
        });
      }
    };

    fetchVersion();
  }, [repo, branch]);

  return state;
};
