<template>
  <div class="catalog__item">
      <img 
        :src="product.img"
        class="item__image"/>
      <div>{{product.name}}</div>
      <div>{{product.price}}</div>
      <app-button
        @click="$emit('addProduct', product)"
      >
        add
      </app-button>
   <!--    <div>
      <input 
        :value=""
      />
      </div> -->

  </div>
</template>

<script>
  

export default {
 props: {
    product: {
        type: Object,
        required: true,
    }
 }


 
}
</script>

<style scoped>
  .catalog__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 0 15px;
    margin-bottom: 30px;
    border: 1px solid #e5e5e5;
  }
  .item__image {
    width: 200px;
    height: 200px;
  }

</style>