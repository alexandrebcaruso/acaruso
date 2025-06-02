<script lang="ts">
	export let title: string;
	export let icon: string;
	export let image: string;
	export let features: string[];
	export let stats: Array<{ value: string; label: string }>;
	export let ctaText: string;
</script>

<div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
	<div class="uk-width-1-3@m">
		<img src={image} alt={title} class="uk-height-1-1 uk-object-cover" />
	</div>
	<div class="uk-width-2-3@m">
		<div class="uk-card-body">
			<div class="uk-text-large" style="font-size: 2rem;">{icon}</div>
			<h2 class="uk-card-title">{title}</h2>

			<ul class="uk-list uk-list-bullet">
				{#each features as feature}
					<li>{@html feature}</li>
				{/each}
			</ul>

			<div class="uk-grid-small uk-child-width-1-2@m uk-margin-top" uk-grid>
				{#each stats as stat}
					<div>
						<div class="uk-card uk-card-primary uk-card-body uk-text-center">
							<div class="uk-text-large">{stat.value}</div>
							<div class="uk-text-small">{stat.label}</div>
						</div>
					</div>
				{/each}
			</div>

			<button class="uk-button uk-button-primary uk-margin-top">
				{ctaText} →
			</button>
		</div>
	</div>
</div>
