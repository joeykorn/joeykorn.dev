<script>
	const fireflyQty = 25;
</script>

{#each Array(fireflyQty) as _, index (index)}
	<div class="firefly motion-reduce:hidden" key={index} />
{/each}

<style lang="scss">
	// https://codepen.io/mikegolus/pen/Jegvym
	// quantity should be same as number of elements
	$quantity: 25;

	.firefly {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 0.4vw;
		height: 0.4vw;
		margin: -0.2vw 0 0 9.8vw;
		animation: ease 200s alternate infinite;
		pointer-events: none;
		z-index: -1;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			transform-origin: -10vw;
		}

		&::before {
			background: var(--firefly-background-color);
			opacity: 0.4;
			animation: drift ease alternate infinite;
		}

		&::after {
			background: var(--firefly-color);
			opacity: 0;
			box-shadow: 0 0 0vw 0vw var(--firefly-color);
			animation:
				drift ease alternate infinite,
				flash ease infinite;
		}
	}

	// randomize fireflies motion
	@for $i from 1 through $quantity {
		$steps: random(12) + 16;
		$rotationSpeed: random(10) + 8s;

		.firefly:nth-child(#{$i}) {
			animation-name: move#{$i};

			&::before {
				animation-duration: #{$rotationSpeed};
			}
			&::after {
				animation-duration:
					#{$rotationSpeed},
					random(6000) + 5000ms;
				animation-delay:
					0ms,
					random(8000) + 500ms;
			}
		}

		@keyframes move#{$i} {
			@for $step from 0 through $steps {
				#{percentage($step * calc(100 / $steps))} {
					transform: translateX(random(100) - 50vw)
						translateY(random(100) - 50vh)
						scale(calc(random(75) / 100 + 0.25));
				}
			}
		}
	}

	@keyframes drift {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes flash {
		0%,
		30%,
		100% {
			opacity: 0;
			box-shadow: 0 0 0vw 0vw var(--firefly-color);
		}

		5% {
			opacity: 1;
			box-shadow: 0 0 2vw 0.4vw var(--firefly-color);
		}
	}
</style>
