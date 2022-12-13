import styled from 'styled-components';

export const Container = styled.div`
 //background: linear-gradient(to bottom, #6e529d 0%,#d97b93 100%);
 background: #fff;
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
  font-weight: 800;
  text-transform: uppercase;
  color: #000;
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

export const Button = styled.button<{secondary?: boolean}>`
  background-color: ${({secondary}) => secondary ? 'transparent' : '#ffe400'};
  border: #ffe400 2px solid;
  padding: 8px;
  color: black;
  font-family: 'Montserrat';
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 4.5px;
  margin-right: 4.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 25px;
  &:hover {
    background-color: ${({secondary}) => secondary ? '#ffe400' : 'transparent'}; 
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
  background-color:  #ffe400;
  border: none;
  &:hover {
    background-color: #f6f6f6;
    color: #ffffff; 
  }
  @media (max-width: 576px) {
    font-size: 17px;
  }
`;

export const ImportButton = styled(Button)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  opacity:1;
  background-color: black;
  &:hover {
    background-color: black; ;
    opacity: 0.5;
  }
`;

export const InputField = styled.input`
  border: none; 
  border-radius: 20px;
  background-color: #f6f6f6;
  height: 30px;
  width: 250px; 
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Montserrat';
  color: black;
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
  margin-top: 5px;
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
  background: black;
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
    background: #ffe400;
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

export const UploadIcon = styled.img`
  height: 25px;
  width: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const KuttermediaLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute; 
  bottom: 15px;
  left: 15px;
  opacity: 1;
  border-radius: 65px;
  transition: all 0.2s ease-in-out;
  background-color: black;
  border: #ffe400 2px solid;
  &:hover {
    opacity: 0.5;
  }
`;
