import React from 'react';
import AppCard from './AppCard';
import { AppData } from '../data/appsData';

interface AppGridProps {
  apps: AppData[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default AppGrid;
