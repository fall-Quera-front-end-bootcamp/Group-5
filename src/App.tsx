import "./App.css";
import Layout from "./components/Layout";
import { Login, SignUp, ForgotPassword, ResetPassword, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";
import Listview from "./components/ListView/Listview";
import MainLayout from "./components/MainLayout";
import Workspace from "./components/Workspace/Workspace";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="*" element = {<NotFoundPage />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<MainLayout Displayheader = {!window.location.pathname.includes("workspace")} />} > 
        <Route index element = {<Listview />} />
        <Route path="workspace" element = {<Workspace />} />
      </Route>

    </Routes>
  );
}

export default App;
