import React from "react";
import './main-content-module.scss'

export const MainContentModule = ({
  children,
  className=''
}) => {

  return (
    <main className={`main-content-body`}>
      {children}
    </main>
  );
};

export default MainContentModule;
