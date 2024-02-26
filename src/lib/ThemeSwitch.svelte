<script>
	import { setMode, mode } from 'mode-watcher';

	let darkMode = false;
	function handleModeChange() {
		if ($mode === 'light') {
			setMode('dark');
			darkMode = !darkMode;
		} else {
			setMode('light');
			darkMode = !darkMode;
		}
	}
</script>

<button
	type="button"
	aria-pressed={darkMode}
	aria-label="Dark mode"
	on:click={handleModeChange}
	class="px-1 py-2.5"
>
	<svg
		class="dark:hidden text-yellow-800"
		xmlns="http://www.w3.org/2000/svg"
		width="1.5em"
		height="1.5em"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"
		/></svg
	>
	<svg
		class="hidden dark:block dark:text-orange"
		xmlns="http://www.w3.org/2000/svg"
		width="1.5em"
		height="1.5em"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
		/></svg
	>
</button>
