// Redux
import { useSelector } from "react-redux";

// Custom hooks
import useFetchUserData from "../../hooks/useFetchUserData";

const Profile = () => {
    
  useFetchUserData();
  const userDetails = useSelector((store) => store.user?.data);

  return (
    <div className=" h-screen flex justify-center flex-col items-center sm:px-20 lg:px-60">
      <div className="w-full p-0 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-28 ">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 ">
          Welcome {userDetails?.user.fullName} !!!
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg">
          {" "}
          {userDetails?.user.emailId}
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"></div>
      </div>
    </div>
  );
};

export default Profile;
