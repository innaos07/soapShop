<template>
  <div >
    <div class="cart__item">
      <p>{{cart_item.name}}</p>
      <p>{{cart_item.price}}</p>
      <div class="card__counter">
        <span 
          @click="$emit('decrement',cart_item.id)">
          -
        </span>
        <span>{{cart_item.quantity}}</span>
        <span @click="$emit ('increment', cart_item.id)">+</span>
      </div>
      <app-button   
        @click="$emit('deleteFromCard', index)">
        delete
      </app-button>
    </div>

    
  </div>
</template>

<script>

export default {
  props: {
    cart_item: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  setup() {

  }
}
</script>

<style scoped>
  .cart__item {
    display: flex;
    justify-content: space-between;
    border-bottom:  1px solid #e5e5e5;
    margin-bottom: 20px;
  }
  .card__counter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    width: 80px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
  }

</style>