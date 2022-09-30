<template>
  <div 
    v-if="show" 
    @click="$emit('close')"
    class="app-modal__wrapper">
      <div 
        class="app-modal d-flex flex-column"
        @click.stop>
        <span 
          class="app-modal-close material-icons close"
          @click="$emit('close')">
          close
        </span>
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
}
</script>

<style  lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.app-modal__wrapper {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.5);
  z-index: 1000;
  overflow-y: auto;

  .app-modal {
    position: relative;
    margin: auto;
    // min-width:  300px; 
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    background-color: #fff;
    border-radius: 12px;
  }

  .app-modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    color: #393b3f;
  }
}

</style>