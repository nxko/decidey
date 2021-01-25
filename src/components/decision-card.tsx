import React from 'react';
import styled from "styled-components";


type DecisionCardProps = {
 decision: string, 
}

const Card = styled.div`
    background-color: white;
    color: rgb(182,68,242);
    font-family: 'futura';
    font-weight: 800; 
    text-align: center; 
    padding: 20px 90px; 
    width: max-content;
    border-radius: 15px;
    font-size: 30px; 
`;

function DecisionCard({decision}:DecisionCardProps) {
return (
  <Card>
    <p>
      {decision}
    </p>
  </Card>
)
};

export default DecisionCard;