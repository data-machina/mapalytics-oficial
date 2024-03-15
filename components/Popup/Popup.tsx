import './popup.css'
import React, { useRef } from 'react';

interface PopupProps {
    children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({children}) => {
    let clickble = ['popup__close', 'mais', 'popup']
    let popupHandle = true
    let popEl = useRef<HTMLDivElement>(null);
    let container = useRef<HTMLDivElement>(null);
    let popButton: any = useRef<HTMLButtonElement>(null)

    let PopupClick = (event: any) => {
        if(!popEl.current) return
        if(clickble.includes(event.target.classList[0])){
            if(popupHandle) {
                popEl.current.classList.add('popup--active')
                document.body.classList.add('body--pd')
                popupHandle = false
            }
            else {
                popEl.current.classList.add('popup--closing')
                setTimeout(() => {
                    if(!popEl.current) return
                    document.body.classList.remove('body--pd')
                    popEl.current.classList.remove('popup--active')
                    popEl.current.classList.remove('popup--closing')
                    popupHandle = true
                }, 1000)
            }
        }
    }

    return (
        <div onClick={PopupClick} ref={container}>
            <button className="mais" ref={popButton}>Baixar material<div className="mais__arrow">↓</div></button>
            <div className="popup" ref={popEl}>
                <div className="popup__container">
                    <button className="popup__close">✕</button>
                    { children }
                </div>
            </div>
        </div>
    )
}