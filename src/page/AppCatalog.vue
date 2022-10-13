<template>
  <div class="catalog-page">
    <app-catalog-search></app-catalog-search>
    <app-cart-modal></app-cart-modal>
    <app-catalog-sort></app-catalog-sort>
    <app-catalog-filter></app-catalog-filter>

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
  import { useCatalogStore } from '../store/catalog';
  import { useFilterStore } from '../store/filter';
  import AppCatalogItem  from '../components/catalog/AppCatalogItem.vue';
  import AppCatalogSearch  from '../components/catalog/AppCatalogSearch.vue';
  import AppCatalogSort  from '../components/catalog/AppCatalogSort.vue';
  import AppCatalogFilter  from '../components/catalog/AppCatalogFilter.vue';
  import AppCartModal  from '../components/modals/AppCartModal.vue';
  import { computed } from 'vue';

export default {
  components: {
    AppCatalogItem,
    AppCartModal,
    AppCatalogSearch,
    AppCatalogSort,
    AppCatalogFilter
  },

  setup() {

    const store = useCatalogStore();
    const filterStore = useFilterStore();
    const sortedAndSearchCatalog = computed(() => filterStore.sortedAndSearchCatalog);
    const searchProduct = computed(() => store.searchProduct);  
    const filteredList = computed(() => filterStore.filteredList);  
    console.log('filtername',filteredList)


    return{
      store,
      sortedAndSearchCatalog,
      searchProduct,
      filteredList
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