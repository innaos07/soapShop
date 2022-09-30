<template>
  
  <app-promo> </app-promo>
  <app-features></app-features>
  <app-best-products></app-best-products>

<!--   <section class="popular-products">
    <div class="popular-products__wrapper wrapper container container-md container-lg">
      <div class="popular-products__body row">
        <h2 class="popular-products__title title col-12">OUR PRODUCTIONS</h2>

      </div>
    </div>
    
  </section> -->
</template>

<script>
  import AppPromo from '../components/main/AppPromo.vue';
  import AppFeatures from '../components/main/AppFeatures.vue';
  import AppBestProducts from '../components/main/AppBestProducts.vue';


  import {useCatalogStore} from '../store/catalog';
  import {computed} from 'vue';

export default {
  components: {
    AppPromo, 
    AppFeatures,
    AppBestProducts

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
}
</script>

<style  lang="scss" scoped>
  @import '../assets/styles/variables.scss';

  
  

  

  .popular-products {
    .popular-products__body {
      padding-top: 30px;
      padding-bottom: 30px;
      border: 1px solid green;
    }

    .popular-products__title {
      margin-bottom: 20px;
    }


  }



</style>