'use client'
import './datamachina.css';

/* setTimeout(() => {
	document.head.innerHTML += '<title>Data Machina</title>'
	document.head.innerHTML += `
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KW48QX9');</script>
		<!-- End Google Tag Manager -->
	`

	document.body.innerHTML += `
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KW48QX9"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
	`
}, 200); */

export default function Home() {
    return(<>


		{/* Bootstrap */}

		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossorigin="anonymous"
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

		<span className="container-soluctions">

			{/* <!-- 1 -- > */}
			
			<div className="unidade-de-negocio-1" id="Mapalytics">

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
						<a className="saiba-mais-3 dm_mapalytics" href="/pdfs/dm_mapalytics.pdf" target="_blank">
							Saiba mais
							<div className="ir-3">
								↓
							</div>
						</a>
					</div>
				</div>
				<div className="contorno">
					<img className="gif-animado" src="datamachina/img/Maplytics-Atualizado.gif" alt="" />
					<div className="unidade-footer-3 unidade-footer">
						<img src="datamachina/img/mapalyticsbranco.svg" />
					</div>
				</div>
			</div>
			
			{/* <!-- 2 --> */}
			
			<div className="unidade-de-negocio" id="Logística">
				<div className="contorno">
					<img className="gif-animado" src="/datamachina/img/Log-Atualizado.gif" alt="gif animado" />
					<div className="unidade-footer-1 unidade-footer">
						<img src="/datamachina/img/logbranco.svg" />
					</div>
				</div>
				<div className="descricao">
					<div className="container-data-machina">
						<p className="dm-titulo-1">dm log</p>
						<p className="dm-titulo-2">Criamos um painel de distribuição de cargas e roteirização de entregas voltado para
							empresas com dores diárias no seu processo de logística, seja com frota própria ou terceirizada.
							Através do painel é possível subir entregas agendadas e distribuir automaticamente os pedidos em
							veículos cadastrados.
						</p>
						<a href="/pdfs/dm_log.pdf" target="_blank">
							<div className="saiba-mais-1 dm_logistica" >
								Saiba mais
								<div className="ir-1">
									↓
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			{/* <!-- 3 --> */}
			<div className="unidade-de-negocio-1 " id="Leads">
				<div className="descricao-1">
					<div className="container-data-machina">
						<p className="titulo-3">dm leads</p>
						<p className="dm-titulo-4">Nosso produto de leads é uma API que se integra a plataformas de gestão de
							leads levando uma seleção de contatos qualificados e ranqueados de acordo com o perfil dos seus
							clientes já existentes. Analisamos seus clientes para indicar leads similares e validamos os
							contatos por CNPJ, CNAE, informações demográficas e validação visual do endereço cadastrado
							através de visão computacional. O objetivo é aumentar as taxas de retorno das equipes de venda e
							trazer mais clientes para o seu negócio.</p>
						<a className="saiba-mais-2 dm_leads" id="saiba-mais-2" href="/pdfs/dm_leads.pdf" target="_blank">
							Saiba mais
							<div className="ir-2" id="ir-2">
								↓
							</div>
						</a>
					</div>
				</div>
				<div className="contorno">
					<img className="gif-animado" src="/datamachina/img/Leads-Atualizado_1.gif" alt="" />
					<div className="unidade-footer-2 unidade-footer">
						<img src="/datamachina/img/leadsbranco.svg" />
					</div>
				</div>
			</div>
		</span>

		<div className='solucoes'>
			<div className="nossas-solucoes" id="nossas-solucoes">
				<p className='title'>
					Nossas soluções já ajudaram várias <br />
					empresas e queremos ajudar muitas mais
				</p>
			</div>
		</div>
		
		<div className="marcas">
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
		</div>

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

		<div className="premio" id="premio">
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

		<div className="programas-de-aceleracao" id="aceleracao">
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

		<div className="conhecer" id="contato">
			<div className="conhecer__nos">
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
		</div>
		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
			integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
			crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
			integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
			crossorigin="anonymous"></script>
    </>)
}