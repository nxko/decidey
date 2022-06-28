import { useRef, useState } from "react";
import styled from "styled-components";
import { array, string } from 'yup'
import { Button } from "../components";

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h2`
    color: #6e529d;
`;

const Paragraph = styled.p`
    color: #6e529d;
`;
const ErrorText = styled.p`
    color: #de3442;
    font-size: 12px;
    margin: 8px;
`;

const ImportButton = styled(Button)`
    background-color: #6e529d;
    color: white;
    &:hover {
        border: 1px solid #6e529d;
    }
`;


type Props = {
    onFileImport: (file: string[]) => void ;
};

const schema = array().of(string().required()).required()

const FileImport = ({ onFileImport }: Props) => {
    const fileInput = useRef<HTMLInputElement | null>(null); 
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");

    const handleLoadJson = (file?: File) => {
        if (!file) {
            console.log("No file was found.")
            return;
        }
        const reader = new FileReader();
        reader.readAsText(file, 'utf-8');
        reader.onload = async (e) => {
            try {
                const result = await schema.validate(JSON.parse(e?.target?.result as string));
                onFileImport(result);
            } catch (error) {
                setError("Die importierte JSON-Datei ist nicht valide. Bitte lade eine JSON mit einem Array von Strings hoch.");
            }
        };
    }
    return (
        <FormWrapper>
            <Text>Importiere deine Optionen als JSON-Datei</Text>
            <input style={{display: 'none'}} type="file" accept=".json" ref={fileInput} onChange={(e) => {setFileName(e.target?.files?.[0]?.name ?? "")}} onInput={() => {console.log('onInput')}} />
            <Paragraph>{fileName === "" ? 'Keine Datei ausgewählt' : fileName}</Paragraph>
            <Button secondary onClick={() => {setError(""); fileInput.current?.click();}}>Datei auswählen</Button>
            <ImportButton style={{ marginTop: 8 }} onClick={() => { fileInput.current?.files?.[0] ? handleLoadJson(fileInput.current?.files?.[0]) : setError('Wähle eine Datei aus, um sie dann zu importieren.')}}>Importieren</ImportButton>
            <ErrorText>{error}</ErrorText>
        </FormWrapper>
    )
}

export default FileImport;