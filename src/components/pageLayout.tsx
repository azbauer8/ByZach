import React, { ReactNode } from "react";

import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full bg-black text-white">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="mx-12 my-10 lg:mt-20">
          <main className="mx-auto max-w-6xl">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
