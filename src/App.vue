<script setup>
import { ref } from "vue"
import Layout from "@/components/Layout.vue"

const initialEvents = [
  {
    id: "sample-1",
    title: "Evento de exemplo 1",
    date: "2025-01-10",
    time: "19:00",
    location: "Local de exemplo 1",
    imageUrl: "https://placehold.co/800x450?text=Evento+1",
    description: "Descrição de exemplo para validar o shape do evento.",
  },
  {
    id: "sample-2",
    title: "Evento de exemplo 2",
    date: "2025-02-15",
    time: "20:30",
    location: "Local de exemplo 2",
    imageUrl: "https://placehold.co/800x450?text=Evento+2",
    description: "Segunda descrição de exemplo para validar a lista em memória.",
  },
  {
    id: "sample-3",
    title: "Evento de exemplo 3",
    date: "2025-03-20",
    time: "18:00",
    location: "Local de exemplo 3",
    imageUrl: "https://placehold.co/800x450?text=Evento+3",
    description: "Terceira descrição de exemplo para validar a renderização futura.",
  },
]


const events = ref(initialEvents)
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
