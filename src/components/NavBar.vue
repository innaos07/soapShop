<template>
  <div>
    <div @click="$router.push('/')">Inna</div>
    <div class="nav__btns">
      <route-link @click="$router.push('/')">home</route-link>
      <route-link @click="$router.push('/catalog')">catalog</route-link>
      <route-link @click="$router.push('/payment')">payment</route-link>
      <route-link @click="$router.push('/about')">about</route-link>
    </div>

  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.nav__btns {
  display: flex;
  justify-content: space-between;
}
</style>