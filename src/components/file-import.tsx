import { useRef, useState } from "react";
import styled from "styled-components";
import { array, string } from 'yup'
import { Button } from "../components";
import { useTranslation } from 'react-i18next';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h2`
    color: black;
`;

const Paragraph = styled.p`
    color: black;
`;
const ErrorText = styled.p`
    color: #de3442;
    font-size: 12px;
    margin: 8px;
`;

const ImportButton = styled(Button)`
    background-color: #ffe400;
    color: black;
    &:hover {
        border: 2px solid #ffe400;
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
    const {t} = useTranslation();

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
                setError(t("jsonError"));
            }
        };
    }
    return (
        <FormWrapper>
            <Text>{t("jsonImportTitle")}</Text>
            <input style={{display: 'none'}} type="file" accept=".json" ref={fileInput} onChange={(e) => {setFileName(e.target?.files?.[0]?.name ?? "")}} onInput={() => {console.log('onInput')}} />
            <Paragraph>{fileName === "" ? t("noFileSelected") : fileName}</Paragraph>
            <Button secondary onClick={() => {setError(""); fileInput.current?.click();}}>{t("selectFile")}</Button>
            <ImportButton style={{ marginTop: 8 }} onClick={() => { fileInput.current?.files?.[0] ? handleLoadJson(fileInput.current?.files?.[0]) : setError(t("selectFileLong"))}}>{t("import")}</ImportButton>
            <ErrorText>{error}</ErrorText>
        </FormWrapper>
    )
}

export default FileImport;