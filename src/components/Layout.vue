<script setup>
import Header from "@/components/Header.vue"
import Footer from "./Footer.vue";
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 mb-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>
