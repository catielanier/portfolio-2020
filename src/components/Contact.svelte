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
		border-bottom: 2px solid #c28485;
	}
	input::placeholder,
	textarea::placeholder {
		color: #303030;
	}

	button {
		cursor: pointer;
		margin-top: 15px;
		position: relative;
		padding: 15px 20px;
		background: #fcccd3;
		font-family: "Comfortaa", serif;
		text-transform: uppercase;
		font-size: 1.6rem;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border: 0;
		transition: all 1s;
		color: #c28485;
	}
	button:after,
	button:before {
		content: " ";
		width: 10px;
		height: 10px;
		position: absolute;
		transition: all 1s;
	}
	button:after {
		top: -1px;
		left: -1px;
		border-top: 2px solid #c28485;
		border-left: 2px solid #c28485;
	}
	button:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 2px solid #c28485;
		border-right: 2px solid #c28485;
	}
	button:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	button:hover:before,
	button:hover:after {
		width: 100%;
		height: 100%;
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
