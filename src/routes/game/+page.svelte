<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<span>Players: {data.players}/{data.max_players}</span>
	<span>Map: {data.map}</span>
	<span>Name: {data.name}</span>
</div>
