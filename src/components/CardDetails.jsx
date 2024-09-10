import React, { useContext, useState } from "react";
import Mobile_BG from "../images/Mobile-BG.png";
import desktop_BG from "../images/desktop_BG.png";
import card_logo from "../images/card-logo.svg";

import back_card from "../images/back-card.png";
import front_card from "../images/front-card.png";
import Input from "../components/Input";
function CardDetails() {
  const [formValues, setFormValues] = useState({
    customerName: "",
    cardNo: "",
    cvc: "",
    month: "",
    year: "",
  });
  return (
    <div className=" h-screen ">
      <div className="bg-white   h-3/5 sm:h-screen sm:flex  ">
        <div
          className="h-4/5 sm:w-1/3  bg-slate-400  bg-cover sm:h-screen "
          style={{
            background: ` url(${desktop_BG}) `,
          }}
        >
          <div className="sm:w-full sm:flex sm:flex-col-reverse sm:items-center sm:justify-center sm:h-screen sm:ml-36 ">
            <div
              className=" w-11/12 sm:w-full   rounded-md  bg-cover bg-center h-64 relative top-24 left-8 sm:top-0 sm:left-16"
              style={{
                backgroundImage: `url(${back_card})`,
              }}
            >
              <p className="cvcpin flex    justify-end items-center h-full">
                {formValues.cvc ? formValues.cvc : "000"}
              </p>
            </div>

            <div
              className=" sm:w-full  w-11/12  mx-2 relative bottom-3  bg-center bg-cover rounded-md h-64  sm:right-16 "
              style={{
                backgroundImage: `url(${front_card})`,
              }}
            >
              <div className="  p-5   ">
                {/* <div className="bg-white rounded-full h-12 w-12"></div>
                <div className="border-2 border-white rounded-full h-5 w-5"></div> */}
                <img src={card_logo} alt="" />
              </div>
              <div className=" p-5 text-white text-2xl ">
                {formValues.cardNo
                  ? formValues.cardNo.replace(/(\d{4})(?=\d)/g, " $1 ")
                  : "0000 0000 0000 0000"}
              </div>
              <div className=" p-3  text-white">
                <div className="flex justify-between text-lg  ">
                  <p>
                    {" "}
                    {formValues.customerName
                      ? formValues.customerName.toUpperCase()
                      : "BHARATHIKANNAN"}{" "}
                  </p>
                  <div className="flex ">
                    <p>{formValues.month ? formValues.month : "00"}</p>/
                    <p>{formValues.year ? formValues.year : "00"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input setFormValues={setFormValues} />
      </div>
    </div>
  );
}

export default CardDetails;
