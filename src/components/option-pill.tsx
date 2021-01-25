import React from 'react';
import styled from "styled-components";
import xIcon from '../icons/x-mark.svg';

type OptionPillProps = {
 option: string, 
 onDeleteClick?: (option: string) => void; 
 isActive?: boolean;
}

OptionPill.defaultProps = {
    onDeleteClick: undefined,
    isActive: false,
}

const Pill = styled.div<{isActive: boolean}>`
    background-color: ${({isActive}) => isActive ? '#f0ccd4' : '#ffffff'};
    color: #d97b93;
    font-family: 'Montserrat';
    text-align: center; 
    padding: 5px 50px; 
    width: max-content;
    border-radius: 15px;
    margin: 2px; 
    position: relative;
    @media (max-width: 576px) {
        max-width: 220px;
        word-wrap: break-word;
    }
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
    option, onDeleteClick, isActive = false,
}:OptionPillProps) {
return (
  <Pill isActive={isActive}>
    {option}
    {onDeleteClick && (
    <CloseIcon src={xIcon} alt="delete icon" onClick={() => onDeleteClick(option)} />
        )}
  </Pill>
)
};



export default OptionPill;