import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
import FormPage from "../pages/FormPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:uid" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
