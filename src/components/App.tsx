import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const getPlatform = () => {
  if (__PLATFORM__ === "mobile") {
    return <span>Is mobile platform</span>;
  } else if (__PLATFORM__ === "desktop") {
    return <span>Is desktop platform</span>;
  }
};

export const App = () => {
  return (
    <>
    </>
  );
};
