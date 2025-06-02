<!-- src/routes/metodo/+page.svelte-->
<script lang="ts">
	import LambdaPillars from '$lib/components/LambdaPillars.svelte';
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	import DiagnosticoImg from '$lib/assets/images/diagnostico-local.png';
	import SolucaoImg from '$lib/assets/images/solucao-personalizada.png';
	// import ResultadosImg from '$lib/assets/images/resultados-mensuraveis.png';
	import ProcessosImg from '$lib/assets/images/processo.png';

	export const load = () => {
		return {
			metadata: {
				title: 'Nosso Método de Trabalho | A. Caruso Osório',
				description: 'Como criamos soluções digitais para empresas de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container">
	<div class="uk-container uk-margin-large-top">
		<h1 class="uk-heading-large uk-text-center">
			Nosso Método <span class="text-primary">Exclusivo para Empresas de Osório</span>
		</h1>

		<p class="uk-text-lead uk-text-center uk-width-3-4@m uk-margin-auto">
			Desenvolvemos soluções digitais que entendem a realidade do mercado gaúcho. Conheça nosso
			processo de 3 etapas criado especificamente para impulsionar negócios em Osório e região.
		</p>

		<LambdaPillars />

		<div class="uk-grid-large uk-child-width-1-1 uk-margin-large-top uk-grid">
			<!-- Pilar 1: Diagnóstico Local -->
			<div class="uk-flex uk-flex-middle uk-grid">
				<div class="uk-width-1-3@m">
					<img
						src={DiagnosticoImg}
						alt="Análise de mercado em Osório"
						class="uk-border-rounded uk-box-shadow-medium"
					/>
				</div>
				<div class="uk-width-2-3@m">
					<h2 class="uk-h1"><span class="text-primary">Diagnóstico Local</span></h2>
					<p class="uk-text-large">
						Começamos imergindo na realidade do seu negócio e do mercado de Osório:
					</p>
					<ul class="uk-list uk-list-bullet uk-list-large">
						<li>
							<strong>Análise de concorrência local</strong> - Mapeamos seus principais concorrentes
							na região
						</li>
						<li>
							<strong>Pesquisa de público gaúcho</strong> - Entendemos o comportamento do consumidor
							de Osório
						</li>
						<li>
							<strong>Diagnóstico digital completo</strong> - Avaliamos seu site, redes sociais e presença
							online
						</li>
						<li>
							<strong>Identificação de oportunidades</strong> - Encontramos gaps no mercado local para
							explorar
						</li>
					</ul>
					<div class="uk-card uk-card-default uk-card-body uk-margin-top">
						<p class="uk-text-emphasis">
							"Empresas que entendem seu mercado local têm 3x mais chances de sucesso nos resultados
							digitais"
						</p>
					</div>
				</div>
			</div>

			<!-- Pilar 2: Solução Personalizada -->
			<div class="uk-flex uk-flex-middle uk-grid">
				<div class="uk-width-2-3@m">
					<h2 class="uk-h1"><span class="text-primary">Solução Personalizada</span></h2>
					<p class="uk-text-large">
						Criamos estratégias sob medida para o perfil do seu negócio em Osório:
					</p>
					<ul class="uk-list uk-list-bullet uk-list-large">
						<li>
							<strong>Planejamento de marketing hiperlocal</strong> - Foco em bairros e regiões de Osório
						</li>
						<li>
							<strong>Criação de identidade visual regional</strong> - Design que conversa com a cultura
							gaúcha
						</li>
						<li>
							<strong>Desenvolvimento de ferramentas customizadas</strong> - Sistemas para automação
							de processos internos
						</li>
						<li>
							<strong>Soluções de atendimento ao cliente</strong> - Chatbots e sistemas de agendamento
							online
						</li>
					</ul>
				</div>
				<div class="uk-width-1-3@m">
					<img
						src={SolucaoImg}
						alt="Soluções personalizadas para Osório"
						class="uk-border-rounded uk-box-shadow-medium"
					/>
				</div>
			</div>

			<!-- Pilar 3: Resultados Mensuráveis -->
			<div class="uk-flex uk-flex-middle uk-grid">
				<div class="uk-width-1-3@m">
					<img
						src={ProcessosImg}
						alt="Resultados mensuráveis para empresas"
						class="uk-border-rounded uk-box-shadow-medium"
					/>
				</div>
				<div class="uk-width-2-3@m">
					<h2 class="uk-h1"><span class="text-primary">Resultados Mensuráveis</span></h2>
					<p class="uk-text-large">
						Monitoramos e otimizamos continuamente para garantir seu retorno:
					</p>
					<ul class="uk-list uk-list-bullet uk-list-large">
						<li><strong>Painéis de controle em tempo real</strong> - Acompanhe resultados 24/7</li>
						<li>
							<strong>Relatórios mensais simplificados</strong> - Entenda seu ROI sem jargões técnicos
						</li>
						<li><strong>Otimização contínua</strong> - Ajustamos estratégias baseado em dados</li>
						<li><strong>Treinamento de equipe</strong> - Capacitamos sua equipe em Osório</li>
					</ul>

				</div>
			</div>
		</div>
	</div>
<!-- Depoimentos de Clientes -->
<!-- <div class="uk-section uk-section-muted">
  <div class="uk-container">
    <h2 class="uk-heading-medium uk-text-center">Histórias de Sucesso em Osório</h2>
    <div class="uk-grid-match uk-child-width-1-3@m uk-grid">
      <div>
        <div class="uk-card uk-card-body">
          <p class="uk-text-italic">
            "A A. Caruso revolucionou nosso atendimento ao cliente. Agendamentos online aumentaram 80% e nossa equipe ganhou 10 horas semanais!"
          </p>
          <div class="uk-margin-top">
            <strong>Carlos Mendes</strong>
            <div class="uk-text-meta">Clínica Saúde Total - Centro, Osório</div>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-body">
          <p class="uk-text-italic">
            "Nossa loja de materiais de construção viu um aumento de 200% nas vendas online após a nova plataforma e campanhas locais."
          </p>
          <div class="uk-margin-top">
            <strong>Juliana Porto</strong>
            <div class="uk-text-meta">Materiais Construção & Cia - Osório</div>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-body">
          <p class="uk-text-italic">
            "O sistema de automação criado pela A. Caruso eliminou 90% dos processos manuais na nossa contabilidade."
          </p>
          <div class="uk-margin-top">
            <strong>Roberto Silva</strong>
            <div class="uk-text-meta">Contabilidade RS - Osório</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->

<!-- Fluxo de Trabalho -->
<div class="uk-section">
  <div class="uk-container">
    <h2 class="uk-heading-medium uk-text-center">Como Funciona Nosso Processo</h2>
    <div class="uk-grid-collapse uk-child-width-1-4@m workflow-steps uk-grid">
      <div>
        <div class="step-number">1</div>
        <h3>Diagnóstico Inicial</h3>
        <p>Reunião em Osório para entender seu negócio</p>
      </div>
      <div>
        <div class="step-number">2</div>
        <h3>Plano Estratégico</h3>
        <p>Desenvolvimento da solução personalizada</p>
      </div>
      <div>
        <div class="step-number">3</div>
        <h3>Implementação</h3>
        <p>Execução com acompanhamento próximo</p>
      </div>
      <div>
        <div class="step-number">4</div>
        <h3>Otimização Contínua</h3>
        <p>Ajustes baseados em resultados reais</p>
      </div>
    </div>
  </div>
</div>
<div class="main-heading">
	<LocalCTA text="Quer aplicar esse método no seu negócio?" buttonText="Agendar Consultoria" />
</div>
</div>

<style>

	.main-heading {
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>