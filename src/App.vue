<template>
  <div>
    <header class="header">
      <div class="header_container container-fluid container-md">
        <nav-bar></nav-bar>
      </div>
    </header>

    <main>
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
  .header {
    background-color: #caccde;
  }

</style>
