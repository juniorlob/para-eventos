<script setup>
import { ref } from "vue"
import Layout from "@/components/Layout.vue"
import EventCard from "@/components/EventCard.vue"
import EventCarousel from "@/components/EventCarousel.vue"
import slideMangueirao from "@/assets/banners/festival-no-mangueirao.png"
import slideTeatro from "@/assets/banners/show-no-teatro.png"
import slideCirio from "@/assets/banners/cirio-de-nazare.png"
import slidePalestras from "@/assets/banners/palestras-cultura-paraense.png"
import slideGastronomico from "@/assets/banners/festival-gastronomico.png"
import slideMuseu from "@/assets/banners/evento-no-museu.png"
import showMangueirao from "@/assets/eventos/show-mangueirao-2025.png"
import teatroAmazonia from "@/assets/eventos/teatro-amazonia-em-cena.png"
import festivalSabores from "@/assets/eventos/festival-sabores-do-para.jpeg"
import exposicaoRaizes from "@/assets/eventos/exposicao-raizes-da-amazonia.jpeg"
import palestraCultura from "@/assets/eventos/palestra-cultura-paraense.png"


const initialEvents = [
  {
    id: "show-mangueirao-2025",
    title: "Show Nacional - Verão Amazônico 2025",
    category: "SHOW",
    date: "2026-12-15",
    time: "20:00",
    location: "Estádio Olímpico do Pará - Mangueirão, Belém-PA",
    imageUrl: showMangueirao,
    description:
      "O maior palco do Norte recebe os principais artistas nacionais para uma noite inesquecível no Estádio do Mangueirão. Estrutura completa com praça de alimentação, espaço family e after party. Traga sua energia para celebrar o verão paraense!",
  },
  {
    id: "teatro-amazonia-em-cena",
    title: 'Espetáculo "Amazônia em Cena"',
    category: "TEATRO",
    date: "2026-12-08",
    time: "19:30",
    location: "Theatro da Paz - Praça da República, Belém-PA",
    imageUrl: teatroAmazonia,
    description:
      "Espetáculo teatral que homenageia as lendas e mitos da Amazônia, com figurinos inspirados na cultura marajoara e trilha sonora ao vivo. Apresentação única no mais belo teatro da região Norte, patrimônio histórico de Belém.",
  },
  {
    id: "festival-sabores-do-para",
    title: "Festival Gastronômico Sabores do Pará",
    category: "CULINÁRIO",
    date: "2026-12-05",
    time: "17:00",
    location: "Hangar Centro de Convenções - Belém-PA",
    imageUrl: festivalSabores,
    description:
      "O maior festival de culinária paraense do ano! Mais de 30 chefs apresentando pratos típicos como tacacá, maniçoba, pato no tucupi e açaí. Oficinas de culinária, degustações e concurso de melhor prato. Evento ideal para toda família.",
  },
  {
    id: "exposicao-raizes-da-amazonia",
    title: 'Exposição "Raízes da Amazônia"',
    category: "MUSEU",
    date: "2026-12-18",
    time: "10:00",
    location: "Museu Paraense Emílio Goeldi - Av. Magalhães Barata, 376, São Brás",
    imageUrl: exposicaoRaizes,
    description:
      "Nova exposição permanente com acervo de cerâmica marajoara, artefatos indígenas e trajes típicos paraenses. Visita guiada com curadores do museu mais antigo da Amazônia. Entrada gratuita para estudantes.",
  },
  {
    id: "palestra-cultura-paraense",
    title: "Palestra: Cultura Paraense - História e Tradições",
    category: "PALESTRAS",
    date: "2026-12-10",
    time: "14:00",
    location: "Museu do Estado do Pará - MEP, Belém-PA",
    imageUrl: palestraCultura,
    description:
      "Uma jornada pela história, cultura, tradições e manifestações artísticas do Pará. Palestrante especialista em folclore amazônico aborda Círio de Nazaré, Carimbó, Bumba Meu Boi e artes visuais paraenses. Vagas limitadas, inscrições gratuitas.",
  },
]


const events = ref(initialEvents)

const slides = ref([
  { src: slideMangueirao, title: "Festival no Mangueirão" },
  { src: slideTeatro, title: "Show no Teatro" },
  { src: slideCirio, title: "Círio de Nazaré" },
  { src: slidePalestras, title: "Palestras Cultura Paraense" },
  { src: slideGastronomico, title: "Festival Gastronômico" },
  { src: slideMuseu, title: "Evento no Museu" },
])
</script>

<template>
  <Layout>

    <div class="container">
      <EventCarousel :slides="slides" />
    </div>
    <div class="container header-title__container">
      <h1>Bem vindo a Pará Eventos</h1>
      <p>A sua agenda de cultura e lazer na Região Metropolitana</p>
    </div>
    <section class="events container">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </section>
  </Layout>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
  margin-bottom: 0;
}

.header-title__container {
  text-align: center;
  margin-bottom: 24px;
}

.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 24px;
}
</style>
