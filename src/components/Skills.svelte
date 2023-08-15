<script>
	const skills = [
		{
			name: "React",
			type: "Frontend",
			file: "react",
		},
		{
			name: "Vue",
			type: "Frontend",
			file: "vue",
		},
		{
			name: "Angular",
			type: "Frontend",
			file: "angular",
		},
		{
			name: "Svelte",
			type: "Frontend",
			file: "svelte",
		},
		{
			name: "Nuxt",
			type: "Frontend",
			file: "nuxt",
		},
		{
			name: "Next.js",
			type: "Frontend",
			file: "next",
		},
		{
			name: "Electron",
			type: "Frontend",
			file: "electron",
		},
		{
			name: "Redux",
			type: "Frontend",
			file: "redux",
		},
		{
			name: "Apollo",
			type: "Frontend",
			file: "apollo",
		},
		{
			name: "Kotlin",
			type: "Backend",
			file: "kotlin",
		},
		{
			name: "Node.js",
			type: "Backend",
			file: "node",
		},
		{
			name: "Express",
			type: "Backend",
			file: "express",
		},
		{
			name: "Deno",
			type: "Backend",
			file: "deno",
		},
		{
			name: "Go",
			type: "Backend",
			file: "go",
		},
		{
			name: "Python",
			type: "Backend",
			file: "python",
		},
		{
			name: "Flask",
			type: "Backend",
			file: "flask",
		},
		{
			name: "MongoDB",
			type: "Backend",
			file: "mongo",
		},
		{
			name: "PostgreSQL",
			type: "Backend",
			file: "postgresql",
		},
		{
			name: "Firebase",
			type: "Backend",
			file: "firebase",
		},
		{
			name: "Supabase",
			type: "Backend",
			file: "supabase",
		},
		{
			name: "GraphQL",
			type: "Backend",
			file: "graphql",
		},
		{
			name: "Typescript",
			type: "Frontend",
			file: "typescript",
		},
		{
			name: "Javascript",
			type: "Frontend",
			file: "javascript",
		},
		{
			name: "jQuery",
			type: "Frontend",
			file: "jquery",
		},
		{
			name: "Websockets",
			type: "Frontend",
			file: "websockets",
		},
		{
			name: "Bootstrap",
			type: "Frontend",
			file: "bootstrap",
		},
		{
			name: "Tailwind CSS",
			type: "Frontend",
			file: "tailwind",
		},
		{
			name: "CSS",
			type: "Frontend",
			file: "css",
		},
		{
			name: "Sass",
			type: "Frontend",
			file: "sass",
		},
		{
			name: "HTML",
			type: "Frontend",
			file: "html",
		},
	];
</script>

<section>
	<h2>Skills</h2>
	<div class="grid-container">
		{#each skills as skill, index}
			<div key={index} class="skill">
				<img src={`assets/${skill.file}.svg`} alt={skill.name} class="svg" />
				<p class="skill-name">{skill.name}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.grid-container {
		display: grid;
		margin-top: 75px;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 20px;
	}

	.grid-container div {
		text-align: center;
		border: 1px solid #fcccd3;
		border-radius: 5px;
		transition: all 0.3s ease-in-out;
		padding: 10px;
	}

	img {
		height: 9rem;
		max-width: 90%;
	}

	.skill-name {
		color: #fcccd3;
		margin-bottom: 5px;
		transition: all 0.3s ease-in-out;
	}

	.skill:hover .skill-name {
		color: #303030;
	}

	.skill:hover {
		border: 1px solid #303030;
	}

	@media (max-width: 1024px) {
		.skill-name {
			color: #303030;
		}
		.grid-container {
			grid-gap: 0;
		}
	}

	@media (max-width: 768px) {
		img {
			height: 5.5rem;
		}
	}

	@media (max-width: 424px) {
		.grid-container {
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 0;
		}

		img {
			height: 4rem;
		}
	}

	@media (max-width: 375px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
		img {
			height: 4.5rem;
		}
	}

	@media (max-width: 320px) {
		img {
			height: 4rem;
		}
	}
</style>
