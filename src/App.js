import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./hoc/RequireAuth";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { SplashScreens } from "./pages/SplashScreens/SplashScreens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreens />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
