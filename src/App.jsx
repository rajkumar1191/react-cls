import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddPhoto from "./components/AddPhoto";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addphoto" element={<AddPhoto />} />

          <Route path="/gallery" element={<Main />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
