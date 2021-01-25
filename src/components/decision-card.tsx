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