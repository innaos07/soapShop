<template>
  <div class="cart d-flex flex-column"> 
      <!-- <h2>col:{{store.cart.length}}</h2> -->
      <app-cart-item 
        v-for="(item, index) in cart_data"
        :cart_item="item"
        :key="item.id"
        @deleteFromCard="store.deleteFromCard(index)"
        @increment = "store.increment(item.id)"
        @decrement = "store.decrement(item.id)"
      />
      <div class="cart__total">Total:  {{totalCost}} </div>
      <app-button 
        @click="$router.push('/payment')">
        payment
      </app-button>
  </div>
</template>

<script>
  import {useCatalogStore} from '../../store/catalog';
  import AppCartItem from './AppCartItem.vue';
  import {computed} from 'vue';


export default {
  components: {
    AppCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    }
  },
  setup(){
    const store = useCatalogStore();
    const totalCost = computed(() => store.totalCost);
    console.log(totalCost)

    return {
      store,
      totalCost
    }
  }
 
}
</script>

<style  lang="scss" scoped>
  @import '../../assets/styles/variables.scss';
 .cart {

  .cart__total {
    margin: 10px 0;
    font-size: 18px;
    line-height: 30px;
    // font-weight: 600;
  }
  
}
 

</style>