'use client';
import Image from "next/image";
import styles from "./page.module.css";

interface AnotherProps {
    slideName: string; // Define custom prop types here
    children: React.ReactNode; // Include this if you explicitly need to type `children`
}

const Carrossel: React.FC<AnotherProps> = ({ slideName, children }) => {
    let buttons: any[] = []
    let divsCount = 0
    
    children.forEach(e => {
        buttons.push(
            <button
                id={slideName}
                count={divsCount}
                className={`controlls__btn ${divsCount == 0 ? 'controlls__btn--selected' : ''}`}
                onClick={()=> passSlide(event)}
            ></button>
        )
        
        divsCount = divsCount + 1
    });

    return (
        <div className="carrossel__component" id={slideName}>
            <div className="controlls">
                { buttons }
            </div>
            <div id="carrossel__slider">
                { children }
            </div>
        </div>
    )
}

let buttons = ['header__option', 'header__dropdown', 'dropdown__link']
const actived = 'drop_actived'

document.body.addEventListener('click', (event: Event) => {
    const result = buttons.some(obj => obj === event.target.classList[0])
    result == false && document.querySelector('.drop_actived') ? document.querySelector('.drop_actived').classList.remove(actived) : null
})

function passSlide(event: Event, param: number) {
    let target = event.target
    let element =  document.getElementById(`${target.id}`)
    let classEl = 'controlls__btn--selected'

    try { event.target.classList[1].includes(classEl) }
    catch {
        element.querySelector(`.${classEl}`).classList.remove(classEl)
        event.target.classList.add(classEl)
        element.querySelector('#carrossel__slider').style.transform = `translatex(-${target.getAttribute('count') * 1}00%)`
    }
}

setTimeout(() => {
    document.querySelectorAll('.dropdown').forEach(obj => {
        obj.addEventListener('click', (params: Event) => {
            const drop = document.querySelector('.drop_actived')
            const aims = params.currentTarget
            if (drop == null) aims.classList.add(actived) 
            else if (aims.classList.contains(actived)) drop.classList.remove(actived)
            else drop.classList.remove(actived), aims.classList.add(actived)
        })
    }) 
}, 100);

