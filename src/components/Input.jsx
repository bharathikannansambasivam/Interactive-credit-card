import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import validationSchema from "../schema/validationSchema";
function Input({ setFormValues }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      customerName: "",
      cardNo: "",
      cvc: "",
      month: "",
      year: "",
    },
    validationSchema: validationSchema,
    onSubmit: (val) => {
      console.log(val);
      navigate("/greeting");
    },
  });

  useEffect(() => {
    setFormValues(formik.values);
  }, [setFormValues, formik.values]);

  return (
    <div className=" sm:w-8/12 sm:flex  sm:justify-end">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 px-6 mt-28 text-2xl sm:p-20  sm:w-3/4 justify-center  sm:h-screen sm:mt-0 "
      >
        <label>CARDHOLDER NAME</label>
        <input
          name="customerName"
          className="border-2 p-2 rounded-md"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="e.g. Bharathi Kannan"
        />
        {formik.touched.customerName && formik.errors.customerName && (
          <div className="text-red-600 text-sm">
            {formik.errors.customerName}
          </div>
        )}
        <label>CARD NUMBER</label>
        <input
          className="p-2"
          type="text"
          name="cardNo"
          value={formik.values.cardNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="e.g. 0000 0000 0000 0000"
          maxLength={16}
        />

        {formik.touched.cardNo && formik.errors.cardNo && (
          <div className="text-red-600 text-sm"> {formik.errors.cardNo}</div>
        )}

        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <label>EXP.DATE (MM/YY)</label>
            <div className="flex gap-3">
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  name="month"
                  maxLength={2}
                  className="w-16 text-center p-2"
                  value={formik.values.month}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.month && formik.errors.month && (
                  <div className="text-red-600 text-sm">
                    {formik.errors.month}
                  </div>
                )}
              </div>
              <div>
                <input
                  name="year"
                  type="text"
                  placeholder="YY"
                  maxLength={3}
                  className="w-16 text-center p-2"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.year && formik.errors.year && (
                  <div className="text-red-600 text-sm">
                    {formik.errors.year}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>CVC</label>
            <input
              name="cvc"
              type="text"
              placeholder="123"
              maxLength={3}
              className="w-16 text-center p-2"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cvc && formik.errors.cvc && (
              <div className="text-red-600 text-sm">{formik.errors.cvc}</div>
            )}
          </div>
        </div>

        <button className="bg-very-dark-violet p-3 text-white w-full rounded-md">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Input;
