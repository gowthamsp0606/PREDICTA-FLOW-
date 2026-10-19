
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
        aria-label="Main content"
        className="min-h-screen w-full p-4 transition-[margin,padding] duration-300 sm:p-6 md:ml-64 md:w-[calc(100%-16rem)] md:p-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            key={location.pathname}
            className="motion-safe:animate-[fadeIn_250ms_ease-out]"
          >
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
