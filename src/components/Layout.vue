<script setup>
import Header from "@/components/Header.vue"
import Footer from "./Footer.vue";
</script>
<template>
  <div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  </div>
</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
