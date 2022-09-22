<template>
  <section class="product">
    <div class="product__wrapper wrapper container container-md container-lg">
      <div class="product__body">
        <div class="product__nav">
          lalala
        </div>

        <div class="product__cart cart row">
          <div class="cart__image col-12 col-lg-6">
            <img 
            :src="productItem[0]?.img"
            width="300"
            height="300"
            alt="soap"/>
          </div>
          <div class="cart__wrapper col-12 col-lg-6">
            <h3 class="cart__title">{{productItem[0]?.name}}</h3>
            <p class="cart__price">{{productItem[0]?.price}} $</p>
            <p class="cart__description">{{productItem[0]?.description}}</p>
            <div class="cart__counter">
                <span 
                  @click="$emit('decrement')">
                  -
                </span>
                <span>1</span>
                <span @click="store.increment(index)">+</span>
            </div>

            <div class="cart__bottom">
               <app-button
                class="cart__btn"
                @click="store.addCart(productItem[0])">
                add
              </app-button>
            </div>
           
          </div>
          
        </div>
        
      </div>
    </div>
   
  </section>
</template>

<script>
  import {useCatalogStore} from '../store/catalog';
  // import { ref } from 'vue';
  import { useRoute } from 'vue-router'
  import {computed} from 'vue';

export default {

  setup() {
    const route = useRoute()
    const store = useCatalogStore();

    console.log(route.params.id)

    const productItem = computed(() => store.productItem(route.params.id)); 

    return {
      store, 
      productItem
    
    }
  }
 
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables.scss';

  .product {
    background-color: #f2f5f2; 

    .product__body {
      padding-top: 30px 0;
         
    }

    .product__nav {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .cart {
      padding: 30px 30px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
      background-color: #ffffff; 
    }

    .cart__image {
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

    .cart__image img {
      width: 400px;
      height: 450px;

      @media (min-width: $xxl-width) { 
         width: 500px; 
         height: 500px;    
      }

      @media (max-width: $lg-width) { 
         width: 583px; 
      }

      @media (max-width: $md-width) { 
         width: 430px;  
      }

      @media (max-width: $sm-width) { 
         max-width: 430px;
         width: 100%;
      }

    }

    .cart__wrapper {
      display: flex;
      flex-direction: column;
      padding: 0;
      padding-left: 30px;

      @media (max-width: $lg-width) {
        padding-left: 0;
      }
    }

    .cart__title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
    }

    .cart__description {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    .cart__price {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 10px;
      
    }

    .cart__bottom {
      margin-top: auto;
    }

    .cart__counter {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      height: 40px;
      width: 80px;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
    }

    .cart__btn {
      width: 100%;
    }
  }
</style>
















