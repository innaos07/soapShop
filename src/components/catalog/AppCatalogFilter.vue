<template>
  <section  class="catalog-filter">
    <div class="catalog-filter__wrapp container">
      <div class="row">

        <div class="catalog-filter__body d-flex col-12">
          <div 
            class="filter d-flex align-items-center"
            @click="filterStore.showFilterCategory"
            :class="[isShowFilterCategory ? 'filter--active' : '']">
            <span class="filter__name">Categoty</span>
            <span 
              class="filter__icon material-icons"
              v-if="isShowFilterCategory">
              expand_less
            </span>
            <span 
              v-else 
              class="filter__icon material-icons">
              expand_more
            </span>
             <div 
              class="filter__form"
              v-if="isShowFilterCategory"
              @click.stop>
              <div 
                class="filter__item d-flex align-items-center"
                v-for="item in categoryList"
                :key="item.name">
                  <input 
                    class="visually-hidden" 
                    v-model="checkedScentCategory"
                    type="checkbox" 
                    :id="item.name" 
                    :value="item.name"/>
                  <label :for="item.name">{{item.name}}</label>
              </div>
              <span>{{checkedScentCategory}}</span>
            </div>
          </div>
         <div 
          class="filter d-flex align-items-center"
          @click="filterStore.showFilterName"
          :class="[isShowFilterName ? 'filter--active' : '']">
            <span class="filter__name"> Scent Name</span>
            <span 
              class="filter__icon material-icons"
              v-if="isShowFilterName">
              expand_less
            </span>
            <span 
              v-else 
              class="filter__icon material-icons">
              expand_more
            </span>

             <div 
              class="filter__form"
              v-if="isShowFilterName"
              @click.stop>
              <div 
                class="filter__item d-flex align-items-center"
                v-for="item in nameList"
                :key="item.name">
                  <input 
                    class="visually-hidden" 
                    type="checkbox" 
                    v-model="checkedScentName"
                    :id="item.name" 
                    :value="item.name"/>
                  <label :for="item.name">{{item.name}}</label> 
              </div>
              <span>{{checkedScentName}}</span>
            </div>
          </div>
        </div>
        <div class="tags-list col-12 d-flex flex-wrap">
          <div 
            class="tag d-flex align-items-center " 
            v-for="tag in tagsList"
            :key="tag.value"
            @click="filterStore.deleteTag(tag.type ,tag.value)"
            > 
            <span>{{tag.value}}</span>
            <span 
              class="tag-icon material-icons close">
              close
            </span>
            
          </div>

          
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import { useFilterStore } from '../../store/filter';
import {computed} from 'vue';
// import {ref} from 'vue';


export default {
  setup() {
   const categoryList = [
      {
        name: 'Fruity',

      },
      {
        name: 'Floral',
        
      },
      {
        name: 'Sweet',
        
      },
      {
        name: 'Clean',
        
      }
    ];

    const nameList = [
      {
        name: 'Cherry Almond',
      },

      {
        name: 'Commando', 
      },

      {
        name: 'Fresh Cotton', 
      },

      {
        name: 'Magnolia',
      }
    ]; 

    const filterStore = useFilterStore();
    const isShowFilterCategory = computed(() => filterStore.isShowFilterCategory);  
    const isShowFilterName = computed(() => filterStore.isShowFilterName);  
    const checkedScentName = computed({
      get() {
        return filterStore.checkedScentName
      },
      set(value) {
        return filterStore.updateFilterName(value)
      }
    });  
    const checkedScentCategory = computed({
      get() {
        return filterStore.checkedScentCategory
      },
      set(value) {
        return filterStore.updateFilterCategory(value)
      }
    }); 
    const tagsList = computed(() => filterStore.tagsList);
    console.log(tagsList)



    return {
      filterStore,
      isShowFilterCategory,
      isShowFilterName,
      categoryList,
      nameList,
      checkedScentName,
      checkedScentCategory,
      tagsList
    }
    
  }


 
}
</script>

<style lang="scss">
@import '../../assets/styles/variables.scss';

.catalog-filter {
  .catalog-filter__wrapp {
    padding: 0 0 30px 0;
   }

   .catalog-filter__body {
     width: 700px;
   }

  .filter {
    position: relative;
    margin-right: 20px;
    padding: 5px 10px;
    border: 2px solid #e5e5e5;
    transition: all 0.3s;

    .filter__name {
      font-size: 16px;
      line-height: 20px;
      color: #6e7081;
    }

    .filter__icon {
      margin-left: 5px;
      font-size: 25px;
      color: #6e7081;
    }
  }

  .filter--active {
    border: 2px solid #a5a6ae;
  }

  .filter__form {
    position: absolute;
    top: 50px;
    left: 0;
    padding: 20px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    z-index: 2000;
    box-shadow:0 0 5px 0px rgba(199, 199, 199, 0.5);

    .filter__item {
      position:relative;
      padding-left: 35px;
      padding-bottom: 10px;
    }

    .filter__item input[type="checkbox"] ~ label {
      &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 0;
        width: 20px;
        height: 20px;
        border: 1px solid #a5a6ae;
        transition: all 0.5s;
      }
    } 

    .filter__item input[type="checkbox"]:not(:disabled):not(:checked):hover ~ label::before,
    .filter__item input[type="checkbox"]:not(:disabled):not(:checked):focus ~ label::before,{
      border-color: #6e7081;
    }

    .filter__item input[type="checkbox"]:checked ~ label::before {

      border: 2px solid green;
      box-shadow:0 0 5px 0px rgba(199, 199, 199, 0.5);
    } 
  }

  .tags-list {
    padding-top: 20px;
    padding-bottom: 10px;
    width: 700px;

    .tag {
      margin-right: 20px;
      margin-bottom: 10px;
      padding: 5px 10px;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      font-size: 14px;
      line-height: 20px;
      color: #6e7081;

      &:last-child {
        margin-right: 0;
      }
    }

    .tag-icon {
      margin-left: 10px;
      font-size: 20px;
      color:  #a5a6ae;
      cursor: pointer;

      &:hover {
        color: #6e7081;
      }
    }
  }
}


</style>