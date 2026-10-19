
import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Forecasting from './components/Forecasting';
import DigitalTwin from './components/DigitalTwin';
import WeatherForecast from './components/WeatherForecast';
import LongTermPrediction from './components/LongTermPrediction';
import AIAssistant from './components/AIAssistant';
import { ThemeProvider } from './contexts/ThemeContext';

const NotFound: React.FC = () => {
  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
      aria-labelledby="not-found-title"
    >
      <div
        className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-4xl dark:bg-blue-900/30"
        aria-hidden="true"
      >
        🌊
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
        Error 404
      </p>

      <h1
        id="not-found-title"
        className="mb-3 text-3xl font-bold text-slate-900 dark:text-white"
      >
        Page not found
      </h1>

      <p className="mb-6 max-w-md text-slate-600 dark:text-slate-400">
        The page you are looking for does not exist. Return to the
        PredictaFlow dashboard to continue exploring the application.
      </p>

      <Link
        to="/"
        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800"
      >
        Back to Dashboard
      </Link>
    </section>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0f4f8] font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-lg bg-blue-600 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <Sidebar />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen w-full p-4 transition-all duration-300 sm:p-6 md:ml-64 md:w-[calc(100%-16rem)] md:p-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div key={location.pathname} className="animate-[fadeIn_250ms_ease-out]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/forecasting" element={<Forecasting />} />
              <Route path="/long-term" element={<LongTermPrediction />} />
              <Route path="/weather" element={<WeatherForecast />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
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
