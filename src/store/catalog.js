import { defineStore } from 'pinia';
// import axios from 'axios';
import products from '../static/data';


export const useCatalogStore = defineStore('catalog', {
    state: () => {
       return {
            products: products,
            // users: [],
            isLoading: false,
            isDialogVisible: false,
            cart: [],
            statusFilter: 'ALL',
            searchProduct: '',
            isShowIngredients: false,
            isShowSortList: false,
       }
    },
    getters: {
        totalCost(state) {
            if(state.cart.length){
                return state.cart.reduce((ac, next)=> ac+ next.price * next.quantity, 0)                    
            } else {
                return 0
            }
        },
        sortedAndSearchCatalog(state) {
            console.log('status',state.statusFilter, state.searchProduct)

            if(state.statusFilter.toLowerCase() === 'all' && !state.searchProduct.trim()) {
                return state.products
            } else if(state.searchProduct.trim()) {

                return state.products.filter(product => product.name.toLowerCase().includes(state.searchProduct.toLowerCase()));

            }
            else {
                return state.products.filter(product => product.tags.toLowerCase().includes(state.statusFilter.toLowerCase()));
            }
        },
        productItem(state) {
           return (productId) => state.products.filter(product => product.id == productId)
        },

        relatedProducts(state) {
            return (productId) => {
                let tags;
                    state.products.filter ((item) => {
                        if(item.id === productId) {
                            tags = item.tags;
                            console.log(tags)
                    }    
                })
                console.log('tags', tags)
                return state.products.filter((product) => product.tags === tags).slice(0,3)
                
            
            }
        },

        bestProducts(state) {
            console.log()
            return state.products.filter( item=> item.rating === 5)

        }

    },
    actions: {
        // async fetchUsers() {
        //     try {
        //         this.loading = true;
        //         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        //         this.users = response.data;
        //     } catch(e){
        //         console.log(e)
        //     } finally {
        //         this.loading = false;
        // }
        
        showBasketModal() {
            this.isDialogVisible = !this.isDialogVisible;
        },
        addCart(product) {
            if(this.cart.length){
                let itemFound = this.cart.find((item)=> item.id===product.id)
                itemFound ? itemFound.quantity +=1 :  this.cart.push(product)
            } else {
                this.cart.push(product)
            }
            this.isDialogVisible = true;
        },


        deleteFromCard(index) {
            console.log(index)
            this.cart.splice(index, 1)
        },
        increment(id) {
            this.cart.map((item) => {
                if(item.id == id) {
                    item.quantity +=1
                }
            })
        },
        decrement(id) {
              this.cart.map((item) => {
                if(item.id == id) {
                    item.quantity > 1 ? item.quantity -=1 : null;
                }
            })
        },
        changeStatusFilter(filter) {
            console.log(filter)
            this.statusFilter = filter;
        },
        updateSearchInput(event) {
            this.searchProduct = event.target.value;
        },
        incrementProduct(id) {
            this.products.map((item) => {
                if(item.id == id) {
                    item.quantity +=1
                }
            })
        },
        decrementProduct(id) {
              this.products.map((item) => {
                if(item.id == id) {
                    item.quantity > 1 ? item.quantity -=1 : null;
                }
            })
        },
        // addCartProduct(product) {
        //      if(this.cart.length){
        //         let itemFound = this.cart.find((item)=> item.id===product.id)
        //         console.log(itemFound.quantity)
        //         itemFound ? itemFound.quantity = product.quantity :  this.cart.push(product)
              
        //     } else {
        //         this.cart.push(product)
        //     }
        //     this.isDialogVisible = true;
        // },

        showIngredients() {
            this.isShowIngredients = !this.isShowIngredients;
        },

        showSortList() {
            this.isShowSortList = !this.isShowSortList;
        }


    },
})