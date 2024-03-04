import './datamachina.css';

export default function Home() {
    return(<>

		<div className="banner" id="inicio">
		 	<div className='banner__container'>
				<div className="banner__texts">
								<h1> <em>/</em> Gostamos <br /> de problemas <br /> difíceis!</h1>
								<p className="banner-p-2">Somos pesquisadores e empreendedores com cultura de inovação aplicada,
									prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos.</p>
							</div> 
				
							{/* Vídeo */}
				
							 <iframe
								className="iframe-banner" src="https://www.youtube.com/embed/bQjCKkZRVbA"
								title="Uma nova Data Machina"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
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
						<p className="titulo-1">dm mapalytics</p>
						<p className="titulo-2">
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
						<p className="titulo-1">dm log</p>
						<p className="titulo-2">Criamos um painel de distribuição de cargas e roteirização de entregas voltado para
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
						<p className="titulo-4">Nosso produto de leads é uma API que se integra a plataformas de gestão de
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

		<div className="nossas-solucoes" id="nossas-solucoes">
			Nossas soluções já ajudaram várias <br />
			empresas e queremos ajudar muitas mais
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

		<div className="programas-de-aceleracao" id="aceleracao">
			<p className='title'>Vários programas de aceleração nos ajudaram a <br /> aprimorar nossos produtos</p>
		</div>

		<div className="clientes" id="clientes">
			<div className="clientes-container">
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
                    <img
						src="datamachina/logos/ia2.png" />
                    </a>
			</div>
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
    </>)
}