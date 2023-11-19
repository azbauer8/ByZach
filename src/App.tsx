import { ThemeProvider } from "@/components/ui/theme-provider";

import PageLayout from "@/components/PageLayout";
import Home from "@/pages/Home";

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
