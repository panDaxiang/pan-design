<template>
  <button>
    button
  </button>
  
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: "panButton",
    setup(){
      const message = ref('buttom')

      return {
        message
      }
    }
  })
</script>