import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Forecasting from './components/Forecasting';
import DigitalTwin from './components/DigitalTwin';
import WeatherForecast from './components/WeatherForecast';
import LongTermPrediction from './components/LongTermPrediction';
import AIAssistant from './components/AIAssistant';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f4f8] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Sidebar />
      
      <main className="md:ml-64 p-4 md:p-8 min-h-screen transition-all">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/digital-twin" element={<DigitalTwin />} />
            <Route path="/forecasting" element={<Forecasting />} />
            <Route path="/long-term" element={<LongTermPrediction />} />
            <Route path="/weather" element={<WeatherForecast />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Global AI Assistant Widget */}
      <AIAssistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
