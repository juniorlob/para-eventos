<script setup>
import Header from "@/components/Header.vue"
import Footer from "./Footer.vue";
</script>
<template>
  <div class="layout">
    <Header />
    <main class="main">
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

.main {
  flex: 1;
  padding: 1rem 0;
}
</style>
