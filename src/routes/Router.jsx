import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
import FormPage from "../pages/FormPage";
import ErrorPage from "../pages/ErrorPage";
import EditContactForm from "../pages/EditContactForm";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/edit/:id" element={<EditContactForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
