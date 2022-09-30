<template>
  <app-cart-modal></app-cart-modal>
  <app-promo> </app-promo>
  <app-features></app-features>
  <app-best-products></app-best-products>


</template>

<script>
  import AppPromo from '../components/main/AppPromo.vue';
  import AppFeatures from '../components/main/AppFeatures.vue';
  import AppBestProducts from '../components/main/AppBestProducts.vue';
  import AppCartModal  from '../components/modals/AppCartModal.vue';

  import {useCatalogStore} from '../store/catalog';
  // import {computed} from 'vue';

export default {
  components: {
    AppPromo, 
    AppFeatures,
    AppBestProducts,
    AppCartModal
  },
  setup() {

    const store = useCatalogStore();


    return{
      store,
    
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