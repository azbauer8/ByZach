import { ThemeProvider } from "./components/ui/theme-provider";

import PageLayout from "./components/pageLayout";
import Home from "./pages/home";

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
