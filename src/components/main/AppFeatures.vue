<template>
<section class="feature">
    <div class="feature__wrapper container container-md container-lg">

      <div class="feature_body row d-flex justify-content-center">
        <div 
          class="feature__column col-12 col-md-4"
          v-for="item in featuresList"
          :key="item.title">
          <div class="feature__item">
            <span class="feature__icon material-icons">{{item.icon}}</span>
            <p class="feature__title">{{item.title}}</p>
            <p class="feature__text">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
 setup() {
  
   const featuresList = [
      {
        title: '100% ORGANIC',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        icon: 'eco',
      },

      {
        title: 'HIGH QUALITY',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        icon: 'star',
      },

      {
        title: 'fast delivery',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        icon: 'local_shipping',
      }
    ]

    return {
      featuresList
    }

 }
}
</script>


<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';
  .feature {
  background-color: #caccde;

    .feature__wrapper {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .feature__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 350px;


      @media (max-width: $md-width) {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

      }
    }

    .feature__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;

      background-color: #fff;
    }

    .feature__icon {
      font-size: 30px;
      color: #9b8d8f;
      margin-bottom: 20px;
    }

    .feature__title {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
    }

    .feature__text {
      text-align: center;
      font-size: 16px;
      line-height: 24px;
    }
}
</style>