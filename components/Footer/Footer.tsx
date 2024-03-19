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

    return (
            <footer>
                <div className="footer__container">
                    <img className="footer__logo" src="./dm-logo-name.svg" alt="" />

                    <div className="footer__empresa">
                        <div className="footer__first dropdown--novo">mapalytics</div>
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
                            <a href="https://www.instagram.com/data.machina/" target="blank" aria-label="Estamos no Instagram!">
                                <img src="./icones/instagram.svg" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/datamachina" target="blank" aria-label="Estamos no LinkedIn!">
                            <img src="./icones/linkedin.svg" alt="" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank" aria-label="Estamos no Yotuube!">
                            <img src="./icones/youtube.svg" alt="" />
                        </a>
                    </div>
                    <a className="footer__button--border" href='https://drive.google.com/drive/folders/1JROi6IP1GcIUxz8vNDe-Pk0SZtx0Kcdd?usp=sharing' target='_black'>material de imprensa</a>
                </div>
            </div>
           
            <div className="footer__bottom">
                <div className="footer__bottom--items">
                    <Link className="dm-footer__mapalytics" href='https://datamachina.com.br'>
                        <img className="footer__logo--dm" src="./dm.svg" alt="" />
                    </Link>
                    <div className="dm-footer__mapalytics map-footer--after">
                        <img className='footer__mapalytics--logo' src="./mapalyticsbranco.svg" alt="" />
                    </div>
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