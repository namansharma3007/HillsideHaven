import "./Refund.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Refund = () => {
  const [customerDetails, setcustomerDetails] = useState({});

  const [amountSendBack, setamountSendBack] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://serverhillsidehaven-production.up.railway.app/customerDetails/"
        );
        setcustomerDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const dropdownMailAddress = Object.entries(customerDetails).map(
    ([key, item]) => (
      <option value={item.email} key={key}>
        {item.email}
      </option>
    )
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputAmount = (e) => {
    const amountvalue = e.target.value;
    setamountSendBack(amountvalue);
  };

  const refundAmount = () => {
    setamountSendBack(-amountSendBack);
    setTimeout(() => sendAmountBack(), 500);
  };

  const sendAmountBack = () => {
    async function setTotalPrice() {
      const totalAmount = amountSendBack;
      try {
        const response = await axios.post(
          "https://serverhillsidehaven-production.up.railway.app/bookingDetails/updateDetails",
          { totalAmount }
        );
      } catch (error) {
        console.error(error);
      }
    }
    setTotalPrice();

    refreshPage();
  };

  const refreshPage = () => {
    setTimeout(function () {
      window.location.reload(false); // Reloads the current page
    }, 1000);
  };

  return (
    <section className="container refund-container">
      <h3>Refunds or Additional charges</h3>

      <form onSubmit={handleSubmit} className="form-refund-pay">
        <select className="form-select select-mail-dropdown-refund" aria-label="Default select example" required>
          <option selected>Select customers mail id</option>
          {dropdownMailAddress}
        </select>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="Amount"
              min={0}
              onChange={handleInputAmount}
            />
        </div>
          <div className="aside-buttons-pay">
            <button
              className="btn btn-success"
              type="submit"
              onClick={() => sendAmountBack()}
            >
              Pay
            </button>
            <button
              className="btn btn-danger"
              type="submit"
              onClick={() => refundAmount()}
            >
              Refund
            </button>
          </div>
      </form>
    </section>
  );
};

export default Refund;
