<template>
  <div 
    v-if="show" 
    @click="$emit('close')"
    class="app-modal__wrapper">
      <div 
        class="app-modal"
        @click.stop>
        <app-button 
          @click="$emit('close')">
          close
        </app-button>
        <slot></slot>
      </div>
  </div>
</template>

<script>

export default {
  name: 'app-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
       // hideDialog() {
    

       //      this.$emit('update:show', false)
       //  }
      },
  watch: {
    show(newValue){
      console.log('show',newValue)
    }
  }

 
}
</script>

<style scoped>
    .app-modal__wrapper {
       position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0, 0.5);
        z-index: 1000;
        overflow-y: auto
    }
    .app-modal {
        margin: auto;
        background-color: #fff;
        border-radius: 12px;
        
        min-width:  500px; 
        padding: 20px;


    }

</style>