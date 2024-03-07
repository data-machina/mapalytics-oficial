import { CarrouselProps } from "../../utils/types";
import React, { useRef, useState } from "react";
import "./Carrossel.css";

export const Carrossel: React.FC<CarrouselProps> = ({ children }) => {
  const [quantiles, setQuantiles] = useState<number>(
    React.Children.count(children)
  );
  const slideRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement[]>([]);
  let buttons: React.ReactNode[] = [];
  const classCSS = "controlls__btn--selected";


  const passSlide = (id: number) => {
    if(!slideRef.current) return;
    slideRef.current.style.transform = `translateX(-${id}00%)`;
    btnRef.current.forEach(btn => {
        if (btn.id == id.toString()) btn.classList.add(classCSS);
        else btn.classList.remove(classCSS);
    })
  };
 
  for (let i = 0; i < quantiles; i++) {
    buttons.push(
      <button
        ref={(el) => btnRef.current[i] = el!}
        key={i}
        onClick={() => passSlide(i)}
        id={`${i}`}
        className={`controlls__btn ${
          i == 0 ? "controlls__btn--selected" : null
        }`}
      />
    );
  }
  return (
    <div className="carrossel__component">
      <div className="carrossel__slider" ref={slideRef}>{children}</div>
      <div className="controlls">{ buttons }</div>
    </div>
  );
};
