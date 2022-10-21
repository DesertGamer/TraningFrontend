import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components"

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={`
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            flex 
            justify-center 
            items-center 
            bg-[rgba(0, 0, 0, 0.5)]
        `}>
            <div className={`
                bg-slate-500 
                w-[600px] 
                h-[300px] 
                rounded-[15px] 
                p-[15px]
            `}>
                <div className={`
                    flex 
                    justify-end 
                    text-[30px]
                    cursor-pointer
                    border-solid
                    border-[2px]
                `} onClick={handleCloseClick}>
                    x
                </div>
                <div className={`
                    flex 
                    items-center 
                    justify-center 
                    flex-col
                    w-full
                `}>{children}</div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};


export default Modal;