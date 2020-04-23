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
    background: #b3cde0;
    justify-content: space-around;
    margin: 0;
    padding: 15px 0 20px;
    border-radius: 5px;
  }
  li {
    text-transform: capitalize;
  }
  a {
    color: #252835;
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
</style>

<nav>
  <ul>
    {#each navBarItems as item, index}
      <a href={item.location} key={index}>
        <li>{item.label}</li>
      </a>
    {/each}
  </ul>
</nav>
