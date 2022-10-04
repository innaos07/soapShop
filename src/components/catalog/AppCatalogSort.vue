<template>
  <div class="catalog-sort">
    <div class="catalog-sort__wrap container">
      <div class="catalog-sort__list row">
        <div  class="catalog-sort__item col-12 col-sm-3"
          v-for="item in sortedList"
          :key="item.name"
          @click="store.changeStatusFilter(item.status)">
          {{item.name}}
        </div> 
      </div>
    </div> 
  </div>
</template>

<script>
  import {useCatalogStore} from '../../store/catalog';

export default {
 setup() {
  
   const sortedList = [
      {
        name:'ALL',
        status: 'ALL',
      },

      {
        name:'Handmade soap',
        status: 'handmade',
      },

      {
        name:' Baby soap',
        status: 'baby',
      },

      {
        name:'Box',
        status: 'box',
      },
    ];

    const store = useCatalogStore();

    return {
      store,
      sortedList,
    }
  }
}
</script>

<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.catalog-sort {
  padding: 30px 0;

  .catalog-sort__item {
    display: flex;
    justify-content: center;
    font-size: 20px;
    line-height: 30px;
    color: #6e7081;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: #4b4e6c;
    }

    &:active {
      opacity: 0.5;
    }

    @media (max-width: $sm-width) { 
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>