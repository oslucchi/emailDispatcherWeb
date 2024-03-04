<!-- ModalComponent.vue 
<template>
    <div v-if="isVisible" class="modal" 
         style="props.style">
        
    </div>
</template>
-->
<template>
  <div v-if="isVisible" class="modal" :style="{ top: y + 'px', left: x + 'px' }">
    <ul>
      <li v-for="(option, index) in options" :key="index" @click="optionSelected(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, CSSProperties, PropType } from 'vue';

  export default defineComponent({
    name: 'ModalMenu',
    props: {
        isVisible: Boolean,
        x: {
          type: Number,
          default: 0,
        },
        y: {
          type: Number,
          default: 0,
        },
        options: {
          type: Array as () => string[],
          default: () => []
        }
    },

    methods: {
      optionSelected(option: string) {
        console.log(option);
        this.$emit('optionSelected', option);// Emit the selected option
        this.$emit('update:isVisible', false); // Close the modal
      },
    },
  });
  </script>
  
  <style>
  .modal {
    /* Basic modal styling */
    /*
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    */
    position: fixed;
    z-index: 1;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  