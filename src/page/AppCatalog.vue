<template>
  <div class="catalog-page">

<!--     <div style="display:flex; justify-content: space-between;">
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
    </div> -->
    <app-catalog-search></app-catalog-search>

    <app-cart-modal></app-cart-modal>
    <app-catalog-sort></app-catalog-sort>

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
  import AppCatalogItem  from '../components/catalog/AppCatalogItem.vue';
  import AppCatalogSearch  from '../components/catalog/AppCatalogSearch.vue';
  import AppCatalogSort  from '../components/catalog/AppCatalogSort.vue';
  import AppCartModal  from '../components/modals/AppCartModal.vue';
  import {computed} from 'vue';

export default {
  components: {
    AppCatalogItem,
    AppCartModal,
    AppCatalogSearch,
    AppCatalogSort,
  },

  setup() {

    const store = useCatalogStore();
    const sortedAndSearchCatalog = computed(() => store.sortedAndSearchCatalog);
    const searchProduct = computed(() => store.searchProduct);  

    return{
      store,
      sortedAndSearchCatalog,
      searchProduct
    }
  },
}

</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables.scss';
.catalog-page {


  .catalog {
    background-color: #f3f1f2;
  }
  .catalog__body {
    padding-top: 50px;
    padding-bottom: 30px;
    margin: 0 -15px;
  }
}
</style>