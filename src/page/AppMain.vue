<template>
  <section class="promo">
    <div class="promo__wrapper container container-md container-lg">
      <div class="promo__body row">
        <div class="promo__info promo__info--left col col-md-8">
          <img  class="promo__image promo__image--left" src="../static/image/appsoap.jpeg" width="480" height="400">
          <p  
            class="promo__description"
            @click="$router.push('/catalog')">
            Enjoy with our soap</p>
        </div>

        <div class="promo__info col col-md-4">
          <div>
            <img class="promo__image promo__image--right" src="../static/image/appsoap.jpeg" width="220" height="150">
            <p 
              class="promo__description"
              @click="$router.push('/catalog')">
              Enjoy with our soap
            </p>
          </div>
          <div>
            <img class="promo__image promo__image--right" src="../static/image/appsoap.jpeg" width="220" height="150">
            <p 
              class="promo__description"
              @click="$router.push('/catalog')">
              Enjoy with our soap
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="feature">
    <div class="feature__wrapper wrapper container container-md container-lg">
      <div class="feature_body row">
        <div class="feature__column col-12 col-sm-4">
          <div class="feature__item">
            <p class="feature__title">100% ORGANIC</p>
            <p class="feature__text">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>

        <div class="feature__column col-12 col-sm-4">
          <div class="feature__item ">
            <p class="feature__title">HIGH QUALITY</p>
            <p class="feature__text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>

        <div class="feature__column col-12 col-sm-4">
          <div class="feature__item ">

            <p class="feature__title"> fast delivery</p>
            <p class="feature__text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

          </div>
        </div>   
      </div>
    </div>
  </section>

  <section class="catalog">
    <div class="catalog__wrapper wrapper container container-md container-lg">
      <div class="catalog__body row">
        <h2 class="catalog__title title col-12">OUR PRODUCTIONS</h2>

      </div>
    </div>
    
  </section>
</template>

<script>

  import {useCatalogStore} from '../store/catalog';
  import {computed} from 'vue';

export default {
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
  
  .promo {
    .promo__wrapper {
      @media (max-width: $sm-width) {
        padding-left: 5%; 
        padding-right: 5%;
      }
     
      @media (min-width: $xl-width) {
        padding-left: 125px; 
        padding-right: 125px; 
      }
    }

    .promo__body {
      padding-top: 30px;
      padding-bottom: 20px;
    }

    .promo__info {
      padding: 0;
    }

    .promo__info--left {
      padding-right: 30px;
    }

    .promo__image--left {
       width: 575px;
      height: 400px;

        @media (max-width: $xl-width) { 
          width: 610px;
          height: 400px;
        }
        @media (max-width: $lg-width) { 
          width: 450px;
          height: 350px;
        }
        @media (max-width: $md-width) { 
          width: 325px;
          height: 250px;
        }
    }
    .promo__image--right {
      width: 307px;
      height: 180px;

      @media (max-width: $xl-width) { 
        width: 320px;
        height: 180px;
      }
      @media (max-width: $lg-width) { 
        width: 240px;
        height: 154px;
      }
      @media (max-width: $md-width) { 
        width: 180px;
        height: 104px;
      }
    }
    .promo__description {
      margin: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  .feature {
    background-color: #caccde;

    .feature__wrapper {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .feature_list {
      margin: 0 -15px;
    }

    .feature__column {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .feature__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;

      background-color: #fff;
    }

    .feature__title {
      text-transform: uppercase;
    }

    .feature__text {
      text-align: center;
    }
  }

  .catalog {
    .catalog__body {
      padding-top: 30px;
      padding-bottom: 30px;
      border: 1px solid green;
    }

    .catalog__title {
      margin-bottom: 20px;
    }


  }



</style>