export default function Home() { return (<>
<header>
    <img className="header__logo" src="./dm-logo-name.svg" alt="Data Machina" />
    <nav>
        <div className="dropdown">
            <a className="dropdown__link" href="#inicio">data machina</a>
            <div className="header__dropdown">
                <a className="header__option" href="#inicio">início</a>
                <a className="header__option" href="#solucoes">soluções</a>
                <a className="header__option" href="#clientes">clientes</a>
                <a className="header__option" href="#premios">prêmios</a>
                <a className="header__option" href="#aceleracoes">acelerações</a>
                <a className="header__option" href="#contato">contato</a>
            </div>
        </div>
        {/* drop_actived */}

        <div className="dropdown">
            <a className="dropdown__link" href="#mapalytics">mapalytics</a>
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
<main>
    
    {/* BANNER */}
    
    <section className="banner">
        <div className="link__ancor" id="apresentacao"></div>
        <div className="banner__container">
            <div className="banner__texts">
                <div>
                    <h1>
                        /Leads e clientes <br />
                        geolocalizados para otimizar <br />
                        sua força de vendas
                    </h1>
                    <p className="banner__p-2">
                        Explore o poder da inteligência geográfica com IA. Nossa <br />
                        plataforma integra dados públicos e internos, revelando <br />
                        insights poderosos para impulsionar seu negócio.
                    </p>
                </div>
                <a className="mais" href="./pdfs/dm_mapalytics.pdf" target="_blank">
                    Saiba mais
                    <div className="mais__arrow">↓</div>
                </a>
            </div>
            <img className="banner__logo" src="./mapalyticsbranco.svg" alt="" />
        </div>

        <div className="banner__video--container">
            <div className="video">
                <video className="banner__video--book" autoPlay muted loop>
                    <source src="./banner__video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
    
    <Carrossel slideName="firstOne">
        <div className="link__ancor" id="oquee"></div>
        <section className="mapalytics">
            <div className="mapalytics__container--1">
                <div className="mapalytics__texts">
                    <h2>O que é o Mapalytics?</h2>
                    <p className="titulo-2">
                        O Mapalytics é um painel web de geomarketing que combina dados de
                        fontes públicas para ajudar seu negócio a encontrar novos leads e
                        oportunidades de venda em qualquer lugar do Brasil.
                    </p>
                    <p>
                        Com dados sociodemográficos é possível encontrar seu perfil de
                        cliente no mapa e encontrar áreas propícias para expandir o seu
                        negócio.
                    </p>
                </div>
                
                <div className="container__video--1">
                    <div className="mapalytics__video--1">
                        <video className="mapalytics__video--ctn-1" loop muted autoPlay>
                            <source src="./video__mapa.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
        <section className="mapalytics">

            <div className="container__video--2">
                <div className="mapalytics__video--2">
                    <video className="mapalytics__video--ctn-2" loop muted autoPlay>
                        <source src="./video__mapa--2.mp4" type="video/mp4" />
                    </video>
                </div>
                <span></span>
            </div>

            <div className="mapalytics__container--2">
                <span></span>
                <div className="mapalytics__texts">
                    <h2>Inteligência artificial para tomada de decisão</h2>
                    <p className="titulo-2">
                        O Mapalytics não é só um painel de visualização, mas de inteligência. Nossas funcionalidades contam com algoritmos de aprendizado de máquina para indicar oportunidades de vendas, prever vendas futuras, comparar desempenhos por região e identificar os melhores locais para expansão.
                    </p>
                </div>
            </div>
        </section>
    </Carrossel>
    
    <Carrossel slideName="secondOne">
        {/* 1 */}
        
        <div className="slide__container">
            <div className="alimentacao">
                <div className="alimentacao__container--1">
                    <img className="alimentacao__animation" src="./animation-1.png" alt=""/>
                    <div className="text__container">
                        <p className="title">
                            Vai bem para <span>alimentação</span>
                        </p>
                        <p className="alimentacao__description">
                            Você faz parte da indústria e comércio que abastece restaurantes, dark kitchens, hotéis e todo o setor de alimentação? <span className="forms__text--rosa"> Tem dificuldade de encontrar e qualificar novos leads na sua máquina de vendas?</span> O Mapalytics pode te ajudar a encontrar leads na base da Receita Federal e no Google e qualificar os resultados para ganhar tempo e expandir sua cartela de clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2 */}

        <div className="slide__container">
            <div className="alimentacao alimentacao__white">
                <div className="alimentacao__container--2">
                    <div className="text__container">
                        <p className="title">
                            Vai bem para <span>construção civil</span>
                        </p>
                        <p className="alimentacao__description">
                            <span className="forms__text--rosa">Precisa mapear obras e construções no Brasil?</span> <br />
                             O Mapalytics ajuda a encontrar edifícios em construção que podem ser leads para o seu negócio. O que garante agilidade e facilidade para mapear futuros novos clientes e atender novas áreas.
                        </p>
                    </div>
                    <img
                        className="alimentacao__animation"
                        src="./map.jpg"
                        alt=""
                    />
                  
                </div>
            </div>
        </div>

        {/* 3 */}

        <div className="slide__container">
            <div className="link__ancor" id="segmentos"></div>
            <div className="alimentacao">
                <div className="alimentacao__container--2">
                    <div className="text__container">
                        <p className="title">
                            Vai bem para <span>assistências técnicas</span>
                        </p>
                        <p className="alimentacao__description">
                            Você faz parte de uma seguradora de automóveis, produtos eletrônicos e seguro residencial? <span className="forms__text--rosa">Tem dificuldade de gerir sua rede de parceiros e acompanhar performances?</span> <br /> O Mapalytics ajuda a entender os territórios onde seus parceiros atuam tanto para prever sinistros quanto para projetar sua rede de assistência.
                        </p>
                    </div>
                    <img
                        className="alimentacao__animation"
                        src="./animation-3.png"
                        alt=""
                    />
                </div>
            </div>
        </div>

        {/* 4 */}

        <div className="slide__container">
            <div className="alimentacao alimentacao__white">
                <div className="alimentacao__container--2">
                    <div className="text__container">
                        <p className="title">
                            Vai bem para <span>varejo</span>
                        </p>
                        <p className="alimentacao__description">
                            <span className="forms__text--rosa">
                                Precisa entender porque algumas lojas vendem melhor que outras?</span> Com big data e o cruzamento dos dados internos da sua empresa é possível prever vendas e perfis de compra, comparar lojas, avaliar o desempenho de lojas de acordo com a localidade e sugerir pontos para abertura de novas lojas.
                        </p>
                    </div>
                    <img
                        className="alimentacao__animation"
                        src="./animation-4.png"
                        alt=""
                    />
                
                </div>
            </div>
        </div>
    </Carrossel>



    {/* CARROSSEL */}
    
    <section className="carrossel__2">
        <div className="carrossel__ctn--column-1 text__container">
            <p className="title">
                Tudo que o <br />
                Mapalytics pode <br />
                fazer por você
            </p>
            <p>
                Explore os planos de assinatura e escolha aquele que melhor se
                adapta às necessidades do seu negócio.
            </p>
        </div>

        <Carrossel slideName="thirdOne">
            <div className="link__ancor" id="pacotes"></div>
            <div className="basico__column-2">
                <div className="text__container">
                    <p className="basico__title title">
                        Mapalytics <span className="title">Básico</span>
                    </p>
                    <img className="basico__img" src="./pc.png" alt="" />
                    <p>
                        Com o Mapalytics sua empresa consegue visualizar no mapa a lista
                        de CNPJs por CNAE na proximidade. Podendo identificar potenciais
                        clientes ou concorrentes e várias informações do negócio.
                        Entendendo demandas específicas do seu setor e transformando
                        conhecimento em estratégia de negócio e muito mais.
                    </p>
                    <button className="btn__white">Contratar</button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <div className="basico__list">
                        <div className="basico__item">Painel web (desktop)</div>
                        <div className="basico__item">Login para até 5 usuários</div>
                        <div className="basico__item">Criação de pontos de interesse no mapa</div>
                        <div className="basico__item">Criação de áreas de estudo</div>
                        <div className="basico__item">Visualização de leads por CNAE</div>
                        <div className="basico__item">Busca de leads pelo Google Places</div>
                        <div className="basico__item">Adição e gestão de leads em grupos de personalizados</div>
                        <div className="basico__item">Dados da Receita Federal</div>
                        <div className="basico__item">Visualização de dados sociodemográficos</div>
                        <div className="basico__item">Contagem de leads e pontos de interesse dentro de uma área de estudo</div>
                        <div className="basico__item">Integração com Pipedrive</div>
                    </div>
                </div>
            </div>
            <div className="basico__column-2 background__white">
                <div className="text__container">
                    <p className="basico__title title" style={{color: "var(--dm_rosa_00)"}}>Mapalytics <span className="title">Integrado</span></p>
                    <img className="basico__img" src="./pc.png" alt="" />
                    <p>
                        Com o Mapalytics sua empresa consegue visualizar no mapa a lista de CNPJs por CNAE na proximidade. Podendo identificar potenciais clientes ou concorrentes e várias informações do negócio. Entendendo demandas específicas do seu setor e transformando conhecimento em estratégia de negócio e muito mais.
                    </p>
                    <button className="btn__white">Contratar</button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <br />
                    <div className="basico__list  basico__list--check__black">
                        <div className="basico__item basico__item--first">Todos os itens do pacote básico</div>
                        <div className="basico__item">Geolocalização das suas vendas/contratos/clientes</div>
                        <div className="basico__item">Visualização de dados internos em formato de BI (gráficos, rankings)</div>
                        <div className="basico__item">Filtro de tempo para visualização de dados históricos (dia, semana, mês, ano)</div>
                        <div className="basico__item">Integração por API</div>
                        <div className="basico__item">+ Integrações com ferramentas externas</div>
                        <div className="basico__item">Exportação de dados em csv</div>
                    </div>
                </div>
            </div>
            <div className="basico__column-2">
                <div className="text__container">
                    <p className="basico__title title">Mapalytics <span className="title">Completo</span></p>
                    <img className="basico__img" src="./pc.png" alt="" />
                    <p>
                    Com o Mapalytics sua empresa consegue visualizar no mapa a lista de CNPJs por CNAE na proximidade. Podendo identificar potenciais clientes ou concorrentes e várias informações do negócio. Entendendo demandas específicas do seu setor e transformando conhecimento em estratégia de negócio e muito mais.
                    </p>
                    <button className="btn__white">Contratar</button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <br />
                    <div className="basico__list basico__list--check__white">
                        <div className="basico__item basico__item--first">Todos os itens do pacote básico</div>
                        <div className="basico__item">Geolocalização das suas vendas/contratos/clientes</div>
                        <div className="basico__item">Visualização de dados internos em formato de BI (gráficos, rankings)</div>
                        <div className="basico__item">Filtro de tempo para visualização de dados históricos (dia, semana, mês, ano)</div>
                        <div className="basico__item">Integração por API</div>
                        <div className="basico__item">+ Integrações com ferramentas externas</div>
                        <div className="basico__item">Exportação de dados em csv</div>
                    </div>
                </div>
            </div>
        </Carrossel>
    </section>

    {/* FORMULÁRIO */}

    <section className="forms">
        <div className="link__ancor" id="peca"></div>
        <div className="forms__container">
            <div className="forms__column--1">
                <div className="text__container">
                    <p className="title">
                        Peça já uma <br />
                        demonstração
                    </p>
                    <p>
                        Preencha o formulário e <br /> entraremos em contato <br /> com você.
                    </p>
                </div>
                <p className="forms__seta">→</p>
            </div>
            <div className="forms__formulario">
                <div className="forms__formulario--content">
                    <input type="text" placeholder="Digite aqui"/>
                    <input type="text" placeholder="Digite aqui"/>
                    <input type="text" placeholder="Digite aqui"/>
                    <input type="text" placeholder="Digite aqui"/>
                    <input type="text" placeholder="Digite aqui"/>
                    <button className="btn__rosa">enviar</button>
                </div>
            </div>
        </div>
    </section>

    {/* CONTATO */}

    <div className="contato">
        <div className="link__ancor" id="material"></div>
        <div className="manda title">
            Tenha acesso ao nosso material para empresas <br /> clicando
            abaixo!
        </div>
        <a className="mais" href="./pdfs/dm_mapalytics.pdf" target="_blank">
            Saiba mais
            <div className="mais__arrow">↓</div>
        </a>
    </div>

    {/* CONHECER */}
    
    <div className="conhecer">
        <div className="link__ancor" id="contato"></div>
        <div className="conhecer__melhor">
            <div className="conhecer__quer">
                <p>Quer nos conhecer melhor?</p>
                <div className="manda title">
                    Manda um e-mail <br /> pra gente
                </div>
                <p className="seta-1">→</p>
                <a href="mailto:contato@datamachina.com.br">
                    <form className="email">contato@datamachina.com.br</form>
                </a>
            </div>
        </div>
    </div>

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
</main>
</>)}
