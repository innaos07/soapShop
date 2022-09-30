<template>
  <div >
    <div class="cart__item d-flex align-items-center">
      <img 
            class="item__image"
            :src="cart_item.img"
            width="30"
            height="30"
            alt="soap"/>

      <div class="item__info">
        <p class="item__name">{{cart_item.name}}</p>

        <div class="d-flex align-items-center">
          <p class="item__price">{{cart_item.price}} $</p>

          <div class="item__counter">
            <span 
              @click="$emit('decrement',cart_item.id)">
              -
            </span>
            <span>{{cart_item.quantity}}</span>
            <span @click="$emit ('increment', cart_item.id)">+</span>
          </div>

          <span 
            class="item__btn-delete material-icons delete_outline"
            @click="$emit('deleteFromCard', index)">
            delete_outline
          </span> 
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    cart_item: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  setup() {

  }
}
</script>

<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.cart__item {
  width: 600px;
  padding: 10px 0;
  border-bottom:  1px solid #e5e5e5;
  
  font-size: 18px;
  line-height: 26px;

  @media (max-width: $md-width) { 
    width: 500px;
  }

  @media (max-width: $sm-width) { 
    width: 300px;
  }

    .item__image {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      border-radius: 6px;

      @media (max-width: $md-width) { 
        width: 70px;
        height: 80px;
      }
    }

    .item__info {
      display: flex;
      flex: 1;
      align-items: center;
      flex-wrap: wrap;

      @media (max-width: $md-width) { 
        align-items: flex-start;
        flex-direction: column;
      }
    }

    .item__name {
      flex: 1;
      margin: 0;
      margin-right: 20px;

      @media (max-width: $md-width) { 
        margin-bottom: 10px;
      }
    }

    .item__price {
      margin: 0;
      margin-right: 20px;
    }

   .item__counter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    width: 80px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    margin-right: 20px;
  }

  .item__btn-delete {
    font-size: 30px;
    color: #878c95;
  }
}
 

</style>