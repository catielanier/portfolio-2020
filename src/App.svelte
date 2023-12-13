<script>
	import MenuBar from "./components/MenuBar.svelte";
	import Header from "./components/Header.svelte";
	import Skills from "./components/Skills.svelte";
	import Portfolio from "./components/Portfolio.svelte";
	import Contact from "./components/Contact.svelte";
	import Footer from "./components/Footer.svelte";
	import Blog from "./components/Blog.svelte";
	import { onMount } from "svelte";
	import axios from "axios";
	import { COUNTRIES } from "./utils/constants";
	let posts = [];
	let ip;
	let isKr;
	onMount(async () => {
		const blogPosts = [];
		const res = await axios(
			"https://protected-atoll-04619.herokuapp.com/api/posts/",
		);
		res.data.data.forEach((item) => {
			blogPosts.push(item);
		});
		posts = blogPosts;
		const resIp = await axios.get(
			"https://api.ipgeolocation.io/ipgeo?apiKey=54de6cf316574fa59a6580f75133b847",
		);
		ip = resIp.data.ip;
		isKr = COUNTRIES.includes(resIp.data.country_code2);
	});
</script>

<div class="container">
	<MenuBar />
	<Header />
	<main>
		<div class="divider div-transparent" id="skills" />
		<Skills />
		<div class="divider div-transparent" id="portfolio" />
		<Portfolio />
		<div class="divider div-transparent" id="blog" />
		<Blog {posts} />
		<div class="divider div-transparent" id="contact" />
		<Contact {ip} {isKr} />
	</main>
</div>
<Footer />

<style>
	.container {
		width: 100%;
		margin: 0 auto;
	}

	.divider {
		margin: 6rem 0;
		position: relative;
		height: 2px;
	}

	.div-transparent:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 2px;
		background-image: linear-gradient(
			to right,
			transparent,
			rgb(194, 132, 133),
			transparent
		);
	}

	@media (max-width: 1280px) {
		.container {
			width: 90%;
		}
	}
</style>
