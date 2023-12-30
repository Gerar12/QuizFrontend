import React, { ReactNode } from "react";
import "./index.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout bg-gray-200 dark:bg-dark-charcoal">{children}</div>
  );
};

export default Layout;
