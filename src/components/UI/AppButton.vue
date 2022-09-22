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

<style lang="scss" scoped>
  button {
    padding: 10px 30px;
    border: 2px solid #caccde;
    border-radius: 12px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff; 
    transition: all 0.5s;
    background-color: #caccde;

    &:hover {
       background-color: #777b9f;
       border: 2px solid #777b9f;
    }

    &:active {
       opacity: 0.5;
    }
}

</style>