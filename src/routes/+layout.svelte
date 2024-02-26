<script>
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Fireflies from '$lib/Fireflies.svelte';
	import '../app.css';
	import '@fontsource-variable/source-code-pro';
</script>

<ModeWatcher />
<Header />
<main class="max-w-7xl px-4 md:px-20 mt-16 sm:mt-32 grow">
	<slot />
</main>
<Footer />
<Fireflies />
