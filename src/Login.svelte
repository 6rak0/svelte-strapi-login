<script>
  import loginUser from "./lib/helper";
  let identifier = "";
  let password = "";
  async function handleSubmit() {
    let user;
    user = await loginUser({ identifier, password });
  }
</script>

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input type="text" placeholder="email" required bind:value={identifier} />
    </div>
    <div>
      <input
        type="password"
        placeholder="password"
        required
        bind:value={password} />
    </div>
    <button type="submit">login</button>
  </form>
</section>
