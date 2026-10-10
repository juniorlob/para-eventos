<script setup>
import { ref } from "vue"
import Layout from "@/components/Layout.vue"
import { initialEvents, isValidEvent } from "@/data/events.js"

// Estado em memória da lista de eventos (Issue #4).
// A renderização em cards entra na Issue #6; a carga real, na Issue #5.
const events = ref(initialEvents.filter(isValidEvent))
</script>

<template>
  <Layout>
    <div class="container">
      <h1>Welcome to Pará Eventos</h1>
      <p>A sua agenda de cultura e lazer na Região Metropolitana</p>
    </div>
  </Layout>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
  font-size: var(--font-large);
}
</style>
