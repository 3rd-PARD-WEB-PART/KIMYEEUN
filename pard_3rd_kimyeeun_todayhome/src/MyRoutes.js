import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/ProfilePage/Profile";
import EditProfile from "./Pages/EditPage/EditProfile";
import Layout from "./Pages/Layout";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path = "/" element = {<RegisterPage />} />
      <Route element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
