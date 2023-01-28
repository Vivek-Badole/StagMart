import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const OrderPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
        <img className="logo" src="./images/successPurchase.png" alt="success" />
          <h2>Thank You <img className="smiley" src="./images/smiley.png" alt="success" /></h2>
          <h3>Your payment was successful and your order is complete</h3>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
    .smiley {
      border-radius:50%;
      height:100px;
    }
  }
`;
export default OrderPage;
