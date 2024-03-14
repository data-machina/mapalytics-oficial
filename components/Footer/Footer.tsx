import Link from 'next/link'
import './Footer.css';
import { useRouter } from 'next/navigation'

export const Footer = (props: any) => {
    const router = useRouter()
    const page = props.pageName // Identifica em qual rota o elemento atualmente

    const showScroll = (whichPage: string, param: string) => {
        let elAltura = document.getElementById(param)?.getBoundingClientRect().y 
        let scrollTop: any
        
        if(elAltura != undefined) scrollTop = document.documentElement.scrollTop + elAltura
        
        if(page == whichPage) {
            if(elAltura != 0) {
                window.scrollTo({
                    top: scrollTop
                })
            }
        } else {
            if(whichPage == 'datamachina') router.push('/')
            if(whichPage == 'mapalytics') router.push('/mapalytics')

            setTimeout(() => {
                const altura: any = document.getElementById(param)?.getBoundingClientRect().y
                if(elAltura != 0) {
                    window.scrollTo({
                        top: document.documentElement.scrollTop + altura
                    })
                }
            }, 1000); // Espera um tempo para montagem do DOM
        }
    }

    const rodape = page == 'datamachina' ?
        (<>
            <div className="dm-footer__mapalytics dm-footer--after">
                <img className="footer__logo--dm" src="./dm-white.svg" alt="" />
            </div>
            <Link className="dm-footer__mapalytics" href="/mapalytics">
                <img className='footer__mapalytics--logo' src="./mapalyticscinza.svg" alt="" />
            </Link>
        </>):
        (
            <>
                <Link className="dm-footer__mapalytics" href='/'>
                    <img className="footer__logo--dm" src="./dm.svg" alt="" />
                </Link>
                <div className="dm-footer__mapalytics map-footer--after">
                    <img className='footer__mapalytics--logo' src="./mapalyticsbranco.svg" alt="" />
                </div>
            </>
        )

    return (
            <footer>
                <div className="footer__container">
                    <img className="footer__logo" src="./dm-logo-name.svg" alt="" />

                    <div className="footer__empresa">
                        <Link className="footer__first" href="/">data machina</Link>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "inicio")}>início</button>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "solucoes")}>soluções</button>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "clientes")}>clientes</button>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "premios")}>prêmios</button>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "aceleracoes")}>aceleração</button>
                        <button className="footer__links" onClick={()=> showScroll("datamachina", "contato")}>contato</button>
                    </div>

                    <div className="footer__empresa">
                        <Link className="footer__first" href="/mapalytics">mapalytics</Link>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "apresentacao")}>apresentação</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "oquee")}>o que é o mapalytics</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "segmentos")}>segmentos atendidos</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "pacotes")}>pacotes e funcionalidades</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "peca")}>peça uma demonstração</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "material")}>material para empresas</button>
                        <button className="footer__links" onClick={()=> showScroll("mapalytics", "contato")}>contato</button>
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
                    <button className="footer__button--border">material de imprensa</button>
                </div>
            </div>
           
            <div className="footer__bottom">
                <div className="footer__bottom--items">
                    {rodape}
                </div>
                <div className="footer__bottom--items">
                    <p>Data Machina - 2024</p>
                    <a href="http://tre.art.br/" target="black">
                        <img className="footer__tre" src="./tre.svg" alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}