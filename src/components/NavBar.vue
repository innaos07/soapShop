<template>
  <div>
    <div class="header__body row">
      <div  
        class="col col-md-4" 
        @click="$router.push('/')">
        SOA
      </div>
      <nav class="col col-md-8 nav__list">
        <route-link class="nav__item" @click="$router.push('/')">home</route-link>
        <route-link class="nav__item" @click="$router.push('/catalog')">catalog</route-link>
        <route-link class="nav__item" @click="$router.push('/payment')">payment</route-link>
        <route-link class="nav__item" @click="$router.push('/about')">about</route-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
.header__body {
  align-items: center;
}
.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__item {
  padding: 30px 0;
  margin-left: 40px;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.5s;


  &:hover {
    color: #e5e5e5;

  }
}
</style>