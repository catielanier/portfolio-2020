<script>
  export let posts;
</script>

<section>
  <h2>Blog</h2>
  <p>Here are selected works from my blog:</p>
  <ul>
    {#each posts as post}
      <li key={post._id}>
        <a href="https://blog.coreylanier.com/post/${post._id}">{post.title}</a>
      </li>
    {/each}
  </ul>
</section>
