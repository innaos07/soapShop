<template>
  <app-modal
      :show="isDialogVisible"
      @close="store.showBasketModal">
        <app-cart 
          v-if="cart.length"
          :cart_data="cart"/>
        <div  v-else>basket is empty... </div>
    </app-modal>
</template>

<script>

  import {useCatalogStore} from '../../store/catalog';
  
  import AppCart  from '../cart/AppCart.vue';
  import {computed} from 'vue';
export default {

  components: {
    AppCart,
  },
  setup() {

    const store = useCatalogStore();
    
    const isDialogVisible = computed(() => store.isDialogVisible);
    const cart = computed(() => store.cart); 

    return{
      store,
      isDialogVisible,
      cart,
    }
  },
 
}
</script>

<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';

</style>
