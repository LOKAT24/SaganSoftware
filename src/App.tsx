import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import { appsData } from './data/appsData';

function App() {
  return (
    <div className="min-h-screen bg-tech-bg text-tech-text selection:bg-tech-primary selection:text-black relative overflow-hidden">
      {/* Global Living Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-tech-primary rounded-full blur-[120px] animate-float-1" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-tech-secondary rounded-full blur-[100px] animate-float-2" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-tech-primary rounded-full blur-[150px] animate-float-3" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Hero />
        
        <main className="container mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-2xl font-mono font-bold text-white">
              <span className="text-tech-secondary mr-2">&gt;</span>
              Available Modules
            </h2>
            <span className="text-tech-muted font-mono text-sm">
              Total: {appsData.length}
            </span>
          </div>
          
          <AppGrid apps={appsData} />
        </main>

        <footer className="border-t border-gray-800 py-8 text-center text-tech-muted text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} SaganSoftware. All systems nominal.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
