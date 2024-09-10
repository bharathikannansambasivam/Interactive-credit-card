import React from "react";
import complete from "../images/tick.svg";
import { useNavigate } from "react-router-dom";
function Greeting() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col  justify-center items-center h-screen p-5 gap-4 ">
      <img className="h-32 w-32  " src={complete} alt="" />
      <h2 className="text-4xl">Thank you!</h2>
      <p className="text-dark-grayish-violet">We've added your card details </p>
      <button
        onClick={handleNavigation}
        className="bg-very-dark-violet p-3 text-white w-full rounded-md"
      >
        Continue
      </button>
    </div>
  );
}

export default Greeting;
