<template>
  <nav>
    <ul>
      <li><a href="#home" class="nav-link">Home</a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#about" class="nav-link">About</a></li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
nav {
  background-color: #333;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

nav ul li a {
  color: white;
  text-decoration: none;
  transition: ease .5s;
}

nav ul li a:hover {
  color: gainsboro;
}
</style>