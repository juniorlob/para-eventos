<script setup>
import { computed, ref } from "vue"
import Layout from "@/components/Layout.vue"
import EventCard from "@/components/EventCard.vue"
import EventCarousel from "@/components/EventCarousel.vue"
import SearchBar from "@/components/SearchBar.vue"
import CategoryFilter from "@/components/CategoryFilter.vue"
import EventModal from "@/components/EventModal.vue"
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

const EVENTS_CATEGORY = {
  SHOW: "show",
  RELIGIOSO: "Religioso",
  TEATRO: "teatro",
  CULINARIO: "culinario",
  MUSEU: "museu",
  PALESTRAS: "palestras",
}

const initialEvents = [
  {
    id: "show-mangueirao-2025",
    title: "Show Nacional - Verão Amazônico 2025",
    category: EVENTS_CATEGORY.SHOW,
    date: "2026-12-15",
    time: "20:00",
    location: "Estádio Olímpico do Pará - Mangueirão, Belém-PA",
    imageUrl: showMangueirao,
    description:
      "O maior palco do Norte recebe os principais artistas nacionais para uma noite inesquecível no Estádio do Mangueirão. Estrutura completa com praça de alimentação, espaço family e after party. Traga sua energia para celebrar o verão paraense!",
    banner: slideMangueirao,
  },

  {
    id: "teatro-amazonia-em-cena",
    title: 'Espetáculo "Amazônia em Cena"',
    category: EVENTS_CATEGORY.TEATRO,
    date: "2026-12-08",
    time: "19:30",
    location: "Theatro da Paz - Praça da República, Belém-PA",
    imageUrl: teatroAmazonia,
    banner: slideTeatro,
    description:
      "Espetáculo teatral que homenageia as lendas e mitos da Amazônia, com figurinos inspirados na cultura marajoara e trilha sonora ao vivo. Apresentação única no mais belo teatro da região Norte, patrimônio histórico de Belém.",
  },
  {
    id: "festival-sabores-do-para",
    title: "Festival Gastronômico Sabores do Pará",
    category: EVENTS_CATEGORY.CULINARIO,
    date: "2026-12-05",
    time: "17:00",
    location: "Hangar Centro de Convenções - Belém-PA",
    imageUrl: festivalSabores,
    banner: slideGastronomico,
    description:
      "O maior festival de culinária paraense do ano! Mais de 30 chefs apresentando pratos típicos como tacacá, maniçoba, pato no tucupi e açaí. Oficinas de culinária, degustações e concurso de melhor prato. Evento ideal para toda família.",
  },
  {
    id: "exposicao-raizes-da-amazonia",
    title: 'Exposição "Raízes da Amazônia"',
    category: EVENTS_CATEGORY.MUSEU,
    date: "2026-12-18",
    time: "10:00",
    location: "Museu Paraense Emílio Goeldi - Av. Magalhães Barata, 376, São Brás",
    imageUrl: exposicaoRaizes,
    banner: slideMuseu,
    description:
      "Nova exposição permanente com acervo de cerâmica marajoara, artefatos indígenas e trajes típicos paraenses. Visita guiada com curadores do museu mais antigo da Amazônia. Entrada gratuita para estudantes.",
  },
  {
    id: "palestra-cultura-paraense",
    title: "Palestra: Cultura Paraense - História e Tradições",
    category: EVENTS_CATEGORY.PALESTRAS,
    date: "2026-12-10",
    time: "14:00",
    location: "Museu do Estado do Pará - MEP, Belém-PA",
    banner: slidePalestras,
    imageUrl: palestraCultura,
    description:
      "Uma jornada pela história, cultura, tradições e manifestações artísticas do Pará. Palestrante especialista em folclore amazônico aborda Círio de Nazaré, Carimbó, Bumba Meu Boi e artes visuais paraenses. Vagas limitadas, inscrições gratuitas.",
  },
  // {
  //   id: "cirio-2026",
  //   title: "",
  //   category: EVENTS_CATEGORY.RELIGIOSO,
  //   date: "2026-12-10",
  //   time: "14:00",
  //   location: "Belém - Pará",
  //   imageUrl:
  //     banner: palestraCultura,
  // }
]


const slides = initialEvents.map(({ id, title, banner }) => { id, title, banner })
console.log("Slides in app", slides)
const events = ref(initialEvents)

const searchText = ref("")

function handleSearch(value) {
  searchText.value = value
}

const filteredEvents = computed(() => {
  const query = searchText.value.trim().toLowerCase()
  return events.value.filter((event) => {
    const matchesQuery =
      query === "" || event.title.toLowerCase().includes(query)
    const matchesFavorites =
      !showFavoritesOnly.value || favoriteIds.value.includes(event.id)
    const matchesCategory =
      selectedCategory.value === "Todos" || event.category === selectedCategory.value
    return matchesQuery && matchesFavorites && matchesCategory
  })
})

const categories = computed(() => {
  const list = []
  for (const event of events.value) {
    if (!list.includes(event.category)) {
      list.push(event.category)
    }
  }
  return list
})

const selectedCategory = ref("Todos")

function handleSelectCategory(category) {
  selectedCategory.value = category
}

const favoriteIds = ref([])
const showFavoritesOnly = ref(false)

function toggleFavorite(id) {
  const index = favoriteIds.value.indexOf(id)
  if (index === -1) {
    favoriteIds.value.push(id)
  } else {
    favoriteIds.value.splice(index, 1)
  }
}

function toggleFavoritesView() {
  showFavoritesOnly.value = !showFavoritesOnly.value
}

const selectedEvent = ref(null)

function openEventDetails(event) {
  selectedEvent.value = event
}

function closeEventDetails() {
  selectedEvent.value = null
}


</script>

<template>
  <Layout>
    <div class="container welcome">
      <h1>A sua agenda de cultura e lazer na Região Metropolitana</h1>
    </div>

    <div class="container">
      <EventCarousel :slides="initialEvents" :on-open="openEventDetails" />
    </div>
    <div class="container form-filter_layout">
      <div class="form-filter__search_type">
        <SearchBar :model-value="searchText" :on-search="handleSearch" />
        <CategoryFilter :categories="Object.entries(EVENTS_CATEGORY).map(([key, value]) => value)"
          :selected="selectedCategory" :on-select="handleSelectCategory" />
      </div>
      <hr />
      <button type="button" class="favorites-toggle" @click="toggleFavoritesView">
        {{ showFavoritesOnly ? "Ver todos os eventos" : "Ver somente favoritos" }}
        <img src="@/assets/icons/heart-filled.svg" alt="favoritos">
      </button>
    </div>
    <section class="events container">
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event"
        :is-favorite="favoriteIds.includes(event.id)" :on-toggle-favorite="toggleFavorite"
        :on-open="openEventDetails" />
      <div v-if="filteredEvents.length === 0" class="no-events">
        <p>Nenhum evento encontrado.</p>
      </div>
    </section>
    <EventModal :event="selectedEvent" :on-close="closeEventDetails" />
  </Layout>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
  margin-bottom: 0;
}

.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.welcome {
  margin-bottom: 24px;
  text-align: center;
}

.favorites-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-medium);
  white-space: nowrap;
  padding: 8px 14px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background: #fff;
  color: var(--primary-color);
  cursor: pointer;

}

.form-filter_layout {
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
}

.form-filter__search_type {
  display: block;
  width: 100%;
}
</style>
