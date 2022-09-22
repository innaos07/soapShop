<template>
  <div class="catalog">

    <div style="display:flex; justify-content: space-between;">
      <h1>catalog</h1>
      <app-button @click="store.showBasketModal"> open</app-button>
    </div>
    <input :value="searchProduct" @input="store.updateSearchInput"/>
    <div class="catalog__filter">
      <div 
        @click="store.changeStatusFilter('ALL')">
        ALL
      </div>
      <div 
        @click="store.changeStatusFilter('handmade')">
        Handmade soap
      </div>
      <div 
        @click="store.changeStatusFilter('baby')">
        Baby soap
      </div>
      <div 
        @click="store.changeStatusFilter('box')">
        Box
      </div>
    </div>
    <app-modal
      :show="isDialogVisible"
      @close="store.showBasketModal">
        <app-cart 
          v-if="cart.length"
          :cart_data="cart"/>
        <div  v-else>basket is empty... </div>
    </app-modal>

     
    <section class="catalog">
      <div class="catalog__wrapper container container-md container-lg">
        <div class="catalog__body row">
          <app-catalog-item 
              class=""
              v-for="product in sortedAndSearchCatalog"
              :key="product.id"
              :product="product"
              @addProduct="store.addCart"
          />   
      </div>

      </div>
      
    </section>
  </div>
</template>

<script>
  import {useCatalogStore} from '../store/catalog';
  import AppCatalogItem  from './AppCatalogItem.vue';
  import AppCart  from './AppCart.vue';
  import {computed} from 'vue';


export default {
  components: {
    AppCatalogItem,
    AppCart,
  },
  data() {
    return {
    }
  },
  methods: {
 
  },
  setup() {

    const store = useCatalogStore();
    // const products = computed(() => store.products);
    const isDialogVisible = computed(() => store.isDialogVisible);
    const cart = computed(() => store.cart);
    const sortedAndSearchCatalog = computed(() => store.sortedAndSearchCatalog);
    const searchProduct = computed(() => store.searchProduct);  

    return{
      store,
      // products,
      isDialogVisible,
      cart,
      sortedAndSearchCatalog,
      searchProduct
    }
  },
  mounted() {
    // this.store.fetchUsers()
  }
 
}
</script>

<style lang="scss" scoped>
.catalog {

  .catalog__filter {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
  }

  .catalog__body {
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 -15px;
  }
}
</style>