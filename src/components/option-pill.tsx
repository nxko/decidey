import styled from "styled-components";
import xIcon from '../icons/x-mark.svg';

type OptionPillProps = {
 option: string, 
 onDeleteClick?: (option: string) => void; 
}

const Pill = styled.div`
    background-color: white;
    color: #d97b93;
    font-family: 'Montserrat';
    text-align: center; 
    padding: 5px 50px; 
    width: max-content;
    border-radius: 15px;
    margin: 2px; 
    position: relative;
`;

const CloseIcon = styled.img`
    height: 20px;
    width: 20px; 
    position: absolute;
    right: 5px;
    top: 5px; 
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
        transform: rotate(90deg);
    } 
`;

function OptionPill({
    option, onDeleteClick
}:OptionPillProps) {
return (
    <Pill>
        {option}
        {onDeleteClick && (
            <CloseIcon src={xIcon} alt="delete icon" onClick={() => onDeleteClick(option)}/>
        )}
    </Pill>
)
};

export default OptionPill;