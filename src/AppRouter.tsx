import { Route, Routes } from "react-router-dom";
import EditProfilePage from "routes/EditProfilePage";
import MainPage from "./routes/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  );
};

export default AppRouter;
