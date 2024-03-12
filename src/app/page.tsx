'use client'
import './datamachina.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Carrossel } from "../../components/Carrousel/Carrossel";
import Link from 'next/link'

export default function Home() {
return(
	<>
		<GoogleAnalytics gaId="GTM-KW48QX9" />
	
		{/* Bootstrap */}

		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossOrigin="anonymous"
		></link>

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

					<div className="dropdown dropdown--novo">
						<Link className="dropdown__link" href="/mapalytics">mapalytics</Link>
					</div>
				</nav>
		</header>

		<section className="dm-banner" id="inicio">
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

		<section className="inquietude" id="inquietude">
			<p className='title' >Nossa inquietude nos leva a propor soluções para <br /> o dia-a-dia com tecnologias de fronteira</p>
		</section>

		{/*  */}

		<section className="produtos">
			<div className="link__ancor" id="solucoes"></div>
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

						<Link className="produtos__saiba-mais--3 dm_mapalytics" href="/mapalytics">
							Saiba mais
							<div className="produtos__ir">
								↓
							</div>
						</Link>
					</div>
				</div>
				<div className="contorno">
					<img className="gif-animado" src="datamachina/img/Maplytics-Atualizado.gif" alt="Gif animado de um notbook" />
					<div className="unidade-footer-3 unidade-footer">
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
				<img src="datamachina/logos/Prancheta 1bauducco 1.svg"  alt="" />
			</a>
			<a href="https://www.comgas.com.br/" target="_blank">
				<img src="datamachina/logos/comgas.svg"  alt="" />
			</a>
			<a href="https://www.lojasedmil.com.br/" target="_blank">
				<img src="datamachina/logos/edmil.png"  alt="" />
			</a>
			<a href="https://www.whirlpool.com.br/" target="_blank">
				<img src="datamachina/logos/whirlpoll.png"  alt="" />
			</a>
			<a href="https://www.mrs.com.br/" target="_blank">
				<img src="datamachina/logos/mrs.png"  alt="" />
			</a>
			<a href="https://trutec.com.br/" target="_blank">
				<img src="datamachina/logos/trutec1.png"  alt="" />
			</a>
			<a href="https://www.votorantimcimentos.com.br/" target="_blank">
				<img src="datamachina/logos/Prancheta 1votorantim 1.svg"  alt="" />
			</a>
			<a href="https://www.aesbrasil.com.br/pt-br" target="_blank">
				<img src="datamachina/logos/aes.svg"  alt="" />
			</a>
			<a href="http://www.gruporeciclabr.com.br/pt/" target="_blank">
				<img src="datamachina/logos/recicla.png"  alt="" />
			</a>
			<a href="http://www.labcidade.fau.usp.br/" target="_blank">
				<img src="datamachina/logos/labcidade.png"  alt="" />
			</a>
			<a href="https://cestanobre.com.br/" target="_blank">
				<img src="datamachina/logos/nobrecesta.png"  alt="" />
			</a>
			<a href="https://www.poloplanejamento.com/" target="_blank">
				<img src="datamachina/logos/polo.png"  alt="" />
			</a>
			<a href="https://mercadofavo.com/" target="_blank">
				<img src="datamachina/logos/favo.svg"  alt="" />
			</a>
			<a href="https://www.trust.com.br/" target="_blank">
				<img src="datamachina/logos/Prancheta 1trust.svg"  alt="" />
			</a>
			<a href="https://www.bhrgastronomia.com.br/" target="_blank">
				<img src="datamachina/logos/bhr.png"  alt="" />
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
					<iframe className="iframe-premio" src="https://www.youtube.com/embed/Mt3nyO5tUs4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
				</div>
				<div className="logo-premio">
					<p className="title">
						Muito trabalho só <br /> poderia resultar em <br /> reconhecimento
					</p>
					<img src="datamachina/img/top100.svg" alt="top100" />
				
					<p className="p-premio">Fomos reconhecidos no Prêmio 100 Open Startups pelo 2º ano consecutivo. Dessa vez fomos eleitos a 3ª melhor citytech de 2022.</p>
				</div>
			</div>
		</section>

		<section className="programas-de-aceleracao">
			<div className="link__ancor" id="aceleracoes"></div>
			<p className='title'>Vários programas de aceleração nos ajudaram a <br /> aprimorar nossos produtos</p>
		</section>

		<section className="marcas marcas--2" id="clientes">
			<a href="http://adesampa.com.br/" target="black">
				<img src="datamachina/logos/adesampa.png" alt=""/>
			</a>
			<a href="https://www.inovativabrasil.com.br/" target="black">
				<img src="datamachina/logos/inovabrasil.png" alt=""/>
			</a>
			<a href="https://www.capital.sp.gov.br/" target="black">
				<img src="datamachina/logos/prefeituradesp.svg" alt=""/>
			</a>
			<a href="https://vedacit.com.br/" target="black">
				<img src="datamachina/logos/vedacitlabs.png" alt=""/>
			</a>
			<a href="https://softex.br/" target="black">
				<img src="datamachina/logos/softex.png" alt=""/>
			</a>
			<a href="https://www.gov.br/startuppoint/pt-br/programas/ia2-mctic" target="black">
				<img src="datamachina/logos/ia2.png" alt=""/>
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
					<p className="seta-1">→</p>
				</div>
			
				<a href="mailto:contato@datamachina.com.br">
					<form className="conhecer__email">
						contato@datamachina.com.br
					</form>
				</a>
			</div>
		</section>
						
		{/* FOOTER */}
		
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
							<img src="./icones/instagram.svg" alt=""/>
						</a>
						<a href="https://www.linkedin.com/company/datamachina" target="blank" >
							<img src="./icones/linkedin.svg" alt=""/>
						</a>
						<a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank">
							<img src="./icones/youtube.svg" alt=""/>
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

		{/* Bootstrap */}
		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
		integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
		crossOrigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
		integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
		crossOrigin="anonymous"></script>
	</>
)}