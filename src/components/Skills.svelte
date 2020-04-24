<script>
  const skills = [
    {
      name: "React",
      type: "Frontend",
      file: "react"
    },
    {
      name: "Vue",
      type: "Frontend",
      file: "vue"
    },
    {
      name: "Angular",
      type: "Frontend",
      file: "angular"
    },
    {
      name: "Svelte",
      type: "Frontend",
      file: "svelte"
    },
    {
      name: "Redux",
      type: "Frontend",
      file: "redux"
    },
    {
      name: "Apollo",
      type: "Frontend",
      file: "apollo"
    },
    {
      name: "Node.js",
      type: "Backend",
      file: "node"
    },
    {
      name: "MongoDB",
      type: "Backend",
      file: "mongo"
    },
    {
      name: "Firebase",
      type: "Backend",
      file: "firebase"
    },
    {
      name: "GraphQL",
      type: "Backend",
      file: "graphql"
    },
    {
      name: "Typescript",
      type: "Frontend",
      file: "typescript"
    },
    {
      name: "Javascript",
      type: "Frontend",
      file: "javascript"
    },
    {
      name: "CSS",
      type: "Frontend",
      file: "css"
    },
    {
      name: "Sass",
      type: "Frontend",
      file: "sass"
    },
    {
      name: "HTML",
      type: "Frontend",
      file: "html"
    }
  ];
</script>

<style>
  .grid-container {
    display: grid;
    margin-top: 75px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
  }

  .grid-container div {
    text-align: center;
  }

  img {
    height: 9rem;
  }

  .skill-name {
    visibility: hidden;
  }
  .skill:hover .skill-name {
    visibility: visible;
  }

  .svg {
    transition: all 0.2s ease-in-out;
  }

  .skill:hover .svg {
    filter: invert(0.5) brightness(100);
  }
</style>

<section id="skills">
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
