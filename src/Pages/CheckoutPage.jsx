import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Components/FormatPrice";
import { useCartContext } from "../Context/CartContext";
import { Button } from "../styles/Button";
const CheckoutPage = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [apartment,setApartment] = useState("");
  const [address,setAddress] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState("");
  const [pinCode,setPinCode] = useState("");
  
  const navigate = useNavigate();
  const billAddress = ()=>{
    let data = {
      firstName,
      lastName,
      apartment,
      address,
      state,
      country,
      pinCode
    };
    if(data){

      let datas = JSON.parse(localStorage.getItem("address")|| "[]");
      datas=[...datas,data];
      localStorage.setItem("address",JSON.stringify(datas));
      alert("Information Saved");
      navigate("/payment");
     
    }

  }
  const submitHandler = (e) => {
    e.preventDefault();
    billAddress();
   
  };
  const {total_price,shipping_fee } = useCartContext();
  return <Wrapper>
    <div className="container">
   
    <div className="Ist">
    <form className="box" onSubmit={submitHandler}>
      <div>
      <h3>Add Shipping Address:-</h3>
      </div>
     <div className="Sb">
      <div className="b">
      <div className="fl">
      <div>
      <label>First name</label><br />
      <input type="text" id="fName" onChange={(e)=>{setFirstName(e.target.value);}} required /><br />
      </div>
     <div>
     <label>Last name</label><br />
      <input type="text"  id="lastName" onChange={(e)=>{setLastName(e.target.value)}} required/>
     </div>
     
      </div>
      
      <label>Apartment No.,Suite</label><br />
      <input className="i" type="text" onChange={(e)=>{ setApartment(e.target.value)}} required /><br />
      <label>Address</label><br />
      <textarea name="address" className="t" cols="57" rows="10" onChange={(e)=>{setAddress(e.target.value)}} required></textarea><br /><br />
      <div className="fl">
      <div >
      <label>State</label><br />
      <input  type="text" onChange={(e)=>{setState(e.target.value)}} required/><br />
      </div>
      <div>
      <label>Country</label><br />
      <input  type="text" onChange={(e)=>{setCountry(e.target.value)}} required/><br />
      </div>
      </div>
      
      
      <label>Zip Code</label><br />
      <input className="i" type="number" onChange={(e)=>{setPinCode(e.target.value)}} required />
      </div>
      <div className="btn">
     
            <Button>Save & continue</Button>
          
      </div>
    
     </div>
     </form>
    </div>
    
      <div className="IInd" >
     
      <div className="order-total--amount">
      <h3 className="tp">Total Price</h3>
          <div className="order-total--subdata">
          <img className="logo" src="./images/sale.png" alt="logo" />
            <div className="sbi">
              <p>Subtotal:</p>
              <p><FormatPrice price={total_price} /></p>
            </div>
            <div className="sbi">
              <p>Shipping Fee:</p>
              <p><FormatPrice price={shipping_fee} /></p>
            </div>
            <div className="sbi">
              <p>Order Total:</p>
              <p><FormatPrice price={shipping_fee+total_price} /></p>
            </div>
            
          </div>
          
          </div>
      </div>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
  .container {
    display:flex;
 
  padding:20px;
    input{
      height:22px;
      margin-top:5px;
      margin-bottom:15px;
    }
    .Sb {
      display: block;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width:100%;
      padding:10px;
    }
    .fl{
      display:flex;
    }
    .fl div{
      margin-right:20px;
    }
    .Sb .b{
      margin:10px;
    }
    .i{
      width:444px;
    }
    label{
      font-size:18px;
    }
    textarea{
      resize:none;
    }
    .Sb .btn{
      display:flex;
      justify-content: center;
    }
    .Ist{
      margin-bottom:25px;
    }
    .Ist h3{
      margin-bottom:5px;
    }
    .IInd{
     
      width:100%;
      display:flex;
      justify-content: start;
      align-items: center;
      margin-left:15%;

    }
    img{
      width:100%;
      height:200px;
    }
    .order-total--amount {
      width: 70%;
      
    }
  
      .order-total--subdata {
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.8rem;
        padding: 3.2rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius:5px;
        height:400px;
      }
      .tp{
        text-align:center;
        background-color:goldenrod;
      }
      .sbi{
        display:flex;
      }
      .sbi >p {
        font-weight:bold;
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        
          display:block;

          .fl{
            display:block;
          }
          .i{
           width: auto;
          }
          .t{
            width:200px;
          }
        
      }
  }
 
`;
export default CheckoutPage;
