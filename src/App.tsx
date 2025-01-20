import { AppProvider } from './providers';
import { RouterProvider } from './providers/routes';

function App() {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
}

export default App;
