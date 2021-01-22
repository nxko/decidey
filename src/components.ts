import styled from "styled-components";

export const Container = styled.div`
background: #B644F2;
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
  font-family: 'futura';
  margin-top: 15px; 
`;

export const Paragraph = styled.p`
  font-family: 'futura'; 
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  color: white;
  font-family: 'futura';
  margin-left: 4.5px;
  margin-right: 4.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 25px;
  &:hover {
    color: #B644F2;
    background-color: white; 
  }
  &:focus{
    outline: none;
  }
`;

export const InputField = styled.input`
  border: none; 
  border-radius: 20px;
  height: 30px;
  width: 250px; 
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'futura';
  color:  #B644F2;
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
  background: #c07de3;
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
    background: #f896ff;
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