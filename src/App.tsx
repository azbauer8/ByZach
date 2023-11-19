import { ThemeProvider } from "./components/ui/theme-provider";

import PageLayout from "./components/PageLayout.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <PageLayout>
        <Home />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
