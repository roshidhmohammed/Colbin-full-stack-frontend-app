// Child components
import { Outlet } from "react-router-dom";

// Custom hooks
import useFetchUserData from "../../hooks/useFetchUserData";

// Reusable components
import Header from "./Header";

const AppLayout = () => {
  useFetchUserData();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
