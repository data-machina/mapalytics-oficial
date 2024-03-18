'use client'
import './datamachina.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Carrossel } from "../../components/Carrousel/Carrossel";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<GoogleAnalytics gaId="GTM-KW48QX9" />
			
			<Header pageName="datamachina" />

			<main>
				<section className="dm-banner">
					<div className="link__ancor" id="inicio"></div>
					<div className='dm-banner__container'>
						<div className="dm-banner__texts">
							<h1 className='dm-banner__h1'><em>/</em> Gostamos <br /> de problemas <br /> difíceis!</h1>
							<p>
								Somos pesquisadores e empreendedores com cultura de inovação aplicada,
								prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos.
							</p>
						</div>

						{/* Vídeo */}

						<iframe className="banner__iframe" src="https://www.youtube.com/embed/bQjCKkZRVbA" title="Uma nova Data Machina" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
				</section>

				{/*  */}

				<section className="inquietude">
					<div className="link__ancor" id="solucoes"></div>
					<p className='title' >Nossa inquietude nos leva a propor soluções para <br /> o dia-a-dia com tecnologias de fronteira</p>
				</section>

				{/*  */}

				<section className="produtos">
					{/* 1 */}

					<div className="produtos__negocio--1" id="Mapalytics">

						<div className="descricao-1">
							<div className="container-data-machina">
								<p className="dm-titulo-1 title">dm mapalytics</p>
								<p className="dm-titulo-2">
									Para empresas de varejo que querem conhecer melhor sua rede de atuação ou para
									empresas de seguros e assistências técnicas que querem mapear oportunidades e prestadores de
									serviço. <br /> O painel DM Mapalytics consegue agregar dados públicos e sociodemográficos com os dados da
									sua empresa para mostrar como sua rede se comporta hoje, onde estão as áreas mal atendidas e quais
									as áreas de novas oportunidades. Além de trazer os dados históricos através de business intelligence
									para dar total domínio estratégico e tático para seus planos de crescimento.
								</p>

								<Link className="mais mais__pink dm_mapalytics" href="/mapalytics">Saiba mais<div className="mais__arrow produtos__ir">↓</div></Link>
							</div>
						</div>
						<div className="produtos__contorno">
							<img className="produtos__gif-animado" src="datamachina/img/Maplytics-Atualizado.gif" alt="Gif animado de um notbook" />
							<div className="produtos__unidade">
								<img src="datamachina/img/mapalyticsbranco.svg" alt='Data Machina Mapalytics' />
							</div>
						</div>
					</div>
				</section>

				{/* SOLUÇÕES */}

				<section className="solucoes">
					<div className="link__ancor" id="clientes"></div>
					<div className="nossas-solucoes" id="nossas-solucoes">
						<p className='title'>
							Nossas soluções já ajudaram várias <br />
							empresas e queremos ajudar muitas mais
						</p>
					</div>
				</section>

				{/* MARCAS */}

				<section className="marcas">
					<a href="https://www.grupozelo.com/grupo-zelo/pt-br" target="_blank">
						<img src="datamachina/logos/Prancheta 1zelo 1.svg" alt="" />
					</a>
					<a href="https://www.casabauducco.com.br/" target="_blank">
						<img src="datamachina/logos/Prancheta 1bauducco 1.svg" alt="" />
					</a>
					<a href="https://www.comgas.com.br/" target="_blank">
						<img src="datamachina/logos/comgas.svg" alt="" />
					</a>
					<a href="https://www.lojasedmil.com.br/" target="_blank">
						<img src="datamachina/logos/edmil.png" alt="" />
					</a>
					<a href="https://www.whirlpool.com.br/" target="_blank">
						<img src="datamachina/logos/whirlpoll.png" alt="" />
					</a>
					<a href="https://www.mrs.com.br/" target="_blank">
						<img src="datamachina/logos/mrs.png" alt="" />
					</a>
					<a href="https://trutec.com.br/" target="_blank">
						<img src="datamachina/logos/trutec1.png" alt="" />
					</a>
					<a href="https://www.votorantimcimentos.com.br/" target="_blank">
						<img src="datamachina/logos/Prancheta 1votorantim 1.svg" alt="" />
					</a>
					<a href="https://www.aesbrasil.com.br/pt-br" target="_blank">
						<img src="datamachina/logos/aes.svg" alt="" />
					</a>
					<a href="http://www.gruporeciclabr.com.br/pt/" target="_blank">
						<img src="datamachina/logos/recicla.png" alt="" />
					</a>
					<a href="http://www.labcidade.fau.usp.br/" target="_blank">
						<img src="datamachina/logos/labcidade.png" alt="" />
					</a>
					<a href="https://cestanobre.com.br/" target="_blank">
						<img src="datamachina/logos/nobrecesta.png" alt="" />
					</a>
					<a href="https://www.poloplanejamento.com/" target="_blank">
						<img src="datamachina/logos/polo.png" alt="" />
					</a>
					<a href="https://mercadofavo.com/" target="_blank">
						<img src="datamachina/logos/favo.svg" alt="" />
					</a>
					<a href="https://www.trust.com.br/" target="_blank">
						<img src="datamachina/logos/Prancheta 1trust.svg" alt="" />
					</a>
					<a href="https://www.bhrgastronomia.com.br/" target="_blank">
						<img src="datamachina/logos/bhr.png" alt="" />
					</a>
				</section>

				{/* COMENTÁRIOS */}

				<section className="comentarios">
					<div className="comentarios__temos-orgulho">
						<p className='title'>
							E temos orgulho de ter <br /> nossos clientes como <br /> <span className="comentarios__arrow">parceiros</span>
						</p>
					</div>
					<Carrossel>
						<section className="carrossel__container">
							<img className="comentarios__img" src="datamachina/logos/whirlpoll.png" />
							<p className='comentarios__texts'>
								"A Data Machina entendeu a nossa necessidade de uma forma muito rápida e tem nos ajudado
								a converter os desafios em oportunidades"
							</p>
							<p className="comentarios__fulano">/Gelson Lira</p>
						</section>

						<section className="carrossel__container">
							<img className="comentarios__img" src="datamachina/logos/polo.png" />
							<p className='comentarios__texts'>
								"A Data Machina nos ajudou a agilizar nosso processo de pesquisa. De forma muito
								inovadora conseguimos ter resultados acima do esperado."
							</p>
							<p className="comentarios__fulano">/Thiago Zeidler</p>
						</section>
					</Carrossel>
				</section>

				<section className="premio">
					<div className="link__ancor" id="premios"></div>
					<div className='premio__container'>
						<div className="video-premio">
							<iframe className="premio__iframe" width="560" height="315" src="https://www.youtube.com/embed/RBH_y4JyDkU?si=XB6EYOqMQye7HwKE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
						</div>
						<div className="premio__logo">
							<p className="title">
								Muito trabalho só <br /> poderia resultar em <br /> reconhecimento
							</p>
							<img className='premio__logo--img' src="datamachina/img/top100.jpg" alt="top100" />

							<p className="p-premio">Fomos reconhecidos no Prêmio <strong><em>100 Open Startups</em></strong> pelo <strong>3º ano consecutivo</strong> como uma das <span className='premio__melhor'>melhores <strong><em>citytechs</em></strong></span> do <strong>Brasil</strong>.</p>
						</div>
					</div>
				</section>

				<section className="programas-de-aceleracao">
					<div className="link__ancor" id="aceleracoes"></div>
					<p className='title'>Vários programas de aceleração nos ajudaram a <br /> aprimorar nossos produtos</p>
				</section>

				<section className="marcas marcas--2" id="clientes">
					<a href="http://adesampa.com.br/" target="black">
						<img src="datamachina/logos/adesampa.png" alt="" />
					</a>
					<a href="https://www.inovativabrasil.com.br/" target="black">
						<img src="datamachina/logos/inovabrasil.png" alt="" />
					</a>
					<a href="https://www.capital.sp.gov.br/" target="black">
						<img src="datamachina/logos/prefeituradesp.svg" alt="" />
					</a>
					<a href="https://vedacit.com.br/" target="black">
						<img src="datamachina/logos/vedacitlabs.png" alt="" />
					</a>
					<a href="https://softex.br/" target="black">
						<img src="datamachina/logos/softex.png" alt="" />
					</a>
					<a href="https://www.gov.br/startuppoint/pt-br/programas/ia2-mctic" target="black">
						<img src="datamachina/logos/ia2.png" alt="" />
					</a>
				</section>

				{/* CONHECER */}

				<section className="conhecer__nos">
					<div className="link__ancor" id="contato"></div>
					<div className="conhecer__quer-nos">
						<p>
							Alguma das nossas soluções te interessou? Ou quer saber como resolver
							outro problema?
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

			<Footer pageName="datamachina" />
		</>
	)
}