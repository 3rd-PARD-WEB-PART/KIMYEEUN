import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/ProfilePage/Profile";
import EditProfile from "./Pages/EditPage/EditProfile";
import Layout from "./Pages/Layout";

function MyRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
