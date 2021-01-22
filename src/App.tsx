import React, { MouseEvent, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import DecisionCard from './components/decision-card';
import OptionPill from './components/option-pill';
import DecideyLogo from './images/decidey-logo.png';



const Container = styled.div`
background: #B644F2;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const Headline = styled.h1`
  font-size: 100px;
`;

const Paragraph = styled.p`
  font-family: 'futura'; 
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
`;

const Button = styled.button`
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

const InputField = styled.input`
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

const CardContainer = styled.div`
  display: inline-flex; 
  justify-content: center;
`;

const CheckboxContainer = styled.div`
  display: inline-flex; 
  justify-content: center;
  align-items: center; 
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #efefef;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #c07de3;
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

function App() {
  const [options, setOptions] = React.useState<string[]>([]);
  const [decisions, setDecisions] = React.useState<string[]>([]);
  const [latestDecision, setLatestDecision] = React.useState<string>();
  const [decideButtonVisible, setDecideButtonVisible] = React.useState<boolean>(true);

  const last5 = decisions.slice(0, 5);
  let inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const option = inputRef.current!.value;
    if(option === 'testdata') {
      setOptions(['Lasagne', 'Pizza', 'Spaghetti', 'Schnitzel', 'Suppe']);
    } else if(option === '') {
       alert('Bitte etwas in Textfeld eingeben!');
    }else {
      setOptions([...options, option])
    }
    inputRef.current!.value = '';
   }

   const removeOption = (option: string) => {
     if(option) {
       let i = 0; 
       while (i < options.length) {
          if(options[i] === option) {
            options.splice(i, 1);
            setOptions([...options]);
          } else {
            i++; 
          }
       }
     }
   }

   const resetOptions = (e: MouseEvent<HTMLButtonElement>) => {
     e.preventDefault()
     setOptions([]);
     setDecisions([]);
     setLatestDecision('');
     console.log(options);
   }

   const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum]; 
      setDecisions([option,...decisions]);
      setLatestDecision(option);
  };

  const tooltipMessage = 'Jede Option kann nur 1x ausgewählt werden.'

  return (
    <Container>
      <ContentContainer>
        <img src={DecideyLogo}/>
        <Paragraph>Optionen eingeben</Paragraph>
        <form onSubmit={onFormSubmit}>
          <InputField type="text" ref={inputRef}/>
          <br/>
          <ButtonContainer>
            <Button type='submit'>Hinzufügen</Button>
            <Button onClick={resetOptions}>Zurücksetzen</Button>
          </ButtonContainer>
          <CheckboxContainer>
              <p data-tip={tooltipMessage}>
              <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckBoxWrapper>
              </p>
            <Paragraph>
              KO-Mode
            </Paragraph>
          </CheckboxContainer>
        </form>
        <br/>
          {options.map((option => (
            <CardContainer>
              <OptionPill option={option} onDeleteClick={removeOption}/>
            </CardContainer>
          )))}
          <br/><br/>
          {options.length > 0 && decideButtonVisible && (
            <Button onClick={makeDecision}>Entscheiden</Button>
          )}
          <Paragraph>
            Entscheidung
          </Paragraph>
          
          {latestDecision && latestDecision !== '' && (
            <CardContainer>
              <DecisionCard decision={latestDecision}/>
            </CardContainer>
          )}

          {decisions.length > 0 && (
            <>
              <Paragraph>
                Letzte 5 Entscheidungen
              </Paragraph>
                {last5.map((decision) => (
                  <CardContainer>
                      <OptionPill option={decision}/>
                  </CardContainer>
                ))}
            </>
          )}
          
          <ReactTooltip 
                place='bottom'
                type='light'
                effect='solid'
                multiline
              />
        </ContentContainer>
    </Container>
  );
}

export default App;
