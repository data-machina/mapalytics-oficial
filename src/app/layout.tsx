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
                
                {/* FOOTER */}
                
                <footer>
                    <div className="footer__container">
                        <img className="footer__logo" src="./dm-logo-name.svg" alt="" />
                        
                        <div className="menu__empresa">
                            <a className="first" href="#">data machina</a>
                            <a className="links" href="#inicio">início</a>
                            <a className="links" href="#inicio">soluções</a>
                            <a className="links" href="#nossas-solucoes">clientes</a>
                            <a className="links" href="#premio">prêmios</a>
                            <a className="links" href="#aceleracao">aceleração</a>
                            <a className="links" href="#contato">contato</a>
                        </div>

                        <div className="menu__empresa">
                            <a className="first" href="#Mapalytics">mapalytics</a>
                            <a className="links" href="">apresentação</a>
                            <a className="links" href="">o que é o mapalytics</a>
                            <a className="links" href="">segmentos atendidos</a>
                            <a className="links" href="">pacotes e funcionalidades</a>
                            <a className="links" href="">peça uma demonstração</a>
                            <a className="links" href="">material para empresas</a>
                            <a className="links" href="">contato</a>

                        </div>
                        <div className="footer__sociais">
                            <div className="footer__link">
                                <a href="https://www.instagram.com/data.machina/" target="blank">
                                    <img src="./icones/instagram.svg" />
                                </a>
                                <a href="https://www.linkedin.com/company/datamachina" target="blank" >
                                    <img src="./icones/linkedin.svg" />
                                </a>
                                <a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank">
                                    <img src="./icones/youtube.svg" />
                                </a>
                            </div>
                            <button className="button__border">material de imprensa</button>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom--items">
                            <img className="footer__" src="./dm.svg" alt="" />
                            <div className="footer__mapalytics">
                                <img src="./mapalyticsbranco.svg" alt="" />
                            </div>
                        </div>
                        <div className="footer__bottom--items">
                            <p>Data Machina - 2024</p>
                            <a href="http://tre.art.br/" target="black" className="tre">
                                <img className="footer__tre" src="./tre.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
