import React, { useContext } from "react";
import { Context } from "../App";

function Input() {
  const { cardDetails, setCardDetails } = useContext(Context);
  const { cardNo, expMonth, expYear, cvcPin } = cardDetails;

  return (
    <div>
      <div className="flex flex-col gap-3 px-6 text-2xl">
        <label>CARDHOLDER NAME</label>
        <input
          className="border-2 p-2 rounded-md"
          type="text"
          placeholder="e.g. Bharathi Kannan"
          onChange={(e) => setCardDetails({ customerName: e.target.value })}
        />

        <label>CARD NUMBER</label>
        <input
          className="p-2"
          type="text"
          name="cardNo"
          placeholder="e.g. 0000 0000 0000 0000"
          maxLength={16}
          onChange={(e) => setCardDetails({ cardNo: e.target.value })}
        />

        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-2">
            <label>EXP.DATE (MM/YY)</label>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="MM"
                value={expMonth}
                onChange={(e) => setCardDetails({ expMonth: e.target.value })}
                className="w-16 text-center p-2"
              />
              <input
                type="number"
                placeholder="YY"
                value={expYear}
                onChange={(e) => setCardDetails({ expYear: e.target.value })}
                className="w-16 text-center p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>CVC</label>
            <input
              type="number"
              placeholder="e.g. 123"
              value={cvcPin}
              onChange={(e) => setCardDetails({ cvcPin: e.target.value })}
              className="w-32 text-center p-2"
            />
          </div>
        </div>

        <button className="bg-very-dark-violet p-3 text-white w-full rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Input;
