"use client"
import "./mapalytics.css";

import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import React, { useEffect } from 'react';
import { Carrossel } from "../../components/Carrousel/Carrossel";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Popup } from "../../components/Popup/Popup";

const PipedriveFormPopup = () => {
    useEffect(() => {
        const container = document.querySelector('.popupFormularo');

        // Verifica se o script já foi inserido, se sim, remove
        const existingScript = container?.querySelector('script');
        if (existingScript) {
            existingScript.remove();
        }

        // Cria um novo script element
        const script = document.createElement('script');
        script.src = 'https://webforms.pipedrive.com/f/loader';
        script.async = true;

        // Insere o novo script element para que o script seja carregado e executado
        container?.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return (
        <div
            className="pipedriveWebForms popupFormularo"
            data-pd-webforms="https://webforms.pipedrive.com/f/5X8CS4JADZCQKtJMrJiFKGiyiL5TFmetfSmi7VE8ZD8yn1YD1rF8XW4b7s2HLSou1Z"
            dangerouslySetInnerHTML={{
                __html: `<script src="https://webforms.pipedrive.com/f/loader"></script>`,
            }}
        />
    );
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <title>Mapalytics - Data Machina</title>
                <link rel="shortcut icon" href="./logoaba.png" type="image/x-icon" />
                <meta name="description" content="Somos pesquisadores e empreendedores com cultura de inovação aplicada, prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos." />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
