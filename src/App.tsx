import './App.css';
import React, { MouseEvent, useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import DecisionCard from './components/decision-card';
import OptionPill from './components/option-pill';
import arrowIcon from './icons/arrow-down-sign-to-navigate.svg';
import logoSrc from './icons/decidey-logo-v2.2-yellow.png';
import importIcon from './icons/import.svg';
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
  CardContainer, 
  Spacing,
  DecideButton,
  DecisionParagraph,
  Logo,
  ImportButton,
  LanguageButton
} from './components';
import FileImport from './components/file-import';
import Modal from './components/modal';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [options, setOptions] = React.useState<string[]>([]);
  const [decisions, setDecisions] = React.useState<string[]>([]);
  const [latestDecision, setLatestDecision] = React.useState<string>();
  const [isKoModeActive, setIsKoModeActive] = React.useState<boolean>(false);
  const [last5, setLast5] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);

  useEffect(()=> {
    setLast5(decisions.slice(0,5));
  }, [decisions]);

  let inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const option = inputRef.current?.value;
    if(option === 'testdata') {
      setOptions(['Lasagne', 'Pizza', 'Spaghetti', 'Schnitzel', 'Suppe']);
    } else if(option === '') {
      alert('Bitte etwas in Textfeld eingeben!');
    } else if (option) {
      setOptions([...options, option])
    }
    if (inputRef.current?.value) inputRef.current.value = '';
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
  }
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsKoModeActive(e.currentTarget.checked);
  }

  const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum]; 
    setDecisions([option,...decisions]);
    setLatestDecision(option);
    if(isKoModeActive) {
      removeOption(option);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  const tooltipMessage = t("koModeTooltip");

  return (
    <Container>
      <ContentContainer>
        <Logo src={logoSrc} width='70%'/>
        <Paragraph>{t("title")}</Paragraph>
        <form onSubmit={onFormSubmit}>
          <InputField type="text" ref={inputRef} />
          <Spacing />
          <ButtonContainer>
            <Button type='submit'>{t("add")}</Button>
            <Button secondary onClick={resetOptions}>{t("reset")}</Button>
          </ButtonContainer>
          <CheckboxContainer>
            <span data-tip={tooltipMessage}>
              <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" onChange={handleCheckboxChange} />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckBoxWrapper>
            </span>
            <Paragraph>
              {t("koMode")}
            </Paragraph>
          </CheckboxContainer>
        </form>
        <Spacing />
        {options.map((option, index) => (
          <CardContainer key={`option-${option}-${index}`}> 
            <OptionPill option={option} onDeleteClick={removeOption} isActive={latestDecision === option} />
          </CardContainer>
          ))}
        <Spacing />
        <Spacing />
        {options.length > 0 && (
          <DecideButton onClick={makeDecision}>{t("decide")}</DecideButton>
        )}
        <Spacing />

        {decisions.length > 0 && (
        <>
          <DecisionParagraph>
          {t("decision")}
          </DecisionParagraph>
              
          <img src={arrowIcon} height='15px' alt='arrowIcon' />
          <Spacing />

          {latestDecision && latestDecision !== '' && (
          <CardContainer>
            <DecisionCard decision={latestDecision} />
          </CardContainer>
              )}
          <Paragraph>
          {t("lastFiveDecisions")}
          </Paragraph>
          {last5.map((decision) => (
            <CardContainer>
              <OptionPill option={decision} />
            </CardContainer>
          ))}
        </>
          )}

        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
          

        <ReactTooltip 
          place='bottom'
          type='light'
          effect='solid'
          multiline
        />
        <ImportButton onClick={() => { setIsOpen(true) }}><img src={importIcon} height='auto' alt='importIcon' /></ImportButton>
        <LanguageButton onClick={toggleLanguage}>{t("language")}</LanguageButton>
      </ContentContainer>
      <Modal 
        isOpen={isOpen} 
        closeModal={() => { setIsOpen(false); }} 
        content={      
          <FileImport onFileImport={(loadedOptions: string[]) => { setOptions([...options, ...loadedOptions]); setIsOpen(false); }} />
        }
      />
    </Container>
  );
}

export default App;
