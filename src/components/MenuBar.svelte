<script>
	const navBarItems = [
		{ label: "home", location: "#home" },
		{ label: "skills", location: "#skills" },
		{ label: "portfolio", location: "#portfolio" },
		{ label: "blog", location: "#blog" },
		{ label: "contact", location: "#contact" },
	];
	let menu = false;

	const showMenuWithoutAnchor = (e) => {
		e.preventDefault();
		menu = !menu;
	};
	const showMenu = () => {
		menu = !menu;
	};
</script>

<style>
	nav {
		position: fixed;
		top: 20px;
		max-width: 1280px;
		width: 100%;
		z-index: 5;
	}
	ul {
		font-family: "Neuton", sans-serif;
		font-weight: 700;
		list-style: none;
		font-size: 2.4rem;
		display: flex;
		background: #c28485;
		justify-content: space-around;
		margin: 0;
		padding: 15px 0 20px;
		border-radius: 5px;
	}
	li {
		text-transform: capitalize;
	}
	a {
		color: #fff;
		transition: all 0.3s ease-in-out;
	}
	a:hover {
		text-decoration: none;
		color: #303030;
	}

	.menu {
		display: none;
		width: 45px;
		height: 45px;
		z-index: 5;
		background: #fcccd3;
		border-radius: 5px;
	}

	.menu img {
		width: 100%;
	}

	.mobile-menu {
		display: none;
	}

	.show {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		right: -100%;
		transition: all 0.5s ease-in-out;
		z-index: 10;
		background: #c28485;
	}

	.mobile-menu.show {
		display: block;
		top: 0;
		right: 0;
	}

	.show a {
		color: #303030;
	}

	.close-menu {
		width: 35px;
		height: 35px;
		position: relative;
		top: 15px;
		left: 15px;
	}

	.close-menu img {
		width: 100%;
	}

	.flex-container {
		display: flex;
		height: 90vh;
		width: 100%;
		font-family: "Neuton", serif;
		text-transform: capitalize;
		font-size: 2.8rem;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	@media (max-width: 1280px) {
		nav {
			width: 90%;
		}
	}
	@media (max-width: 424px) {
		nav {
			display: none;
		}

		.menu {
			display: block;
			position: fixed;
			top: 0px;
			left: 0px;
		}
	}
</style>

<div>
	<a href="#" class="menu" on:click={showMenuWithoutAnchor}>
		<img src="assets/menu.png" alt="Menu" />
	</a>
</div>
<nav>
	<ul>
		{#each navBarItems as item, index}
			<a href={item.location} key={index}>
				<li>{item.label}</li>
			</a>
		{/each}
	</ul>
</nav>
<div class={!menu ? 'mobile-menu' : 'mobile-menu show'}>
	<div class="close-menu">
		<a href="#" on:click={showMenuWithoutAnchor}>
			<img src="assets/x.png" alt="Close Menu" />
		</a>
	</div>
	<div class="flex-container">
		{#each navBarItems as item, index}
			<div key={index}>
				<a href={item.location} on:click={showMenu}>{item.label}</a>
			</div>
		{/each}
	</div>
</div>
