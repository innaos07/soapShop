<template>
    <button>
        <slot></slot>
    </button>
   
</template>

<script>
    export default {
        name: 'app-button'
    }
</script>

<style scoped>
  button {
    padding: 10px 30px;
    border: 2px solid #e54564;
    border-radius: 12px;
    background-color: #fff;
    margin-bottom: 20px;
    text-align: center;
    transition: all 0.5s;
}
button:hover {
   background-color: #e54564;
   color: #fff; 
}
</style>