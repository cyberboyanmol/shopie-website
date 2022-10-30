import React, { Suspense, lazy } from "react";
import "./App.scss";

import { Routes, Route, Navigate, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/website/ScrollToTop/ScrollToTop";

const App = () => {
  const Login = lazy(() => import("./components/Login/Login"));
  const Website = lazy(() => import("./components/website/website"));

  return (
    <Suspense fallback={<div>loader...</div>}>
      <ScrollToTop />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navigate replace to="/website" />} />
          <Route path="/website/*" element={<Website />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<h1>PAge not found</h1>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
