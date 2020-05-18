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
      name: "Express",
      type: "Backend",
      file: "express"
    },
    {
      name: "Python",
      type: "Backend",
      file: "python"
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
      name: "jQuery",
      type: "Frontend",
      file: "jquery"
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
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 25px;
  }

  .grid-container div {
    text-align: center;
    border: 1px solid #252835;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    padding: 10px;
  }

  img {
    height: 9rem;
  }

  .skill-name {
    color: #252835;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
  }

  .skill:hover .skill-name {
    color: #fff;
  }

  .skill:hover {
    border: 1px solid #fff;
  }

  @media (max-width: 414px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0;
    }

    img {
      height: 4rem;
    }

    .skill-name {
      visibility: visible;
    }
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
