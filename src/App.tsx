import "./App.css";
import Layout from "./components/Layout";
import { Login, SignUp, ForgotPassword, ResetPassword, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<h1>This will be rendered</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
