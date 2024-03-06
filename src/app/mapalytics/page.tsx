'use client';
import "./mapalytics.css";
import Image from 'next/image'

interface AnotherProps {
    slideName: string; // Define custom prop types here
    children: React.ReactNode; // Include this if you explicitly need to type `children`
}

const Carrossel: React.FC<AnotherProps> = ({ slideName, children }) => {
    let buttons: any[] = []
    let divsCount = 0
    if(children != null && children != undefined) children.forEach(() => {

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



export default function Home() { return (<>

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
    
    {/* <Carrossel slideName={{name: "firstOne", buttons: 2}}> */}
    <Carrossel slideName="firstOne">
        <section className="mapalytics">
            <div className="link__ancor" id="oquee"></div>
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
                    <div>
                        <video className="alimentacao__animation" src="/alimentacao.mp4" autoPlay muted loop></video>
                    </div>

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
                    <div>
                        <video className="alimentacao__animation" src="/construcao-civil.mp4" autoPlay muted loop></video>
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
                            Você faz parte de uma seguradora de automóveis, produtos eletrônicos e seguro residencial? <span className="forms__text--rosa">Tem dificuldade de gerir sua rede de parceiros e acompanhar performances?</span> <br /> O Mapalytics ajuda a entender os territórios onde seus parceiros atuam tanto para prever sinistros quanto para projetar sua rede de assistência.
                        </p>
                    </div>
                    <div>
                        <video className="alimentacao__animation" src="/assistencia-tecnica.mp4" autoPlay muted loop></video>
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
                                Precisa entender porque algumas lojas vendem melhor que outras?</span> Com big data e o cruzamento dos dados internos da sua empresa é possível prever vendas e perfis de compra, comparar lojas, avaliar o desempenho de lojas de acordo com a localidade e sugerir pontos para abertura de novas lojas.
                        </p>
                    </div>
                    <div>
                        <video className="alimentacao__animation" src="/varejo__video.mp4" autoPlay muted loop></video>
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

        <Carrossel slideName="thirdOne">
            <div className="basico__column-2">
                <div className="link__ancor" id="pacotes"></div>
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
                    <button className="btn__white btn__white--pink">Contratar</button>
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

</main>
</>)}
