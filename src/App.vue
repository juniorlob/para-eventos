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
import HeaderImage from "@/assets/belem.jpg"


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

  {
    id: "festival-de-verao-2027",
    title: "Festival de Verão 2027",
    category: EVENTS_CATEGORY.SHOW,
    date: "2027-01-08",
    time: "19:00",
    location: "Praça de Eventos",
    description:
      "Prepare-se para uma noite inesquecível de música, alegria e diversão! O Festival de Verão 2027 reúne artistas regionais, apresentações ao vivo e atrações culturais para celebrar o melhor da temporada.",
  },
  {
    id: "noite-do-samba-e-pagode",
    title: "Noite do Samba e Pagode",
    category: EVENTS_CATEGORY.SHOW,
    date: "2027-01-22",
    time: "20:00",
    location: "Arena Cultural",
    description:
      "Uma noite dedicada aos grandes sucessos do samba e pagode brasileiro. Venha cantar, dançar e aproveitar apresentações musicais em um ambiente animado, cheio de energia e descontração.",
  },
  {
    id: "festival-musical-de-carnaval",
    title: "Festival Musical de Carnaval",
    category: EVENTS_CATEGORY.SHOW,
    date: "2027-02-06",
    time: "18:00",
    location: "Parque da Cidade",
    description:
      "Entre no ritmo do Carnaval com uma programação repleta de música, cores e alegria. O festival reúne bandas, apresentações especiais e muita animação para celebrar uma das maiores festas brasileiras.",
  },

  {
    id: "encontro-de-fe-e-esperanca",
    title: "Encontro de Fé e Esperança",
    category: EVENTS_CATEGORY.RELIGIOSO,
    date: "2027-01-10",
    time: "18:00",
    location: "Centro de Convenções",
    description:
      "Um momento especial de espiritualidade, união e fortalecimento da fé. O encontro contará com louvores, reflexões e mensagens inspiradoras para renovar a esperança e compartilhar experiências.",
  },
  {
    id: "festival-de-musica-gospel",
    title: "Festival de Música Gospel",
    category: EVENTS_CATEGORY.RELIGIOSO,
    date: "2027-01-24",
    time: "19:00",
    location: "Praça Central",
    description:
      "Uma celebração de fé por meio da música gospel. O festival reúne apresentações de grupos musicais, momentos de louvor e mensagens de esperança em uma noite especial para toda a comunidade.",
  },
  {
    id: "congresso-de-renovacao-espiritual",
    title: "Congresso de Renovação Espiritual",
    category: EVENTS_CATEGORY.RELIGIOSO,
    date: "2027-02-14",
    time: "09:00",
    location: "Auditório Municipal",
    description:
      "Um encontro dedicado ao crescimento espiritual e à reflexão pessoal. A programação inclui palestras, mensagens inspiradoras e atividades que promovem a fé, a união e a renovação interior.",
  },

  {
    id: "o-misterio-do-teatro-antigo",
    title: "O Mistério do Teatro Antigo",
    category: EVENTS_CATEGORY.TEATRO,
    date: "2027-01-12",
    time: "19:30",
    location: "Teatro Municipal",
    description:
      "Uma história intrigante que mistura suspense, humor e acontecimentos inesperados. Entre personagens misteriosos e grandes revelações, o espetáculo promete prender a atenção do público do início ao fim.",
  },
  {
    id: "as-aventuras-do-pequeno-sonhador",
    title: "As Aventuras do Pequeno Sonhador",
    category: EVENTS_CATEGORY.TEATRO,
    date: "2027-01-30",
    time: "16:00",
    location: "Centro Cultural",
    description:
      "Um espetáculo infantil cheio de magia, aventura e imaginação. A história acompanha um pequeno sonhador em descobertas surpreendentes, transmitindo mensagens sobre amizade, coragem e criatividade.",
  },
  {
    id: "comedia-familia-em-apuros",
    title: "Comédia: Família em Apuros",
    category: EVENTS_CATEGORY.TEATRO,
    date: "2027-02-20",
    time: "20:00",
    location: "Teatro da Cidade",
    description:
      "Prepare-se para muitas risadas com uma família envolvida em situações inesperadas. Entre confusões, mal-entendidos e momentos divertidos, a comédia apresenta histórias com as quais todos podem se identificar.",
  },

  {
    id: "festival-gastronomico-de-verao",
    title: "Festival Gastronômico de Verão",
    category: EVENTS_CATEGORY.CULINARIO,
    date: "2027-01-15",
    time: "17:00",
    location: "Espaço Gastronômico",
    description:
      "Uma experiência gastronômica repleta de sabores, aromas e criatividade. O festival reúne pratos regionais, chefs convidados, receitas especiais e música ao vivo para proporcionar momentos inesquecíveis.",
  },
  {
    id: "sabores-da-amazonia",
    title: "Sabores da Amazônia",
    category: EVENTS_CATEGORY.CULINARIO,
    date: "2027-02-05",
    time: "18:00",
    location: "Feira Cultural",
    description:
      "Descubra a riqueza da culinária amazônica em uma experiência de sabores e tradições. O evento valoriza ingredientes regionais, receitas típicas e a diversidade gastronômica que representa a cultura da Amazônia.",
  },
  {
    id: "festival-de-comida-de-rua",
    title: "Festival de Comida de Rua",
    category: EVENTS_CATEGORY.CULINARIO,
    date: "2027-02-21",
    time: "16:00",
    location: "Praça de Alimentação",
    description:
      "Uma verdadeira celebração da gastronomia de rua, com food trucks, comidas artesanais, lanches especiais e sobremesas irresistíveis. Um ambiente descontraído para reunir amigos e familiares.",
  },

  {
    id: "exposicao-memorias-da-cidade",
    title: "Exposição Memórias da Cidade",
    category: EVENTS_CATEGORY.MUSEU,
    date: "2027-01-09",
    time: "10:00",
    location: "Museu Histórico",
    description:
      "Uma viagem pela história da cidade por meio de fotografias, documentos e objetos antigos. A exposição apresenta acontecimentos, personagens e transformações que ajudaram a construir a identidade local.",
  },
  {
    id: "arte-e-cultura-amazonica",
    title: "Arte e Cultura Amazônica",
    category: EVENTS_CATEGORY.MUSEU,
    date: "2027-01-27",
    time: "09:00",
    location: "Museu de Arte",
    description:
      "Uma exposição dedicada à riqueza artística e cultural da Amazônia. Conheça obras inspiradas nas tradições, nos povos, nas paisagens e nas manifestações culturais que representam a identidade amazônica.",
  },
  {
    id: "museu-interativo-ciencia-e-tecnologia",
    title: "Museu Interativo: Ciência e Tecnologia",
    category: EVENTS_CATEGORY.MUSEU,
    date: "2027-02-19",
    time: "10:00",
    location: "Museu de Ciências",
    description:
      "Explore o universo da ciência e da tecnologia por meio de experiências interativas e atividades educativas. Uma oportunidade para descobrir inovações, compreender fenômenos científicos e despertar a curiosidade.",
  },
  {
    id: "inteligencia-artificial-e-o-futuro",
    title: "Inteligência Artificial e o Futuro",
    category: EVENTS_CATEGORY.PALESTRAS,
    date: "2027-01-18",
    time: "19:00",
    location: "Auditório de Tecnologia",
    description:
      "Descubra como a inteligência artificial está transformando empresas, profissões e a sociedade. A palestra aborda inovações tecnológicas, oportunidades e os principais desafios do futuro digital.",
  },
  {
    id: "empreendedorismo-digital-em-2027",
    title: "Empreendedorismo Digital em 2027",
    category: EVENTS_CATEGORY.PALESTRAS,
    date: "2027-02-11",
    time: "18:30",
    location: "Centro Empresarial",
    description:
      "Conheça estratégias para criar, desenvolver e fortalecer negócios no ambiente digital. A palestra apresenta tendências de mercado, oportunidades de empreendedorismo e ferramentas para impulsionar resultados.",
  },
  {
    id: "marketing-redes-sociais-e-criatividade",
    title: "Marketing, Redes Sociais e Criatividade",
    category: EVENTS_CATEGORY.PALESTRAS,
    date: "2027-02-25",
    time: "19:00",
    location: "Auditório Cultural",
    description:
      "Explore as principais tendências de marketing digital, produção de conteúdo e redes sociais. A palestra apresenta estratégias criativas para fortalecer marcas, alcançar novos públicos e melhorar a comunicação.",
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
    <div class="header"
      :style="`background-image: linear-gradient(180deg,rgba(2, 0, 36, .5) 0%, rgba(9, 9, 121, .5) 35%, rgba(0, 212, 255, .5) 100%), url(${HeaderImage})`">
      <div class="container header__wrapper">
        <h1 class="header__title">A sua agenda de cultura e lazer <br> na Região Metropolitana</h1>
      </div>
    </div>

    <div class="container">
      <EventCarousel :slides="initialEvents.filter(({ banner }) => typeof banner === 'string')"
        :on-open="openEventDetails" />
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
    <div class="container events-info__space">
      <p v-if="filteredEvents.length > 0">{{ filteredEvents.length }} Eventos encontrados</p>
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
.header {
  height: 400px;
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}




.header__wrapper {
  height: 100%;
  display: flex;
}

.header__title {
  color: #fff;
  font-size: calc(1.3 * var(--font-3xlarge));
  text-align: center;
  margin: auto;
  font-weight: 900;
}

.form-filter_layout {
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
}

@media (max-width: 576px) {
  .header {
    max-height: 300px
  }



  .header__title {
    font-size: var(--font-large);
  }

  .form-filter_layout {
    flex-direction: column-reverse;
    gap: 0px;

  }
}


.events {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}

.events-info__space {
  margin-top: 12px;
  margin-bottom: 12px
}

.events-info__space p {
  margin-bottom: 0;
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
  justify-content: center;
}



.form-filter__search_type {
  display: block;
  width: 100%;
}
</style>
