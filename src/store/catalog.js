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
        // searchCatalog(state) {

        // }

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
        increment(index) {
            this.cart[index].quantity +=1
        },
        decrement(index) {
            if(this.cart[index].quantity > 1){
                this.cart[index].quantity -=1;
            }
        },
        changeStatusFilter(filter) {
            this.statusFilter = filter;
        },
        updateSearchInput(event) {
            this.searchProduct = event.target.value;
        },


    },
})