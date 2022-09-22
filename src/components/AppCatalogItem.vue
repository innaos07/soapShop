<template>
  <div class="catalog__column col-12 col-md-6 col-lg-4 col-xxl-3">
      <div class="catalog__card card">
        <div 
          class="card__image"
          @click="$router.push(`/catalog/${product.id}`)">
          <img 
            :src="product.img"
            width="300"
            height="300"
            alt="soap"/>
        </div>
        <div class="card__wrapper">
          <h3 
            class="card__title"
            @click="$router.push(`/catalog/${product.id}`)">
            {{product.name}}
          </h3>
          <div class="cart__price">{{product.price}} $</div>
          <app-button
            class="cart__btn"
            @click="$emit('addProduct', product)"
          >
          add
          </app-button>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  props: {
    product: {
        type: Object,
        required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables.scss';

  .catalog__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;

  .card {
    display: flex; 
    align-items: center;
    flex-direction: column;
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e5e5;
  }

  .card__image {
    display: flex;
    justify-content: center;
    height: 300px;
  }

  .card__image img {
    width: 350px;
    height: 300px;

      @media (min-width: $xxl-width) { 
         width: 300px;  
      }

      @media (max-width: $xl-width) { 
         width: 300px;  
      }

      @media (max-width: $lg-width) { 
         width: 330px;  
      }

      @media (max-width: $md-width) { 
         width: 320px;
      }
  }

  .card__wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 20px 20px;
  }

  .card__title {
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .cart__price {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .cart__btn {
    margin-top: auto;
  }
} 
</style>