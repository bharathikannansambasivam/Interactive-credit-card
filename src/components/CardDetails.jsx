import React, { useContext, useState } from "react";
import Mobile_BG from "../images/Mobile-BG.png";
import back_card from "../images/back-card.png";
import front_card from "../images/front-card.png";
import { Context } from "../App";
import Input from "../components/Input";
function CardDetails() {
  const { cardDetails } = useContext(Context);
  const { cardNo, customerName, expMonth, expYear, cvcPin } = cardDetails;
  return (
    <div className=" h-screen  ">
      <div className="bg-white h-3/5">
        <div
          className="h-4/5 bg-slate-400  bg-cover "
          style={{ background: `url(${Mobile_BG}) ` }}
        >
          <div
            className=" w-11/12  rounded-md  bg-cover bg-center h-64 relative top-24 left-8 "
            style={{
              backgroundImage: `url(${back_card})`,
            }}
          >
            <p className="cvcpin flex    justify-end items-center h-full">
              {cvcPin ? cvcPin : "000"}
            </p>
          </div>

          <div
            className="  w-11/12 mx-2 relative bottom-3  bg-center bg-cover rounded-md h-64 "
            style={{
              backgroundImage: `url(${front_card})`,
            }}
          >
            <div className="  p-5 flex gap-5 justify-start items-center ">
              <div className="bg-white rounded-full h-12 w-12"></div>
              <div className="border-2 border-white rounded-full h-5 w-5"></div>
            </div>
            <div className=" p-5 text-white text-2xl ">
              {cardNo
                ? cardNo.replace(/(\d{4})(?=\d)/g, " $1 ")
                : "0000 0000 0000 0000"}
            </div>
            <div className=" p-3  text-white">
              <div className="flex justify-between text-lg  ">
                <p>
                  {customerName ? customerName.toUpperCase() : "BHARATHIKANNAN"}
                </p>
                <div className="flex ">
                  <p>{expMonth ? expMonth : "00"}</p>/
                  <p>{expYear ? expYear : "00"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Input />
    </div>
  );
}

export default CardDetails;
