import { CarrouselProps } from "../../utils/types";
import React, { useEffect, useRef, useState } from "react";
import "./Carrossel.css";

export const Carrossel: React.FC<CarrouselProps> = ({ children }) => {
  const [quantiles, setQuantiles] = useState<number>(React.Children.count(children));
  const slideRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement[]>([]);
  const intervalRef = useRef<number | null>(null); // Armazena a referência do intervalo
  let buttons: React.ReactNode[] = [];
  const classCSS = "controlls__btn--selected";

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
        if (!slideRef.current) return;
        let currentPass = Number(slideRef.current.getAttribute('data-pass')) || 0;
        if (currentPass < quantiles - 1) currentPass += 1;
        else if (currentPass === quantiles - 1) currentPass = 0;
        slideRef.current.style.transform = `translateX(-${currentPass}00%)`;
        slideRef.current.setAttribute('data-pass', currentPass.toString());
        btnRef.current.forEach(obj => { // Remove a classe 'controlls__btn--selected' dos botões
            obj.classList.remove('controlls__btn--selected')
        })
        btnRef.current[currentPass].classList.add('controlls__btn--selected') //  adiciona a classe 'controlls__btn--selected' no slide atual
    }, 7000); // Tempo para que o slide seja passdo automáticamente

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current); // Limpa o intervalo quando o componente desmontar
    };
  }, [quantiles]);

  const passSlide = (id: number) => {
    if (!slideRef.current) return;
    slideRef.current.style.transform = `translateX(-${id}00%)`;
    slideRef.current.setAttribute('data-pass', id.toString());
    btnRef.current.forEach(btn => {
      if (btn.id === id.toString()) btn.classList.add(classCSS);
      else btn.classList.remove(classCSS);
    });

    if (intervalRef.current !== null) clearInterval(intervalRef.current); // Limpa o intervalo quando passSlide é chamada
  };

  for (let i = 0; i < quantiles; i++) {
    buttons.push(
      <button
        ref={(el) => {
          if (el) btnRef.current[i] = el;
        }}
        key={i}
        onClick={() => passSlide(i)}
        id={`${i}`}
        className={`controlls__btn ${i === 0 ? classCSS : ""}`}
      />
    );
  }

  return (
    <div className="carrossel__component">
      <div className="carrossel__slider" ref={slideRef} data-pass="0">
        {children}
      </div>
      <div className="controlls">{buttons}</div>
    </div>
  );
};