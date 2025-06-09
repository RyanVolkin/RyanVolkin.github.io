<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="home">
    <h1>Welcome to my personal page</h1>
    <h2>By Ryan Volkin</h2>
    <ul>
      <li>
        <!-- Twitter -->
        <a href="https://twitter.com/" class="fa fa-twitter" target="_blank"></a>
      </li> 
      <li>
        <!-- GitHub -->
        <a href="https://github.com/RyanVolkin" class="fa fa-github" target="_blank"></a>
      </li>
      <li>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/ryan-volkin-98782a289/" class="fa fa-linkedin" target="_blank"></a>
      </li>
      <li>
        <!-- Email -->
        <a href="mailto:ryanvolkin@gmail.com" class="fa fa-envelope" target="_blank"></a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home-page',
}
</script>

<style scoped>
.home {
  padding: 2rem;
  color: white;
  text-align: center;
}
.home h1{
  font-size: 3rem;      
}
.home h2{
  font-size: 2rem;
}

.home ul{
  list-style-type: none;
  padding: 0;
}

.home li {
  margin: 1rem 0;
}

.home a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.home ul{
  display: flex;
  justify-content: center;
  width: 100%;
}
li{
  width: 10%;
}
.fa {
  font-size: 3rem;
  background: none;
  color: white;
} 
.fa:hover {
  transform: translateY(-5px);
  transition: ease .25s;
}
</style>
