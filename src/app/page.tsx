import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <nav className="navbar">
                <div>
                    <a href="#inicio">
                        <img className="logo" src="img/dm-logo-name.svg" alt="Data Machina" />
                    </a>
                    <button
                        className="navbar-toggler bg-light-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">
                                    data machina
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#mapalytics"
                                >
                                    mapalytics
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <img className="logo" src="./dm-logo-name.svg" alt="Data Machina" />
                <div className="container-menu">
                    <a href="#inicio">
                        <p>data machina</p>
                    </a>
                    <a href="#mapalytics">
                        <p>mapalytics</p>
                    </a>
                </div>
            </header>
            <main>
                {/* BANNER */}
                <section className="banner">
                    <div className="width banner__container" id="inicio">
                        <div className="banner__texts">
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
                        <div className="banner__logo">
                            <img src="./mapalyticsbranco.svg" alt="" />
                        </div>
                        {/* Ilustration */}
                        <img
                            className="banner__notebook-1"
                            src="./notebook.png"
                            alt="ilustration-laptop"
                        />
                    </div>
                </section>
                {/* O que é o Mapalytics? */}
                <section className="mapalytics">
                    <video className="mapalytics__notebook-2" autoPlay loop muted>
                        <source src="./header.webm" />
                    </video>
                    <div className="width mapalytics__container">
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
                    </div>
                </section>
                {/* ALIMENTAÇÃO */}
                <section className="alimentacao">
                    <div className="width alimentacao__container">
                        <img
                            className="alimentacao__animation"
                            src="./animation-1.png"
                            alt=""
                        />
                        <div className="text__container">
                            <p className="title">
                                Vai bem para <span>alimentação</span>
                            </p>
                            <p className="alimentacao__description">
                                Você faz parte da indústria e comércio que abastece restaurantes,
                                dark kitchens, hotéis e todo o setor de alimentação?{" "}
                                <span style={{ color: "var(--dm_rosa_00)" }}>
                                    Tem dificuldade de encontrar e qualificar novos leads na sua
                                    máquina de vendas?
                                </span>{" "}
                                O Mapalytics pode te ajudar a encontrar leads na base da Receita
                                Federal e no Google e qualificar os resultados para ganhar tempo e
                                expandir sua cartela de clientes.
                            </p>
                        </div>
                    </div>
                </section>
                {/* BÁSICO */}
                <section className="basico">
                    <div className="width basico__container">
                        <div className="basico__column--1 text__container">
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
                        <div className="basico__column-2">
                            <div className="text__container">
                                <p>
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
                                <br />
                                <div className="basico__list">
                                    <div className="basico__item">Painel web (desktop)</div>
                                    <div className="basico__item">Login para até 5 usuários</div>
                                    <div className="basico__item">
                                        Criação de pontos de interesse no mapa
                                    </div>
                                    <div className="basico__item">Criação de áreas de estudo</div>
                                    <div className="basico__item">Visualização de leads por CNAE</div>
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
                                        Contagem de leads e pontos de interesse dentro de uma área de
                                        estudo
                                    </div>
                                    <div className="basico__item">Integração com Pipedrive</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FORMULÁRIO */}
                <section className="forms">
                    <div className="width forms__container"></div>
                </section>
                {/*  */}
                <section className="">
                    <div className="width"></div>
                </section>
                {/*  */}
                <section className="">
                    <div className="width"></div>
                </section>
                {/*  */}
                <section className="">
                    <div className="width"></div>
                </section>
                {/* */}
                <div className="tenha-acesso-container">
                    <div className="manda">
                        Tenha acesso ao nosso material para empresas <br /> clicando
                        abaixo!
                    </div>
                    <a className="saiba-mais" href="./pdfs/dm_mapalytics.pdf" target="_blank">
                        Saiba mais
                        <div className="ir">↓</div>
                    </a>
                </div>
                {/* */}
                <div className="contato">
                    <div className="quer-nos-conhecer-container">
                        <div className="quer-nos-conhecer">
                            <p className="melhor">Quer nos conhecer melhor?</p>
                            <div className="manda">
                                Manda um e-mail <br /> pra gente
                            </div>
                            <p className="seta-1">→</p>
                            <a href="mailto:contato@datamachina.com.br">
                                <form className="email">contato@datamachina.com.br</form>
                            </a>
                        </div>
                    </div>
                </div>
                {/* */}
                <footer>
                    <div className="footer">
                        <img className="footer__logo" src="./dm-logo-name.svg" alt="" />
                        <div className="menu__empresa">
                            <a href="#">
                                <p className="first">data machina</p>
                            </a>
                            <a className="links" href="#inicio">
                                <p>início</p>
                            </a>
                            <a className="links" href="#nossas-solucoes">
                                <p>clientes</p>
                            </a>
                            <a className="links" href="#aceleracao">
                                <p>aceleração</p>
                            </a>
                            <a className="links" href="#premio">
                                <p>prêmios</p>
                            </a>
                            <a className="links" href="#contato">
                                <p>contato</p>
                            </a>
                        </div>
                        <div className="menu__solucoes">
                            <a href="#Mapalytics">
                                <p className="first">mapalytics</p>
                            </a>
                            <a className="links" href="#Mapalytics">
                                <p>o produto</p>
                            </a>
                            <a className="links" href="#Logística">
                                <p>varejo</p>
                            </a>
                            <a className="links" href="#Leads">
                                <p>seguros e garantia</p>
                            </a>
                            <a className="links" href="#Leads">
                                <p>diferenciais</p>
                            </a>
                            <a className="links" href="#Leads">
                                <p>clientes</p>
                            </a>
                            <a className="links" href="#Leads">
                                <p>material para empresas</p>
                            </a>
                            <a className="links" href="#Leads">
                                <p>contato</p>
                            </a>
                        </div>
                        <div className="redes-sociais">
                            <div className="footer-imagens">
                                <a href="https://www.instagram.com/data.machina/" target="blank">
                                    <img src="./icones/instagram.svg" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/datamachina"
                                    target="blank"
                                >
                                    <img src="./icones/linkedin.svg" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw"
                                    target="blank"
                                >
                                    <img src="./icones/youtube.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="divisor" />
                        <div className="logos-bottom">
                            <img src="./dm.svg" alt="" />
                            <img src="./group.svg" alt="" />
                            <p>Data Machina - 2023</p>
                            <a href="http://tre.art.br/" target="black" className="tre">
                                <img className="tre-img" src="./tre.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </>

    );
}
