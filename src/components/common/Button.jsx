
const Button = ({ text, bgColor, hoverBgColor }) => {
  return (
    <button
      type="submit"
      className={`flex w-full mt-10 justify-center  rounded-md ${bgColor} ${hoverBgColor} px-2 py-2  text-sm/6 font-semibold text-white hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
    >
      {text}
    </button>
  );
};

export default Button;
