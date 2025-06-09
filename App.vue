<template>
  <NavBar></NavBar>
  <div id="home">
    <Home></Home>    
  </div>
  <div id="about">
    <About></About>
    <Skills></Skills>
  </div>
  <Projects></Projects>
</template>

<script>
import Home from './components/Home.vue'
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
export default {
  name: 'App',
  components: {
    Home,
    NavBar,
    About,
    Projects,
    Skills
  }
}
</script>

<style>
body{
  background-color: rgb(116, 116, 214);
}
#about{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10rem;
  padding-top: 4rem;
} 
#home{
  padding-top: 4rem;
}
.app-container {
  min-height: 100vh;
  display: grid;
  place-items:center;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
