import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"; // ✅ All at top
import DashboardHeader from "./component/DashboardHeader";

import CreateAboutPage from "./Dashboard/about/CreateAboutPage";
import AdminDashboard from "./Dashboard/AdminDashboard";
import BlogDashboard from "./Dashboard/blogs/BlogDashboard";
import AboutDashboard from "./Dashboard/about/AboutDashboard";
import CreateBlogForm from "./Dashboard/blogs/CreateBlogForm";
import EditBlog from "./Dashboard/blogs/EditBlog";
import FaqDashboard from "./Dashboard/faqs/FaqDashboard";
import CreateFaqForm from "./Dashboard/faqs/CreateFaqForm";
import EditFaq from "./Dashboard/faqs/EditFaq";

const App = () => {
  return (
    <BrowserRouter  >
      <DashboardHeader />
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
         
          <Route index element={<Navigate to="blogdashboard" replace />} />
          <Route path="blogdashboard" element={<BlogDashboard />} />
          <Route path="createblog" element={<CreateBlogForm />} />
          <Route path="editblog/:id" element={<EditBlog />} />
          <Route path="faqdashboard" element={<FaqDashboard />} />
          <Route path="createfaq" element={<CreateFaqForm />} />
          <Route path="editfaq/:id" element={<EditFaq />} />

          <Route path="*" element={<Navigate to="blogdashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
