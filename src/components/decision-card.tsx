import React from 'react';
import styled from "styled-components";


type DecisionCardProps = {
    decision: string, 
}

const Card = styled.div`
    background-color: white;
    color: #d97b93;
    font-family: 'Montserrat';
    font-weight: 800; 
    text-align: center; 
    padding: 50px 90px; 
    width: max-content;
    border-radius: 15px;
    font-size: 30px; 
    max-width: 250px; 
    word-wrap: break-word;
    @media (max-width: 576px) {
        font-size: 25px;
        padding: 50px 95px;
        max-width: 130px;
      
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