"use client";
import "./mapalytics.css";
import { Carrossel } from "../../../components/Carrousel/Carrossel";
import Link from 'next/link'

export default function Home() {
return (
    <>
        <header>
            <img className="header__logo" src="./dm-logo-name.svg" alt="Data Machina" />
            <nav>
                <div className="dropdown">
                    <Link className="dropdown__link" href="/">data machina</Link>
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

        <main>
            {/* BANNER */}

            <section className="banner">
            <div className="link__ancor" id="apresentacao"></div>
            <div className="banner__container">
                <div className="banner__texts">
                <div>
                    <h1 className="map-h1">
                    /Leads e clientes <br />
                    geolocalizados para otimizar <br />
                    sua força de vendas
                    </h1>
                    <p className="banner__p-2">
                    Explore o poder da inteligência geográfica com IA. Nossa
                    <br />
                    plataforma integra dados públicos e internos, revelando <br />
                    insights poderosos para impulsionar seu negócio.
                    </p>
                </div>
                <a
                    className="mais"
                    href="./dm_mapalytics.pdf"
                    target="_blank"
                >
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

            <Carrossel>
            <section className="mapalytics">
                <div className="link__ancor" id="oquee"></div>
                <div className="mapalytics__container--1">
                <div className="mapalytics__texts">
                    <h2 className="map-h2">O que é o Mapalytics?</h2>
                    <p className="titulo-2">
                    O Mapalytics é um painel web de geomarketing que combina dados
                    de fontes públicas para ajudar seu negócio a encontrar novos
                    leads e oportunidades de venda em qualquer lugar do Brasil.
                    </p>
                    <p>
                    Com dados sociodemográficos é possível encontrar seu perfil de
                    cliente no mapa e encontrar áreas propícias para expandir o
                    seu negócio.
                    </p>
                </div>

                <div className="container__video--1">
                    <div className="mapalytics__video--1">
                    <video
                        className="mapalytics__video--ctn-1"
                        loop
                        muted
                        autoPlay
                    >
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
                    <p className="map-h2">Inteligência artificial para tomada de decisão</p>
                    <p className="titulo-2">
                    O Mapalytics não é só um painel de visualização, mas de
                    inteligência. Nossas funcionalidades contam com algoritmos de
                    aprendizado de máquina para indicar oportunidades de vendas,
                    prever vendas futuras, comparar desempenhos por região e
                    identificar os melhores locais para expansão.
                    </p>
                </div>
                </div>
            </section>
            </Carrossel>

            <Carrossel>
            {/* 1 */}
            <div className="slide__container">
                <div className="alimentacao">
                <div className="alimentacao__container--1">
                    <div>
                    <video
                        className="alimentacao__animation"
                        src="/alimentacao.mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                    </div>

                    <div className="text__container">
                    <p className="title">
                        Vai bem para <span>alimentação</span>
                    </p>
                    <p className="alimentacao__description">
                        Você faz parte da indústria e comércio que abastece
                        restaurantes, dark kitchens, hotéis e todo o setor de
                        alimentação? <span className="forms__text--rosa"> Tem dificuldade de encontrar e qualificar novos leads na
                        sua máquina de vendas? </span> O Mapalytics pode te ajudar a encontrar leads na base da
                        Receita Federal e no Google e qualificar os resultados para
                        ganhar tempo e expandir sua cartela de clientes.
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
                        <span className="forms__text--rosa"> Precisa mapear obras e construções no Brasil? </span>
                        <br />
                        O Mapalytics ajuda a encontrar edifícios em construção
                        que podem ser leads para o seu negócio. O que garante
                        agilidade e facilidade para mapear futuros novos clientes e
                        atender novas áreas.
                    </p>
                    </div>
                    <div>
                    <video
                        className="alimentacao__animation"
                        src="/construcao-civil.mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                    </div>
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
                        Você faz parte de uma seguradora de automóveis, produtos eletrônicos e seguro residencial? <span className="forms__text--rosa"> Tem dificuldade de gerir sua rede de parceiros e acompanhar performances? </span> <br /> O Mapalytics ajuda a entender os territórios onde seus parceiros atuam tanto para prever sinistros quanto para projetar sua rede de assistência.
                    </p>
                    </div>
                    <div>
                    <video
                        className="alimentacao__animation"
                        src="/assistencia-tecnica.mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                    </div>
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
                        Precisa entender porque algumas lojas vendem melhor que
                        outras?
                        </span> Com big data e o cruzamento dos dados internos da sua
                        empresa é possível prever vendas e perfis de compra,
                        comparar lojas, <strong>avaliar o desempenho de lojas</strong> de acordo com a localidade e sugerir pontos para abertura de novas lojas.
                    </p>
                    </div>
                    <div>
                    <video
                        className="alimentacao__animation"
                        src="/varejo__video.mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                    </div>
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

            <Carrossel>
                {/* 1 */}
                <section className="basico__column-2">
                <div className="link__ancor" id="pacotes"></div>
                <div className="text__container">
                    <p className="basico__title">
                    Mapalytics <span className="title">Básico</span>
                    </p>
                    <img className="basico__img" src="./4_slide-1.png" alt="" />
                    <p className="basico__call">Encontre consumidores e leads</p>
                    <p>
                    O Pacote Básico vai otimizar sua força de vendas ao encontrar
                    leads geolocalizados e qualificados. Além de informações
                    sociodemográficas para mostrar no mapa onde se encontra seu
                    público-alvo e onde focar suas vendas.
                    </p>
                    <button className="btn__white">Contratar</button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <div className="basico__list">
                    <div className="basico__item">Painel web (desktop)</div>
                    <div className="basico__item">Login para até 5 usuários</div>
                    <div className="basico__item">
                        Criação de pontos de interesse no mapa
                    </div>
                    <div className="basico__item">Criação de áreas de estudo</div>
                    <div className="basico__item">
                        Visualização de leads por CNAE
                    </div>
                    <div className="basico__item">
                        Busca de leads pelo Google Places
                    </div>
                    <div className="basico__item">
                        Adição e gestão de leads em grupos de personalizados
                    </div>
                    <div className="basico__item">Dados da Receita Federal</div>
                    <div className="basico__item">
                        Visualização de dados sociodemográficos
                    </div>
                    <div className="basico__item">
                        Contagem de leads e pontos de interesse dentro de uma área
                        de estudo
                    </div>
                    <div className="basico__item">Integração com Pipedrive</div>
                    </div>
                </div>
                </section>

                {/* 2 */}
                <section className="basico__column-2 background__white">
                <div className="text__container">
                    <p
                    className="basico__title"
                    style={{ color: "var(--dm_rosa_00)" }}
                    >
                    Mapalytics <span className="title">Integrado</span>
                    </p>
                    <img className="basico__img" src="./4_slide-2.png" alt="" />
                    <p className="basico__call">Métricas de vendas</p>
                    <p>
                    O Pacote Integrado geolocaliza suas vendas, clientes e leads e
                    oferece um olhar histórico e comparativo através de gráficos e
                    BI. Nossas métricas ajudam a conhecer seu desempenho por
                    região e traçar estratégias de abertura e fechamento de lojas.
                    </p>
                    <button className="btn__white btn__white--pink">
                    Contratar
                    </button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <br />
                    <div className="basico__list  basico__list--check__black">
                    <div className="basico__item basico__item--first">
                        Todos os itens do pacote básico
                    </div>
                    <div className="basico__item">
                        Geolocalização das suas vendas/contratos/clientes
                    </div>
                    <div className="basico__item">
                        Visualização de dados internos em formato de BI (gráficos,
                        rankings)
                    </div>
                    <div className="basico__item">
                        Filtro de tempo para visualização de dados históricos (dia,
                        semana, mês, ano)
                    </div>
                    <div className="basico__item">Integração por API</div>
                    <div className="basico__item">
                        + Integrações com ferramentas externas
                    </div>
                    <div className="basico__item">Exportação de dados em csv</div>
                    </div>
                </div>
                </section>

                {/* 3 */}
                <section className="basico__column-2">
                <div className="text__container">
                    <p className="basico__title">
                    Mapalytics <span className="title">Completo</span>
                    </p>
                    <img className="basico__img" src="./4_slide-3.png" alt="" />
                    <p className="basico__call">Deixe a AI descobrir por você</p>
                    <p>
                    O Pacote Completo oferece uma série de ferramentas de IA para
                    trazer respostas mais assertivas e alertas para antecipar
                    decisões antes que você precise tomá-las. Por exemplo, prever
                    suas vendas por localidade para os próximos anos.
                    </p>
                    <button className="btn__white">Contratar</button>
                </div>
                <div className="text__text">
                    <p className="basico__list--title">O que você irá encontrar:</p>
                    <br />
                    <div className="basico__list basico__list--check__white">
                    <div className="basico__item basico__item--first">
                        Todos os itens do pacote básico
                    </div>
                    <div className="basico__item">
                        Geolocalização das suas vendas/contratos/clientes
                    </div>
                    <div className="basico__item">
                        Visualização de dados internos em formato de BI (gráficos,
                        rankings)
                    </div>
                    <div className="basico__item">
                        Filtro de tempo para visualização de dados históricos (dia,
                        semana, mês, ano)
                    </div>
                    <div className="basico__item">Integração por API</div>
                    <div className="basico__item">
                        + Integrações com ferramentas externas
                    </div>
                    <div className="basico__item">Exportação de dados em csv</div>
                    </div>
                </div>
                </section>
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
                    Preencha o formulário e <br /> entraremos em contato <br />
                    com você.
                    </p>
                </div>
                <p className="forms__seta">→</p>
                </div>
                <div className="forms__formulario">
                <div className="forms__formulario--content">
                    <input type="text" placeholder="Digite aqui" />
                    <input type="text" placeholder="Digite aqui" />
                    <input type="text" placeholder="Digite aqui" />
                    <input type="text" placeholder="Digite aqui" />
                    <input type="text" placeholder="Digite aqui" />
                    <button className="btn__rosa">enviar</button>
                </div>
                </div>
            </div>
            </section>

            {/* CONTATO */}

            <div className="contato">
            <div className="link__ancor" id="material"></div>
            <div className="manda title">
                Tenha acesso ao nosso material para empresas <br /> clicando abaixo!
            </div>
            <a className="mais" href="./dm_mapalytics.pdf" target="_blank">
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
                <Link className="first" href="/">data machina</Link>
                <a className="links" href="#inicio">início</a>
                <a className="links" href="#inicio">soluções</a>
                <a className="links" href="#nossas-solucoes">clientes</a>
                <a className="links" href="#premio">prêmios</a>
                <a className="links" href="#aceleracao">aceleração</a>
                <a className="links" href="#contato">contato</a>
                </div>

                <div className="menu__empresa">
                <Link className="first" href="#Mapalytics">mapalytics</Link>
                <a className="links" href="#apresentacao">apresentação</a>
                <a className="links" href="#oquee">o que é o mapalytics</a>
                <a className="links" href="#segmentos">segmentos atendidos</a>
                <a className="links" href="#pacotes">pacotes e funcionalidades</a>
                <a className="links" href="#peca">peça uma demonstração</a>
                <a className="links" href="#material">material para empresas</a>
                <a className="links" href="#contato">contato</a>
                </div>

                <div className="footer__sociais">
                <div className="footer__link">
                    <a href="https://www.instagram.com/data.machina/" target="blank">
                        <img src="./icones/instagram.svg" alt="Logo Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/datamachina" target="blank">
                        <img src="./icones/linkedin.svg" alt="Logo LinkedIn"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank">
                        <img src="./icones/youtube.svg" alt="Logo YouTube"/>
                    </a>
                </div>
                <button className="button__border">material de imprensa</button>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom--items">
                <Link href="/">
                    <img className="footer__" src="./dm.svg" alt="Logo Data Machina" />
                </Link>
                <div className="footer__mapalytics">
                    <img src="./mapalyticsbranco.svg" alt="" />
                </div>
                </div>
                <div className="footer__bottom--items">
                <p>Data Machina - 2024</p>
                <a href="http://tre.art.br/" target="black" className="tre">
                    <img className="footer__tre" src="./tre.svg" alt="Logo Tre" />
                </a>
                </div>
            </div>
            </footer>
        </main>
    </>
  );
}
