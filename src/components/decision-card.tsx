import React from 'react';
import styled from "styled-components";


type DecisionCardProps = {
    decision: string, 
}

const Card = styled.div`
    background-color: #000;
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 800; 
    text-align: center; 
    padding: 50px 90px; 
    width: max-content;
    border-radius: 15px;
    font-size: 30px; 
    max-width: 250px; 
    word-wrap: break-word;
    border: #ffe400 5px solid;
    @media (max-width: 576px) {
      width: 250px;  
      font-size: 25px;
      padding: 50px 30px;
    }
`;

function DecisionCard({decision}:DecisionCardProps) {
return (
  <Card>
      {decision}
  </Card>
)
};

export default DecisionCard;