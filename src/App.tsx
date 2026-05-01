import { AppProvider } from './providers';
import { RouterProvider } from './providers/routes';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <RouterProvider />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
