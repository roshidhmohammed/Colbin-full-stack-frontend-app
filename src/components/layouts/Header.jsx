// Navigation
import { Link, useNavigate } from "react-router-dom";

// APIs
import { axiosInstance } from "../../utils/apis/axiosInstance";

// Redux - global state management
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/slices/userSlice";

// Alert
import { toast } from "sonner";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user?.data);

  const handleLogout = async () => {
    await axiosInstance
      .post("user/logout", {}, { withCredentials: true })
      .then((res) => {
        dispatch(removeUser());
        toast.success(res.data);
        navigate("/login", { replace: false });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <nav className=" border-gray-200 bg-gray-900 fixed left-0 right-0 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            COLBIN
          </span>
        </Link>

        {userDetails !== undefined && (
          <div className=" ">
            <div className="font-medium flex flex-row mt-5 p-1 md:p-0  border  rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <button
                onClick={handleLogout}
                className="block py-2 px-3  rounded-sm  md:border-0  md:p-0 hover:cursor-pointer text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
