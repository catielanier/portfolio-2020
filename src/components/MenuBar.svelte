<script>
  const navBarItems = [
    { label: "home", location: "#home" },
    { label: "skills", location: "#skills" },
    { label: "portfolio", location: "#portfolio" },
    { label: "blog", location: "#blog" },
    { label: "contact", location: "#contact" }
  ];
</script>

<style>
  ul {
    font-family: "Neuton", sans-serif;
    font-weight: 700;
    list-style: none;
    font-size: 1.7rem;
  }
  li {
    text-transform: capitalize;
  }
</style>

<header>
  <ul>
    {#each navBarItems as item, index}
      <a href={item.location} key={index}>
        <li>{item.label}</li>
      </a>
    {/each}
  </ul>
</header>
