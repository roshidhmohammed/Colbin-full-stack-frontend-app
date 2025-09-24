// React Hooks
import  { useEffect } from "react";

// APIs
import { axiosInstance } from "../utils/apis/axiosInstance";

// Redux global state management
import { addUser } from "../utils/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

// Navigation
import { useNavigate } from "react-router-dom";

const useFetchUserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user);

  const pathName = window.location.pathname;

  const fetchUser = async () => {
    await axiosInstance
      .get("profile/view", { withCredentials: true })
      .then((res) => {
        dispatch(addUser(res.data));
      })
      .catch((error) => {
        if (error.status === 401) {
          dispatch(addUser(null));
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    fetchUser();
    if (
      pathName === "/login" ||
      pathName === "/sign-up" ||
      userDetails !== null
    ) {
      navigate("/", { replace: true });
    }
  }, []);
};

export default useFetchUserData;
