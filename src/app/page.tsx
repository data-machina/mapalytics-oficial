'use client'
import './datamachina.css';

import Link from 'next/link'

/* 
	HEAD
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KW48QX9');</script>
	<!-- End Google Tag Manager -->

	BODY
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KW48QX9"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
 */


export default function Home() {
    return(<>

		{/* Bootstrap */}

		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossOrigin="anonymous"
		></link>


		<div className="dm-banner" id="inicio">
		 	<div className='dm-banner__container'>
				<div className="dm-banner__texts">
					<h1> <em>/</em> Gostamos <br /> de problemas <br /> difíceis!</h1>
					<p>
						Somos pesquisadores e empreendedores com cultura de inovação aplicada,
						prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos.
					</p>
				</div> 

				{/* Vídeo */}

				<iframe
					className="banner__iframe" src="https://www.youtube.com/embed/bQjCKkZRVbA"
					title="Uma nova Data Machina"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				></iframe>
			</div>
		</div>
	

		<div className="inquietude" id="inquietude">
			<p className='title' >Nossa inquietude nos leva a propor soluções para <br /> o dia-a-dia com tecnologias de fronteira</p>
		</div>

		<section className="produtos">
			<div className="link__ancor" id="solucoes"></div>
			{/* <!-- 1 -- > */}
			
			<div className="produtos__negocio--1" id="Mapalytics">

				<div className="descricao-1">
					<div className="container-data-machina">
						<p className="dm-titulo-1">dm mapalytics</p>
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
					<img className="gif-animado" src="datamachina/img/Maplytics-Atualizado.gif" alt="" />
					<div className="unidade-footer-3 unidade-footer">
						<img src="datamachina/img/mapalyticsbranco.svg" />
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
                <img src="datamachina/logos/Prancheta 1zelo 1.svg" />
            </a>
			<a href="https://www.casabauducco.com.br/" target="_blank">
                <img src="datamachina/logos/Prancheta 1bauducco 1.svg" />
            </a>
			<a href="https://www.comgas.com.br/" target="_blank">
                <img src="datamachina/logos/comgas.svg" />
            </a>
			<a href="https://www.lojasedmil.com.br/" target="_blank">
                <img src="datamachina/logos/edmil.png" />
            </a>
			<a href="https://www.whirlpool.com.br/" target="_blank">
                <img src="datamachina/logos/whirlpoll.png" />
            </a>
			<a href="https://www.mrs.com.br/" target="_blank">
                <img src="datamachina/logos/mrs.png" />
            </a>
			<a href="https://trutec.com.br/" target="_blank">
                <img src="datamachina/logos/trutec1.png" />
            </a>
			<a href="https://www.votorantimcimentos.com.br/" target="_blank">
                <img src="datamachina/logos/Prancheta 1votorantim 1.svg" />
            </a>
			<a href="https://www.aesbrasil.com.br/pt-br" target="_blank">
                <img src="datamachina/logos/aes.svg" />
            </a>
			<a href="http://www.gruporeciclabr.com.br/pt/" target="_blank">
                <img src="datamachina/logos/recicla.png" />
            </a>
			<a href="http://www.labcidade.fau.usp.br/" target="_blank">
                <img src="datamachina/logos/labcidade.png" />
            </a>
			<a href="https://cestanobre.com.br/" target="_blank">
                <img src="datamachina/logos/nobrecesta.png" />
            </a>
			<a href="https://www.poloplanejamento.com/" target="_blank">
                <img src="datamachina/logos/polo.png" />
            </a>
			<a href="https://mercadofavo.com/" target="_blank">
                <img src="datamachina/logos/favo.svg" />
            </a>
			<a href="https://www.trust.com.br/" target="_blank">
                <img src="datamachina/logos/Prancheta 1trust.svg" />
            </a>
			<a href="https://www.bhrgastronomia.com.br/" target="_blank">
                <img src="datamachina/logos/bhr.png" />
            </a>
		</section>

		<div className="container-comentarios">
			<div className="temos-orgulho">
				<p className='title'>
                    E temos orgulho de ter <br /> nossos clientes como <br /> parceiros
				    <div className="seta-2">↓</div>
				</p>
			</div>
			<div className="comentarios">
				<div id="carouselExampleControls" className="carousel cnt slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="carrossel-img-1" src="datamachina/logos/whirlpoll.png" />
							<p>"A Data Machina entendeu a nossa necessidade de uma forma muito rápida e tem nos ajudado
								a converter os desafios em oportunidades"</p>
							<p className="fulano">/Gelson Lira</p>
						</div>
						<div className="carousel-item">
							<img className="carrossel-img-1" src="datamachina/logos/polo.png" />
							<p>"A Data Machina nos ajudou a agilizar nosso processo de pesquisa. De forma muito
								inovadora conseguimos ter resultados acima do esperado."</p>
							<p className="fulano">/Thiago Zeidler</p>
						</div>
					</div>
					<div className="button-carrossel-container">
						<button className="carrossel-button teste" type="button" data-bs-target="#carouselExampleControls"
							data-bs-slide="next">
							<img src="datamachina/img/elementos/seta.svg" alt="" />
							<span className="visually-hidden">Next</span>
						</button>
						<button className="carrossel-button seta" type="button" data-bs-target="#carouselExampleControls"
							data-bs-slide="prev">
							<img src="datamachina/img/elementos/seta.svg" alt="" />
						
							<span className="visually-hidden">Previous</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div className="premio">
			<div className="link__ancor" id="premios"></div>
			<div className='premio__container'>
				<div className="video-premio">
					<iframe
						className="iframe-premio"
						src="https://www.youtube.com/embed/Mt3nyO5tUs4"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
				<div className="logo-premio">
					<p className="title">
						Muito trabalho só <br /> poderia resultar em <br /> reconhecimento
					</p>
					<img src="datamachina/img/top100.svg" alt="top100" />
				
					<p className="p-premio">Fomos reconhecidos no Prêmio 100 Open Startups pelo 2º ano consecutivo. Dessa vez fomos eleitos a 3ª melhor citytech de 2022.</p>
				</div>
			</div>
		</div>

		<div className="programas-de-aceleracao">
			<div className="link__ancor" id="aceleracoes"></div>
			<p className='title'>Vários programas de aceleração nos ajudaram a <br /> aprimorar nossos produtos</p>
		</div>

		<div className="marcas" id="clientes">
			<a href="http://adesampa.com.br/" target="black">
				<img src="datamachina/logos/adesampa.png" />
			</a>
			<a href="https://www.inovativabrasil.com.br/" target="black">
				<img src="datamachina/logos/inovabrasil.png" />
			</a>
			<a href="https://www.capital.sp.gov.br/" target="black">
				<img src="datamachina/logos/prefeituradesp.svg" />
			</a>
			<a href="https://vedacit.com.br/" target="black">
				<img src="datamachina/logos/vedacitlabs.png" />
			</a>
			<a href="https://softex.br/" target="black">
				<img src="datamachina/logos/softex.png" />
			</a>
			<a href="https://www.gov.br/startuppoint/pt-br/programas/ia2-mctic" target="black">
				<img src="datamachina/logos/ia2.png" />
			</a>
		</div>

		<div className="conhecer__nos">
			<div className="link__ancor" id="contato"></div>
			<div className="quer-nos-conhecer">
				<p>
					Alguma das nossas soluções te interessou? Ou quer saber como resolver
					outro problema?
				</p>
				<div className="manda">
					Manda um e-mail <br /> pra gente
				</div>
				<p className="seta-1">→</p>
			
				<a href="mailto:contato@datamachina.com.br">
					<form className="conhecer__email">
						contato@datamachina.com.br
					</form>
				</a>
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
					<div className="dm-footer__mapalytics">
						<img className="footer__logo--dm" src="./dm-white.svg" alt="" />
					</div>
					<Link href="/mapalytics">
						<img className='footer__mapalytics--logo' src="./mapalyticsbranco.svg" alt="" />
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

		
		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
			integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
			crossOrigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
			integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
			crossOrigin="anonymous"></script>
    </>)
}