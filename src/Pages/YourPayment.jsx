import React from 'react'
import styled from 'styled-components';

const YourPayment = () => {
  return (
    <Wrapper>
        <div className="container">
        <h2>YourPayment is Processing...</h2>
        <p>Please do not close the window</p>
        </div>
       
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default YourPayment