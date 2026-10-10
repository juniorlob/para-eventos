<script setup>
import { ref } from "vue"
import Layout from "@/components/Layout.vue"


const initialEvents = [
  {
    id: "show-mangueirao-2025",
    title: "Show Nacional - Verão Amazônico 2025",
    category: "SHOW",
    date: "2025-12-15",
    time: "20:00",
    location: "Estádio Olímpico do Pará - Mangueirão, Belém-PA",
    imageUrl: "https://placehold.co/800x450?text=Verao+Amazonico+2025",
    description:
      "O maior palco do Norte recebe os principais artistas nacionais para uma noite inesquecível no Estádio do Mangueirão. Estrutura completa com praça de alimentação, espaço family e after party. Traga sua energia para celebrar o verão paraense!",
  },
  {
    id: "teatro-amazonia-em-cena",
    title: 'Espetáculo "Amazônia em Cena"',
    category: "TEATRO",
    date: "2025-12-08",
    time: "19:30",
    location: "Theatro da Paz - Praça da República, Belém-PA",
    imageUrl: "https://placehold.co/800x450?text=Amazonia+em+Cena",
    description:
      "Espetáculo teatral que homenageia as lendas e mitos da Amazônia, com figurinos inspirados na cultura marajoara e trilha sonora ao vivo. Apresentação única no mais belo teatro da região Norte, patrimônio histórico de Belém.",
  },
  {
    id: "festival-sabores-do-para",
    title: "Festival Gastronômico Sabores do Pará",
    category: "CULINÁRIO",
    date: "2025-12-05",
    time: "17:00",
    location: "Hangar Centro de Convenções - Belém-PA",
    imageUrl: "https://placehold.co/800x450?text=Sabores+do+Para",
    description:
      "O maior festival de culinária paraense do ano! Mais de 30 chefs apresentando pratos típicos como tacacá, maniçoba, pato no tucupi e açaí. Oficinas de culinária, degustações e concurso de melhor prato. Evento ideal para toda família.",
  },
  {
    id: "exposicao-raizes-da-amazonia",
    title: 'Exposição "Raízes da Amazônia"',
    category: "MUSEU",
    date: "2025-12-18",
    time: "10:00",
    location: "Museu Paraense Emílio Goeldi - Av. Magalhães Barata, 376, São Brás",
    imageUrl: "https://placehold.co/800x450?text=Raizes+da+Amazonia",
    description:
      "Nova exposição permanente com acervo de cerâmica marajoara, artefatos indígenas e trajes típicos paraenses. Visita guiada com curadores do museu mais antigo da Amazônia. Entrada gratuita para estudantes.",
  },
  {
    id: "palestra-cultura-paraense",
    title: "Palestra: Cultura Paraense - História e Tradições",
    category: "PALESTRAS",
    date: "2025-12-10",
    time: "14:00",
    location: "Museu do Estado do Pará - MEP, Belém-PA",
    imageUrl: "https://placehold.co/800x450?text=Cultura+Paraense",
    description:
      "Uma jornada pela história, cultura, tradições e manifestações artísticas do Pará. Palestrante especialista em folclore amazônico aborda Círio de Nazaré, Carimbó, Bumba Meu Boi e artes visuais paraenses. Vagas limitadas, inscrições gratuitas.",
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
