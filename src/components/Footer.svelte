<div class="footer-container">
	<footer>
		<div class="copyright">© 2020-2023 Corey Lanier, all rights reserved.</div>
		<div class="framework">
			Created using
			<a href="https://svelte.dev" target="_blank">
				<span>Svelte</span>
			</a>
		</div>
	</footer>
</div>

<style>
	.footer-container {
		padding-bottom: 20px;
	}
	footer {
		margin: 40px auto 0;
		width: 100%;
		max-width: 1280px;
		background: #c28485;
		font-family: "Neuton", sans-serif;
		font-weight: 700;
		color: #fff;
		font-size: 2rem;
		border-radius: 5px;
		padding: 5px 10px 11.5px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.framework {
		text-align: right;
	}

	a {
		color: #fff;
		text-decoration: underline;
	}

	a span {
		transition: all 0.3s ease-in-out;
	}

	a:hover span {
		color: #303030;
	}
	@media (max-width: 1280px) {
		footer {
			width: 90%;
		}
	}

	@media (max-width: 424px) {
		footer {
			font-size: 1.8rem;
			padding-bottom: 10px;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr;
		}
		.framework {
			text-align: left;
		}
	}
	@media (max-width: 320px) {
		footer {
			font-size: 1.6rem;
		}
	}
</style>
