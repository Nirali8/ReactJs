import React from "react";
import Card from "./Card";

const Layout = ({ children }) => {
  return (
    <div>
      <Card>{children}</Card>
    </div>
  );
};

export default Layout;
