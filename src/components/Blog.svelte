<script>
	export let posts;
</script>

<section id="blog">
	<h2>Blog</h2>
	<p>Here are the most recent works from my blog:</p>
	<ul>
		{#each posts as post}
			<li key={post._id}>
				<span>
					<a
						href={`https://blog.coreylanier.com/post/${post._id}`}
						target="_blank"
					>
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
	a.button:after,
	a.button:before {
		content: " ";
		width: 10px;
		height: 10px;
		position: absolute;
		transition: all 1s;
	}
	a.button:after {
		top: -1px;
		left: -1px;
		border-top: 2px solid #c28485;
		border-left: 2px solid #c28485;
	}
	a.button:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 2px solid #c28485;
		border-right: 2px solid #c28485;
	}
	a.button:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
		text-decoration: none;
	}
	a.button:hover:before,
	a.button:hover:after {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 424px) {
		li {
			padding-right: 5%;
		}
	}
</style>
