<script>
	export let posts;
</script>

<style>
	ul {
		list-style-type: "~";
		list-style-position: outside;
		font-family: "Neuton", serif;
		font-size: 2.7rem;
		color: #c28485;
		padding-bottom: 25px;
	}
	li > span {
		position: relative;
		left: 10px;
	}
	li > span a {
		text-decoration: underline;
		color: #f7a3b4;
	}
	li span.link {
		color: #303030;
		transition: all 0.3s ease-in-out;
	}
	li > span a:hover span.link {
		color: #f7a3b4;
	}

	a.button {
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

	a.button:hover {
		background: #c28485;
		color: #fcccd3;
		box-shadow: 0 0 5px #c28485, 0 0 25px #c28485, 0 0 50px #c28485,
			0 0 200px #c28485;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #fcccd3);
	}

	a.button span {
		position: absolute;
		display: block;
	}

	a.button span:nth-child(1) {
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
	a.button span:nth-child(2) {
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
	a.button span:nth-child(3) {
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

	a.button span:nth-child(4) {
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

	@media (max-width: 424px) {
		li {
			padding-right: 5%;
		}
	}
</style>

<section id="blog">
	<h2>Blog</h2>
	<p>Here are the most recent works from my blog:</p>
	<ul>
		{#each posts as post}
			<li key={post._id}>
				<span>
					<a
						href={`https://blog.coreylanier.com/post/${post._id}`}
						target="_blank">
						<span class="link">{post.title}</span>
					</a>
				</span>
			</li>
		{/each}
	</ul>
	<a href="https://blog.coreylanier.com" target="_blank" class="button">
		<span />
		<span />
		<span />
		<span />
		View Rest
	</a>
</section>
