<template>
  <section class="product">
    <div class="product__wrapper  container container-md container-lg">
      <div class="product__body">
        <div class="product__nav">
          lalala
        </div>

        <div class="product__card card__item row">
          <div class="card__image col-12 col-lg-6">
            <img 
            :src="productItem[0]?.img"
            width="300"
            height="300"
            alt="soap"/>
          </div>
          <div class="card__info col-12 col-lg-6">
            <h3 
              class="card__title">
              {{productItem[0]?.name}}
            </h3>
            <p 
              class="card__price">
              {{productItem[0]?.price}} $
            </p>
            <p 
              class="card__description">
              {{productItem[0]?.description}}
            </p>
            <p 
              class="card__title-ingredients"
              @click="store.showIngredients()">
              Ingredients + 
            </p>
            <p 
              class="card__ingredients" 
              v-if="isShowIngredients">
              {{productItem[0]?.composition}}
            </p>

            <div class="card__btns">
              <div class="card__counter">
                  <span 
                    @click="store.decrementProduct(productItem[0]?.id)">
                    -
                  </span>
                  <span>{{productItem[0]?.quantity}}</span>
                  <span 
                    @click="store.incrementProduct(productItem[0]?.id)">
                    +
                  </span>
              </div>

              <app-button
                class="card__btn"
                @click="store.addCart(productItem[0])">
                add
              </app-button>
            </div>
          </div>         
      </div>
        
        <div class="related-products col-12">
            <h2 class="related-products__title title">Related Products</h2>

            <div class="related-products__list row">
              <app-catalog-item 
                class=""
                v-for="product in relatedProducts"
                :key="product.id"
                :product="product"
                @addProduct="store.addCart"
              /> 
            </div>
        </div> 
      </div>
    </div>
   
  </section>
</template>

<script>
  import AppCatalogItem  from '../components/AppCatalogItem.vue';
  import {useCatalogStore} from '../store/catalog';
  import { useRoute } from 'vue-router'
  import {computed} from 'vue';

export default {
  components: {
    AppCatalogItem,
  },

  setup() {
    const route = useRoute()
    const store = useCatalogStore();

    console.log(route.params.id)

    const productItem = computed(() => store.productItem(route.params.id)); 
    // const cart = computed(() => store.cart);
    const isShowIngredients = computed(() => store.isShowIngredients);
    const relatedProducts = computed(() => store.relatedProducts(route.params.id));

    console.log(relatedProducts)
    return {
      store, 
      productItem,
      isShowIngredients,
      relatedProducts
    
    }
  }
 
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables.scss';

  .product {
    background-color: #f2f5f2; 
   
    font-size: 16px;
    line-height: 24px;

    .product__body {
      padding-top: 30px 0;
         
    }

    .product__nav {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .product__card {
      margin-bottom: 30px;
    }

    .card__item {
      padding: 30px 30px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
      background-color: #ffffff; 

      .card__image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        height: 450px;

        @media (min-width: $xxl-width) { 
           height: 500px;    
        }

        @media (max-width: $lg-width) {
          margin-bottom: 20px;
        }
      }

      .card__image img {
        width: 540px;
        height: 450px;

        @media (min-width: $xxl-width) { 
           width: 630px; 
           height: 500px;    
        }

         @media (max-width: $xl-width) { 
           width: 449px; 
        }

        @media (max-width: $lg-width) { 
           width: 658px; 
        }

        @media (max-width: $md-width) { 
           width: 478px;  
        }

        @media (max-width: $sm-width) { 
           max-width: 501px;
           width: 100%;
        }

      }

      .card__info {
        display: flex;
        flex-direction: column;
        padding: 0;
        padding-left: 30px;

        @media (max-width: $lg-width) {
          padding-left: 0;
        }
      }

      .card__title {
        margin-bottom: 20px;
      }

      .card__description {
        margin-bottom: 20px;
      }

      .card__price {
        margin-bottom: 10px;
      }

      .card__title-ingredients {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 20px;
        cursor: pointer;
      }

      .card__btns {
        margin-top: auto;
      }

      .card__counter {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        height: 40px;
        width: 80px;
        border: 1px solid #e5e5e5;
        border-radius: 12px;  
      }

      .card__btn {
        width: 100%;
       
      }
    }

    .related-products {

      // background-color: #fff;
      // // padding: 30px 30px;
      // border-radius: 12px;
      // border: 1px solid #e5e5e5;

      .related-products__title {
        margin-bottom: 30px;
      }

      .related-products__list {
        @media (min-width: $xxl-width) { 
          justify-content:center;
        }
      }
    }




    

    // .card__composition {
    //   margin-top: 30px;
    //   padding-top: 30px;
    //   border-top: 1px solid #e5e5e5;
    // }
  }
</style>
















