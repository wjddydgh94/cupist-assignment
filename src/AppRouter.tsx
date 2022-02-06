import { Route, Routes } from "react-router-dom";
import EditProfilePage from "routes/EditProfilePage";
import MainPage from "./routes/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/cupist-assignment/" element={<MainPage />} />
      <Route
        path="/cupist-assignment/edit-profile/"
        element={<EditProfilePage />}
      />
    </Routes>
  );
};

export default AppRouter;
