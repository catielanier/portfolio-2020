<script>
	export let ip;
	export let block;
	let name = "";
	let email = "";
	let message = "";
</script>

<section>
	<h2>Contact</h2>
	<p>
		Let's create internet masterpieces together! If you want to hire or
		commission me for work, please contact me in one of the ways below.
	</p>
	<div class="grid-container">
		<div>
			<p class="email">Email: iam@coreylanier.com</p>
			<div class="contact-gap">
				<div>
					<a href="https://github.com/lanierc" target="_blank">
						<img src="assets/github.png" alt="Github" />
					</a>
				</div>
				{#if !block}
					<div>
						<a href="https://linkedin.com/in/laniercw" target="_blank">
							<img src="assets/linkedin.png" alt="LinkedIn" />
						</a>
					</div>
					<div>
						<a href="https://twitter.com/claniernsj" target="_blank">
							<img src="assets/twitter.png" alt="Twitter" />
						</a>
					</div>
				{/if}
			</div>
		</div>
		<div>
			{#if !block}
				<form action="https://formcarry.com/s/XrxTmMSz33Ei" method="POST">
					<input
						type="text"
						name="name"
						bind:value={name}
						required
						placeholder="Your name"
					/>
					<input
						type="email"
						name="email"
						bind:value={email}
						required
						placeholder="Email address"
					/>
					<textarea
						placeholder="Your message"
						name="message"
						bind:value={message}
						required
						cols="30"
						rows="10"
					/>
					<input type="hidden" name="ip" bind:value={ip} />
					<button type="submit">
						<span />
						<span />
						<span />
						<span />
						Send email
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.email {
		font-family: "Comfortaa", sans-serif;
		font-size: 1.7rem;
		margin-top: 35px;
	}
	.contact-gap {
		margin-top: 35px;
		max-width: 225px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 20px;
	}
	.contact-gap div img {
		width: 100%;
	}
	input,
	textarea {
		width: 100%;
		background: #fcccd3;
		color: #303030;
		border: 0;
		border-radius: 5px;
		border-bottom: 2px solid #f7a3b4;
		font-family: "Arvo", serif;
		font-size: 1.8rem;
		transition: 0.5 all ease-in-out;
	}
	input:focus,
	textarea:focus {
		border-bottom: 2px solid #b3cde0;
	}
	input::placeholder,
	textarea::placeholder {
		color: #303030;
	}

	button {
		position: relative;
		display: inline-block;
		padding: 25px 30px;
		margin: 40px 0;
		color: #c28485;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.5s;
		letter-spacing: 4px;
		overflow: hidden;
		margin-right: 50px;
		font-family: "Comfortaa", serif;
		font-size: 1.6rem;
		border: 0;
		background: #fcccd3;
		font-weight: bold;
		border-radius: 0;
	}

	button:hover {
		background: #c28485;
		color: #fcccd3;
		box-shadow: 0 0 5px #c28485, 0 0 25px #c28485, 0 0 50px #c28485,
			0 0 200px #c28485;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #fcccd3);
	}

	button span {
		position: absolute;
		display: block;
	}

	button span:nth-child(1) {
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #c28485);
		animation: animate1 1s linear infinite;
	}
	@keyframes animate1 {
		0% {
			left: -100%;
		}
		50%,
		100% {
			left: 100%;
		}
	}
	button span:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #c28485);
		animation: animate2 1s linear infinite;
		animation-delay: 0.25s;
	}
	@keyframes animate2 {
		0% {
			top: -100%;
		}
		50%,
		100% {
			top: 100%;
		}
	}
	button span:nth-child(3) {
		bottom: 0;
		right: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #c28485);
		animation: animate3 1s linear infinite;
		animation-delay: 0.5s;
	}
	@keyframes animate3 {
		0% {
			right: -100%;
		}
		50%,
		100% {
			right: 100%;
		}
	}

	button span:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #c28485);
		animation: animate4 1s linear infinite;
		animation-delay: 0.75s;
	}
	@keyframes animate4 {
		0% {
			bottom: -100%;
		}
		50%,
		100% {
			bottom: 100%;
		}
	}

	textarea {
		resize: none;
	}

	@media (max-width: 424px) {
		.grid-container {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 2fr;
			grid-gap: 0;
		}
	}
</style>
