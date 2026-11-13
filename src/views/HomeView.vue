<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { Heart } from "@lucide/vue"
import Banner from "@/components/Banner.vue"
import EventCard from "@/components/EventCard.vue"
import EventCarousel from "@/components/EventCarousel.vue"
import SearchBar from "@/components/SearchBar.vue"
import CategoryFilter from "@/components/CategoryFilter.vue"
import EventModal from "@/components/EventModal.vue"
import { Button } from "@/components/ui/button"
import { getCategories, getEventById, getEvents } from "@/services/events"

const FALLBACK_CATEGORIES = ["show", "Religioso", "teatro", "culinario", "museu", "palestras"]
const FAVORITES_STORAGE_KEY = "para-eventos:favoritos"

function loadFavoriteIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? "[]")

    return Array.isArray(stored) ? stored.filter((id) => typeof id === "string") : []
  } catch {
    return []
  }
}

const events = ref([])
const categories = ref(FALLBACK_CATEGORIES)
const isLoading = ref(true)
const loadError = ref("")

const searchText = ref("")
const selectedCategory = ref("Todos")
const favoriteIds = ref(loadFavoriteIds())
const showFavoritesOnly = ref(false)
const selectedEvent = ref(null)

let detailRequestId = 0

const featuredEvents = computed(() =>
  events.value.filter(({ banner }) => typeof banner === "string" && banner.length > 0),
)

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

const filteredEvents = computed(() => {
  const query = normalizeText(searchText.value.trim())

  return events.value.filter((event) => {
    const matchesQuery = query === "" || normalizeText(event.title).includes(query)
    const matchesFavorites = !showFavoritesOnly.value || favoriteIds.value.includes(event.id)
    const matchesCategory = selectedCategory.value === "Todos" || event.category === selectedCategory.value

    return matchesQuery && matchesFavorites && matchesCategory
  })
})

async function loadEvents() {
  isLoading.value = true
  loadError.value = ""

  try {
    const [eventsResponse, categoriesResponse] = await Promise.all([
      getEvents({ limit: 100 }),
      getCategories().catch((error) => {
        console.warn("Não foi possível carregar as categorias da API.", error)
        return null
      }),
    ])

    events.value = eventsResponse.data

    if (Array.isArray(categoriesResponse) && categoriesResponse.length > 0) {
      categories.value = categoriesResponse.map((category) => category.value)
    }
  } catch (error) {
    console.error("Falha ao carregar os eventos.", error)
    loadError.value = "Não foi possível carregar os eventos. Verifique se a API está no ar e tente novamente."
  } finally {
    isLoading.value = false
  }
}

function handleSearch(value) {
  searchText.value = value
}

function handleSelectCategory(category) {
  selectedCategory.value = category
}

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

async function openEventDetails(event) {
  const requestId = ++detailRequestId
  selectedEvent.value = event

  try {
    const detailedEvent = await getEventById(event.id)

    if (requestId === detailRequestId && selectedEvent.value?.id === event.id) {
      selectedEvent.value = detailedEvent
    }
  } catch (error) {
    // Mantém os dados já carregados na lista caso o detalhe falhe.
    console.warn(`Não foi possível carregar os detalhes do evento ${event.id}.`, error)
  }
}

function closeEventDetails() {
  detailRequestId += 1
  selectedEvent.value = null
}

watch(
  favoriteIds,
  (ids) => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids))
    } catch {
      // Ignora ambientes onde o localStorage não está disponível.
    }
  },
  { deep: true },
)

onMounted(loadEvents)
</script>

<template>
  <Banner />

  <div v-if="!isLoading && !loadError && featuredEvents.length > 0" class="container mx-auto px-4">
    <EventCarousel :slides="featuredEvents" :on-open="openEventDetails" />
  </div>
  <div class="container mx-auto px-4">
    <SearchBar :model-value="searchText" :on-search="handleSearch" />
    <CategoryFilter :categories="categories" :selected="selectedCategory" :on-select="handleSelectCategory">
      <template #prefix>
        <Button type="button" variant="outline"
          class="whitespace-nowrap border-brand-primary text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary"
          :class="{ 'border-brand-secondary bg-brand-secondary text-white hover:bg-brand-secondary/90 hover:text-white': showFavoritesOnly }"
          :aria-pressed="showFavoritesOnly" @click="toggleFavoritesView">
          <Heart class="size-4" :class="showFavoritesOnly ? 'text-white' : 'text-brand-secondary'" fill="currentColor"
            aria-hidden="true" />
          {{ showFavoritesOnly ? "Ver todos os eventos" : "Ver somente favoritos" }}
        </Button>
      </template>
    </CategoryFilter>
  </div>
  <div class="container mx-auto px-4 my-3">
    <p v-if="!isLoading && !loadError && filteredEvents.length > 0" class="text-sm text-muted-foreground"
      aria-live="polite">
      {{ filteredEvents.length }} Eventos encontrados
    </p>
  </div>
  <section
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4"
    :aria-busy="isLoading">
    <template v-if="isLoading">
      <div v-for="n in 8" :key="`event-skeleton-${n}`" class="h-64 animate-pulse rounded-xl bg-muted"
        aria-hidden="true" />
    </template>

    <div v-else-if="loadError" class="col-span-full rounded-xl border border-dashed border-border p-8 text-center">
      <p class="text-sm text-muted-foreground">{{ loadError }}</p>
      <Button class="mt-4" type="button" @click="loadEvents">Tentar novamente</Button>
    </div>

    <template v-else>
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event"
        :is-favorite="favoriteIds.includes(event.id)" :on-toggle-favorite="toggleFavorite"
        :on-open="openEventDetails" />
      <div v-if="filteredEvents.length === 0" class="no-events col-span-full">
        <p>Nenhum evento encontrado.</p>
      </div>
    </template>
  </section>
  <EventModal :event="selectedEvent" :on-close="closeEventDetails" />
</template>
