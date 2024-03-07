import "./globals.css";
import Link from 'next/link'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <header>
                    <img className="header__logo" src="./dm-logo-name.svg" alt="Data Machina" />
                    <nav>
                        <div className="dropdown">
                            <Link className="dropdown__link" href="/">data machina</Link>
                            <div className="header__dropdown">
                                <a className="header__option" href="#inicio">início</a>
                                <a className="header__option" href="#solucoes">soluções</a>
                                <a className="header__option" href="#clientes">clientes</a>
                                <a className="header__option" href="#premios">prêmios</a>
                                <a className="header__option" href="#aceleracoes">acelerações</a>
                                <a className="header__option" href="#contato">contato</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Link className="dropdown__link" href="/mapalytics">mapalytics</Link>
                            <div className="header__dropdown">
                                <a className="header__option" href="#apresentacao">apresentação</a>
                                <a className="header__option" href="#oquee">o que é o mapalytics</a>
                                <a className="header__option" href="#segmentos">segmentos atendidos</a>
                                <a className="header__option" href="#pacotes">pacotes e funcionalidades</a>
                                <a className="header__option" href="#peca">peça uma demonstração</a>
                                <a className="header__option" href="#material">material para empresas</a>
                                <a className="header__option" href="#contato">contato</a>
                            </div>
                        </div>
                    </nav>
                </header>

                {children}

            </body>
        </html>
    );
}
