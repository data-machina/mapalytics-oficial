"use client"
import "./mapalytics.css";

import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import React, { useEffect } from 'react';
import { Carrossel } from "../../components/Carrousel/Carrossel";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Popup } from "../../components/Popup/Popup";

const PipedriveForm = () => {
    useEffect(() => {
        const container = document.querySelector('.pipeBody');

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
            className="pipedriveWebForms pipeBody"
            data-pd-webforms="https://webforms.pipedrive.com/f/ckzzoUTBTKexrv9epaEihrOcjpzC0G7rDkD5Ax7qLY97IC4RMOlnZvphMYzFa5dYNZ"
            dangerouslySetInnerHTML={{
                __html: `<script src="https://webforms.pipedrive.com/f/loader"></script>`,
            }}
        />
    );
};

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

export default function Mapalytics() {
    return (
        <html>
            <head>
                <title>Mapalytics - Data Machina</title>
                <link rel="shortcut icon" href="./logoaba.png" type="image/x-icon" />
                <meta name="description" content="Somos pesquisadores e empreendedores com cultura de inovação aplicada, prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos." />
            </head>
            <body>
                <GoogleAnalytics gaId="GTM-NWD4VP64" />
            
                <Header pageName="mapalytics" />
                
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
                                <a className="mais" href="#peca">
                                    Peça uma demonstração
                                    <div className="mais__arrow">↓</div>
                                </a>
                            </div>
                            <img className="banner__logo" src="./mapalyticsbranco.svg" alt="" />
                        </div>

                        <div className="banner__video--container">
                            <div className="video">
                                <video className="banner__video--book" autoPlay muted loop playsInline>
                                    <source src="./banner__video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </section>

                    <Carrossel data-carrossel="carousel-1">
                        <section className="mapalytics carrossel__container">
                            <div className="link__ancor" id="oquee"></div>
                            <div className="mapalytics__container--1">
                                <div className="mapalytics__texts">
                                    <h2 className="map-h2 title">O que é o Mapalytics?</h2>
                                    <p className="titulo-2">
                                        O Mapalytics é um painel web de geomarketing que combina dados de fontes públicas para ajudar seu negócio a encontrar novos leads e oportunidades de venda em qualquer lugar do Brasil.
                                    </p>
                                    <p>
                                        Com dados sociodemográficos é possível encontrar seu perfil de cliente no mapa e encontrar áreas propícias para expandir o seu negócio.
                                    </p>
                                </div>

                                <div className="mapalytics__video--1">
                                    <video className="mapalytics__video--ctn-1" autoPlay muted loop playsInline>
                                        <source src="./first_slide_video--notbook.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </section>

                        <section className="mapalytics carrossel__container">
                            <div className="mapalytics__container--2">
                                <div className="mapalytics__video--2">
                                    <video className="mapalytics__video--ctn-2" autoPlay muted loop playsInline>
                                        <source src="./first_slide_video--map.mp4" type="video/mp4" />
                                    </video>
                                </div>

                                <div className="mapalytics__texts">
                                    <p className="map-h2 title">Inteligência artificial para tomada de decisão</p>
                                    <p className="titulo-2">
                                        O Mapalytics não é só um painel de visualização, mas de inteligência. Nossas funcionalidades contam com algoritmos de aprendizado de máquina para indicar oportunidades de vendas, prever vendas futuras, comparar desempenhos por região e identificar os melhores locais para expansão.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Carrossel>

                    <Carrossel data-carrossel="carousel-2">
                        {/* 1 */}
                        <section className="carrossel__container">
                            <div className="alimentacao">
                                <div className="alimentacao__container--1">
                                    <div>
                                        <video className="alimentacao__animation" autoPlay muted loop playsInline>
                                            <source src="./second_slide_video--alimentacao.mp4" type="video/mp4" />
                                        </video>
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
                        </section>

                        {/* 2 */}

                        <section className="carrossel__container">
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
                                        <video className="alimentacao__animation" autoPlay muted loop playsInline>
                                            <source src="./second_slide_video--construcao-civil.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3 */}

                        <section className="carrossel__container">
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
                                        <video className="alimentacao__animation" autoPlay muted loop playsInline>
                                            <source src="./second_slide_video--assistencia-tecnica.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4 */}

                        <section className="carrossel__container">
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
                                        <video className="alimentacao__animation" autoPlay muted loop playsInline>
                                            <source src="./second_slide_video--varejo.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </section>
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

                        <Carrossel data-carrossel="carousel-3">
                            {/* 1 */}
                            <section className="basico__column-2 carrossel__container">
                                <div className="link__ancor" id="pacotes"></div>
                                <div className="text__container">
                                    <p className="basico__title">
                                        Mapalytics <span className="title">Básico</span>
                                    </p>
                                    <img className="basico__img" src="./fourth_slide--basico.png" alt=""  width={300} height={300}/>
                                    <p className="basico__call">Encontre consumidores e leads</p>
                                    <p>
                                        O Pacote Básico vai otimizar sua força de vendas ao encontrar
                                        leads geolocalizados e qualificados. Além de informações
                                        sociodemográficas para mostrar no mapa onde se encontra seu
                                        público-alvo e onde focar suas vendas.
                                    </p>
                                    <a className="btn__white" href="#peca">Contratar</a>
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
                            <section className="basico__column-2 background__white carrossel__container">
                                <div className="text__container">
                                    <p className="basico__title" style={{ color: "var(--dm_rosa_00)" }}>
                                        Mapalytics <span className="title">Integrado</span>
                                    </p>
                                    <img className="basico__img" src="./fourth_slide--integrado.png" alt="" height={300} width={300} />
                                    <p className="basico__call">Métricas de vendas</p>
                                    <p>
                                        O Pacote Integrado geolocaliza suas vendas, clientes e leads e
                                        oferece um olhar histórico e comparativo através de gráficos e
                                        BI. Nossas métricas ajudam a conhecer seu desempenho por
                                        região e traçar estratégias de abertura e fechamento de lojas.
                                    </p>
                                    <a className="btn__white btn__white--pink" href="#peca">Contratar</a>
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
                            <section className="basico__column-2 carrossel__container">
                                <div className="text__container">
                                    <p className="basico__title">
                                        Mapalytics <span className="title">Completo</span>
                                    </p>
                                    <img className="basico__img" src="./fourth_slide--completo.png" alt="" height={300} width={300}  />
                                    <p className="basico__call">Deixe a IA descobrir por você</p>
                                    <p>
                                        O Pacote Completo oferece uma série de ferramentas de IA para trazer respostas mais assertivas e alertas para antecipar decisões antes que você precise tomá-las. Por exemplo, prever suas vendas por localidade para os próximos anos.
                                    </p>
                                    <a className="btn__white" href="#peca">Contratar</a>
                                </div>
                                <div className="text__text">
                                    <p className="basico__list--title">O que você irá encontrar:</p>
                                    <br />
                                    <div className="basico__list basico__list--check__white">
                                        <div className="basico__item">Todos os itens do pacote básico e integrado</div>
                                        <div className="basico__item">Criação de perfis de consumidores (IA)</div>
                                        <div className="basico__item">Previsão de vendas e inadimplência (IA)</div>
                                        <div className="basico__item">Oportunidade de vendas para novas localidades (IA)</div>
                                        <div className="basico__item">Criação de scores</div>
                                        <div className="basico__item">Régua de desempenho da loja em relação ao histórico (ferramenta IA)</div>
                                        <div className="basico__item">Régua de desempenho em relação a rede, regionais, cluster</div>
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
                                <div className="forms__size">
                                    <PipedriveForm />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CONTATO */}

                    <section className="contato">
                        <div className="link__ancor" id="material"></div>
                        <div className="manda title">Tenha acesso ao nosso material para empresas <br /> clicando abaixo!</div>
                        <Popup>
                            <PipedriveFormPopup />
                        </Popup>
                    </section>

                    {/* CONHECER */}

                    <section className="conhecer__nos">
                        <div className="link__ancor" id="contato"></div>
                        <div className="conhecer__quer-nos">
                            <p>
                                Quer nos conhecer melhor?
                            </p>
                            <div className="manda title">
                                Manda um e-mail <br /> pra gente
                                <div className="seta-1">→</div>
                            </div>

                            <a href="mailto:contato@datamachina.com.br">
                                <form className="conhecer__email">
                                    contato@datamachina.com.br
                                </form>
                            </a>
                        </div>
                    </section>
                </main>

                <Footer pageName="mapalytics" />
            </body>
        </html>
    );
}
