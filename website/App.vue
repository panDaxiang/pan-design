<template>
  <div>{{message}}</div>
  <pan-button />
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref("hello world");
</script>