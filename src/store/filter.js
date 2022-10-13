import { defineStore } from 'pinia';  
import {useCatalogStore} from './catalog';



export const useFilterStore = defineStore('filter', {
    
    state: () => {
       return {
           checkedScentName: [],
           checkedScentCategory: [],
           statusFilter: 'ALL',
           searchProduct: '',
           isShowFilterCategory: false,
           isShowFilterName: false,
       }
    },
    getters: {
        filteredList(state) {
            const catalog = useCatalogStore();
                 return catalog.products.filter(item => {
                    if (state.checkedScentName.length && state.checkedScentCategory.length) {
                        return state.checkedScentName.includes(item.scentName) && state.checkedScentCategory.includes(item.scentCategory);
                    } else if (state.checkedScentName.length) {
                        return state.checkedScentName.includes(item.scentName);
                    } else if (state.checkedScentCategory.length) {
                       return state.checkedScentCategory.includes(item.scentCategory);
                    } else {
                        return true;
                    }
            })
        },
        sortedAndSearchCatalog(state) {
            if(state.statusFilter.toLowerCase() === 'all' && !state.searchProduct.trim()) {
                return this.filteredList;
            } else if(state.searchProduct.trim() && state.statusFilter.toLowerCase() === 'all') {
                return this.filteredList.filter(product => {
                    return  product.name.toLowerCase().includes(state.searchProduct.toLowerCase())
                 }); 
                
            } else if(state.statusFilter.toLowerCase() !== 'all'){
                let sortedList =  this.filteredList.filter(product => {
                    return product.tags.toLowerCase().includes(state.statusFilter.toLowerCase());
                }); 

                    if(state.searchProduct.trim()) {
                        return sortedList.filter(product => {
                            return  product.name.toLowerCase().includes(state.searchProduct.toLowerCase());
                     }); 
                }
                return sortedList;
            }
        },
        tagsList(state) {
            let tagsList;
            if(state.checkedScentName.length && state.checkedScentCategory.length) {
                tagsList = [
                ...state.checkedScentName.map(i => ({value: i, type: 'name'})),
                ...state.checkedScentCategory.map(i => ({value: i, type: 'category'}))
                ];
            }
            else if(state.checkedScentName.length) {

                tagsList = [...state.checkedScentName.map(i => ({value: i, type: 'name'}))];
            }
            else if (state.checkedScentCategory.length) {
                tagsList = [...state.checkedScentCategory.map(i => ({value: i, type: 'category'}))];
            } 

            return tagsList;
        }
    },
    actions: {
        changeStatusFilter(filter) {
            console.log(filter)
            this.statusFilter = filter;
        },
        updateSearchInput(event) {
            this.searchProduct = event.target.value;
        },
        deleteTag(type, value) {
            if(type == 'name') {
                this.checkedScentName = this.checkedScentName.filter(i=> i !== value);
            } else if(type == 'category') {
                this.checkedScentCategory = this.checkedScentCategory.filter(i=> i !== value);
            }
        },
        showFilterCategory() {
            this.isShowFilterCategory = !this.isShowFilterCategory;
            this.isShowFilterName = false;

        },
        showFilterName() {
            this.isShowFilterName = !this.isShowFilterName;
            this.isShowFilterCategory = false;
        },
        updateFilterName(value) {
            this.checkedScentName = value;
        },
         updateFilterCategory(value) {
            this.checkedScentCategory = value;
        },
    },
})