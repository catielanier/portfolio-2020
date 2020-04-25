<script>
  export let posts;
</script>

<style>
  ul {
    list-style-type: "~";
    list-style-position: outside;
    font-family: "Neuton", serif;
    font-size: 2.7rem;
    color: #b3cde0;
    padding-bottom: 25px;
  }
  li > span {
    position: relative;
    left: 10px;
  }
  li > span a {
    text-decoration: underline;
    color: #0557a3;
  }
  li span.link {
    color: white;
    transition: all 0.5s ease-in-out;
  }
  li > span a:hover span.link {
    color: #0557a3;
  }

  a.button {
    background: #b3cde0;
    color: #252835;
    padding: 20px 20px 15px;
    font-family: "Comfortaa", sans-serif;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
  }

  a.button:hover {
    text-decoration: none;
  }

  .hvr-rotate {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-rotate:hover,
  .hvr-rotate:focus,
  .hvr-rotate:active {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
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
  <a
    href="https://blog.coreylanier.com"
    target="_blank"
    class="button hvr-rotate">
    View Rest
  </a>
</section>
