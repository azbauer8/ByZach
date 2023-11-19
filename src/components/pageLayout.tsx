import React, { ReactNode } from "react";

import Header from "./header.tsx";
import Footer from "./footer.tsx.tsx";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <Header />
      <div className="m-5 space-y-8 md:m-0">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
