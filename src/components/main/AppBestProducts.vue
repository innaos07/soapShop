<template>
  <section class="best-products">
    <div class="best-products__wrapper container container-md container-lg">
      <div class="best-products__body d-flex flex-column align-items-center">
        <span 
            class="best-products__btn"
            @click="$router.push('/catalog')"
        >
        ALL PRODUCTS
        </span>

        <h2 class="best-products__title title ">OUR PRODUCTIONS</h2>
        <p class="best-products__descriptions">quia et suscipit\nsuscipit recusandae  consequuntur <br class="d-none d-lg-block"> expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum</p>
        <div class="best-products__list row">
          <app-catalog-item 
                class=""
                v-for="product in bestProducts"
                :key="product.id"
                :product="product"
                @addProduct="store.addCart"
          /> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppCatalogItem  from '../../components/AppCatalogItem.vue';

  import {useCatalogStore} from '../../store/catalog';
  import {computed} from 'vue';

export default {
  components: {
    AppCatalogItem,
  },
  setup() {

    const store = useCatalogStore();
    const bestProducts = computed(() => store.bestProducts);    

    return {
      store,
      bestProducts
    }
  },
 
}
</script>

<style  lang="scss" scoped>
  @import '../../assets/styles/variables.scss';

  .best-products {

    .best-products__body {
      padding-top: 30px;
      padding-bottom: 10px;
    }

    .best-products__btn {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 20px;
      margin-left: auto;
      color: #4f537d;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        color: #3b3e5e;
        font-weight: 500;
      }
    }

    .best-products__title {
      font-size: 35px;
      line-height: 50px;
      font-weight: 400;
      margin-bottom: 20px;

      @media (max-width: $lg-width) { 
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 30px;
      }
    }

    .best-products__descriptions {
      text-align: center;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 50px;
    }
}

</style>