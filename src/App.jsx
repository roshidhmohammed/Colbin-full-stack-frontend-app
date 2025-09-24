// Navigation
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import AppLayout from "./components/layouts/AppLayout";
import Alert from "./components/common/Alert";

function App() {
  return (
    <div>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
