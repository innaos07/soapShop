<template>
  <div class="catalog-search">
    <div class="catalog-search__wrapper container">
      <div class="search">
        <input 
          class="search__input"
          placeholder="Search..." 
          :value="searchProduct" 
          @input="store.updateSearchInput"
        />
      </div>
   </div>
  </div>
</template>

<script>
  import {useCatalogStore} from '../../store/catalog';
  import {computed} from 'vue';

export default {
  setup() {

    const store = useCatalogStore();
    const searchProduct = computed(() => store.searchProduct);  

    return{
      store,
      searchProduct
    }
  },
 
}
</script>

<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.catalog-search {
  background-color: #4b4e6c;
  background-image: url('../../assets/image/catalog-promo.jpeg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  opacity: 0.9;

  .catalog-search__wrapper {
    display: flex;
    justify-content: center;
    padding: 250px 0;

    @media (max-width: $lg-width) { 
      padding: 150px 0;
    }

    @media (max-width: $sm-width) { 
      padding: 80px 0;
    }
  }

  .search {
    width: 800px;

    @media (max-width: $lg-width) {
      width: 600px;
    }
    
    @media (max-width: $sm-width) { 
      padding: 0 30px;
      width: 100%;
    }

    .search__input {
      padding: 10px 15px;
      padding-right: 50px;
      width: 100%;
      outline: none;
      border-radius: 12px;
      border: 1px solid #e5e5e5;

      &:hover,
      &:focus {
        border-color: #919191;
      }
    }

    .search__icon {
      position: absolute;
      top: 10px;
      right: 25px;
      font-size: 30px;
      color: #919191;
    }
  }
}

</style>