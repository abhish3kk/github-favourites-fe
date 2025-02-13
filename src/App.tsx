import { Navigate, Route, Routes } from "react-router";
import routes from "./routes";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const {token } = useAuth()
  return (
    <Routes>
      {routes.map(({ path, element, isProtected}) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute isProtected={isProtected}>{element}</ProtectedRoute>
          }
        />
      ))}  
      <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
