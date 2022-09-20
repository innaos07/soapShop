<template>
  <section class="promo">
    <div class="promo__wrapper wrapper container container-md container-lg">
      <div class="promo__body row">
        <div class="promo__info col col-sm-8">
          <img  class="promo__image" src="../static/image/appsoap.jpeg" width="480" height="400">
          <p>Enjoy with our soap</p>
        <!--   <h1 class="promo__title title">Enjoy with our soap</h1>
          <p class="promo__description">Infused with nature and made for all. Our products are all handmade with 100%. </p>
          <app-button
            @click="$router.push('/catalog')">
            catalog
          </app-button> -->

        </div>
        <div class="promo__info col-4">
          <div>
            <img class="promo__image" src="../static/image/appsoap.jpeg" width="220" height="150">
            <p>Enjoy with our soap</p>
          </div>
          <div>
            <img class="promo__image" src="../static/image/appsoap.jpeg" width="220" height="150">
            <p>Enjoy with our soap</p>
          </div>
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
 
}
</script>

<style  lang="scss" scoped>
  .promo {
    // background-color: #caccde;
    // background-image: url('../static/image/appsoap.jpeg');
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;

  }
  // .promo__wrapper { 
  //   min-height: 500px;
  // }
  .promo__body {
    padding-top: 30px;
    padding-bottom: 50px;
   
  }
  .promo__info {
    padding: 0;
  }
  // .promo__title{
  //   margin: 0;
  //   margin-bottom: 20px;
  // }
  // .promo__description {
  //   color: #000;
  //   font-size: 18px;
  //   font-weight: 600;
  //   text-align: center;
  //   margin-bottom: 20px;
  // }
  // .title {
  //   text-align: center;
  //   color: #000;
  //   font-size: 50px;
  //   font-weight: 600;
  // }

</style>