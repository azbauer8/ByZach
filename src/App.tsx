import { Routes, Route } from "react-router-dom";

import PageLayout from "./components/pageLayout";
import Home from "./pages/home";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
