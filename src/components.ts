import styled from 'styled-components';

export const Container = styled.div`
background: linear-gradient(to bottom, #6e529d 0%,#d97b93 100%);
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  color: #ffffff;
`;

export const ContentContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Headline = styled.h1`
  font-size: 80px;
  font-family: 'Montserrat';
  margin-top: 15px; 
  @media (max-width: 576px) {
    margin-bottom: 0px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat'; 
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`;

export const DecisionParagraph = styled(Paragraph)`
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  color: white;
  font-family: 'Montserrat';
  margin-left: 4.5px;
  margin-right: 4.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 25px;
  &:hover {
    color: #6e529d;
    background-color: white; 
  }
  &:focus{
    outline: none;
  }
`;

export const DecideButton = styled(Button)`
  font-size: 20px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color:  #6e529d;
  border: none;
  &:hover {
    background-color: #d97b93;
    color: #ffffff; 
  }
  @media (max-width: 576px) {
    font-size: 17px;
  }
`;

export const InputField = styled.input`
  border: none; 
  border-radius: 20px;
  height: 30px;
  width: 250px; 
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Montserrat';
  color:  #6e529d;
  &:focus{
    outline: none;
  }
`;

export const CardContainer = styled.div`
  display: inline-flex; 
  justify-content: center;
`;

export const CheckboxContainer = styled.div`
  display: inline-flex; 
  justify-content: center;
  align-items: center; 
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #6e529d;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #ffffff;
    margin-top: 4px;
    margin-left: 3px;
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #d97b93;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Spacing = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 5px; 
  left: 0;
  width: 100vw;
  font-family: 'Montserrat';
  font-size: 10px;
  opacity: 0.5;
  a {
    color: #ffffff;
  }
`;

export const Logo = styled.img`
  width: 70%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;
