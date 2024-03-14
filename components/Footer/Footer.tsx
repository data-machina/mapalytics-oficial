import './Footer.css';
import Link from 'next/link'

export const Footer = () => {




    return (
            <footer>
                <div className="footer__container">
                    <img className="footer__logo" src="./dm-logo-name.svg" alt="" />

                    <div className="menu__empresa">
                        <Link className="first" href="/">data machina</Link>
                        <a className="links" href="#inicio">início</a>
                        <a className="links" href="#solucoes">soluções</a>
                        <a className="links" href="#clientes">clientes</a>
                        <a className="links" href="#premios">prêmios</a>
                        <a className="links" href="#aceleracoes">aceleração</a>
                        <a className="links" href="#contato">contato</a>
                    </div>

                    <div className="menu__empresa">
                        <Link className="first" href="/mapalytics">mapalytics</Link>
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
                                <img src="./icones/instagram.svg" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/datamachina" target="blank" >
                            <img src="./icones/linkedin.svg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank">
                            <img src="./icones/youtube.svg" alt="" />
                        </a>
                    </div>
                    <button className="button__border">material de imprensa</button>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom--items">
                    <div className="dm-footer__mapalytics">
                        <img className="footer__logo--dm" src="./dm-white.svg" alt="" />
                    </div>
                    <Link href="/mapalytics">
                        <img className='footer__mapalytics--logo' src="./mapalyticscinza.svg" alt="" />
                    </Link>
                </div>
                <div className="footer__bottom--items">
                    <p>Data Machina - 2024</p>
                    <a href="http://tre.art.br/" target="black" className="tre">
                        <img className="footer__tre" src="./tre.svg" alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}