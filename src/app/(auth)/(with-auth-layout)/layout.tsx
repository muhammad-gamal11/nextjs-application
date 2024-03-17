// components/Layout.tsx
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-7xl ml-4">inner layout</h2>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
