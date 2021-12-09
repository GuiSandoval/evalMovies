import { createContext, useState } from 'react'

interface IModalContext {
    modal: boolean;
    handleToggleModal: any;
    filmContext:any 
    setFilmContext:any
}

export const ModalContext = createContext({} as IModalContext);

// export function ModalContextProvider({ children }:any) {
//     const [modal, setModal] = useState(false);
//     // const [modalContent, setModalContent] = useState(null);
//     // const [modalTitle, setModalTitle] = useState(null);
//     // const [modalFooter, setModalFooter] = useState(null);

//     const handleToggleModal = () => {
//         console.log("handleToggleModal");
//         console.log(modal);
//         setModal(!modal);
//     }

//     return (
//         <ModalContext.Provider value={{modal, setModal}}>
//             {children}
//         </ModalContext.Provider>
//     )

// }