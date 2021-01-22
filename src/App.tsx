import React, { MouseEvent, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import DecisionCard from './components/decision-card';
import OptionPill from './components/option-pill';
import DecideyLogo from './images/decidey-logo.png';
import { 
  Button, 
  ButtonContainer, 
  CheckBox, 
  CheckboxContainer, 
  CheckBoxLabel, 
  CheckBoxWrapper, 
  Container, 
  ContentContainer, 
  InputField, 
  Paragraph, 
  CardContainer 
} from './components';

function App() {
  const [options, setOptions] = React.useState<string[]>([]);
  const [decisions, setDecisions] = React.useState<string[]>([]);
  const [latestDecision, setLatestDecision] = React.useState<string>();

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
          {options.length > 0 && (
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
