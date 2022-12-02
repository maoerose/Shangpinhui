<template>
    <div id="app">
        <Header></Header>
        <Search></Search>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import Search from './components/search/Search.vue';


export default {
    name: 'App',

    components: {
        Header,
        Footer,
        Search
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font: 16px/1.5 sans-serif;
  color: #333;
  background-color: #fff;
}
li {
  list-style: none;
}
em,
i {
  font-style: normal;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #5eb69c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
