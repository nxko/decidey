import { ReactElement } from "react";
import styled from "styled-components"
import breakpoints from "../styles/breakpoints";

const Overlay = styled.div`
    font-family: 'Montserrat';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
`;

const ContentContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 16px;
    ${breakpoints.xs`
        inset: 60vh 0 0 0;
    `}
    ${breakpoints.md`
        inset: 35vh 20vw; 
    `}
`


type ModalProps  = {
    isOpen: boolean;
    closeModal: () => void;
    content: ReactElement;
}

const Modal = ({isOpen, closeModal, content}: ModalProps) => {
    if (!isOpen) {
        return null;
    }
    return (
        <Overlay onClick={() => { closeModal(); }}>
            <ContentContainer onClick={(e) => e.stopPropagation()}>
                {content}
            </ContentContainer>
        </Overlay>
    )
}

export default Modal;