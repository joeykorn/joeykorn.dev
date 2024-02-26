<script>
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	let links = [
		{ href: `/about`, title: `About` },
		{ href: `/contact`, title: `Contact` }
	];
</script>

<header class="max-w-screen-xl px-4 md:px-20">
	<div class="flex h-16 items-center justify-between">
		<a
			href="/"
			class="dark:text-light md:hover:text-orange-800 md:hover:dark:text-orange transition-colors text-sm font-medium py-2.5"
		>
			joey korn
		</a>
		<div class="flex">
			<nav class="flex items-center">
				<ul class="flex gap-x-4 lg:gap-x-5">
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="dark:text-light lowercase py-2.5 text-sm font-medium {$page.url.pathname ===
									link.href && `active`}"><span class="relative">{link.title}</span></a
							>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="ml-3 flex items-center">
				<ThemeSwitch />
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	nav a {
		span::after {
			content: '';
			transition: all theme('transitionDuration.100') theme('transitionTimingFunction.in-out');
			@apply invisible h-0.5 w-0 -bottom-2 left-0 absolute bg-orange-600 dark:bg-orange-200;
		}

		&:hover {
			span::after {
				@apply md:visible md:w-full;
			}
		}
	}

	nav li a.active {
		span::after {
			@apply visible w-full;
		}
	}
</style>
