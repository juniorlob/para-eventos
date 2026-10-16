<script setup>

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  onToggleFavorite: {
    type: Function,
    required: true,
  },
  onOpen: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <article class="event-card" @click="props.onOpen(props.event)">
    <img class="event-card__cover"
      :src="props.event.imageUrl || `https://mockimage.tw/photo/500x400/ffffff/000000/${props.event.title}`"
      :alt="props.event.title" />
    <div class="event-card__body">
      <div class="event-card__top-row">
        <span class="event-card__category">{{ props.event.category }}</span>
        <button type="button" class="event-card__favorite" :class="{ 'event-card__favorite--active': props.isFavorite }"
          :aria-label="props.isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
          @click.stop="props.onToggleFavorite(props.event.id)">
          <img v-show="isFavorite" alt="desfavoritar" src="@/assets/icons/heart-filled.svg" />
          <img v-show="!isFavorite" src="@/assets/icons/heart.svg" alt="favoritar">
        </button>
      </div>
      <h2 class="event-card__title">{{ props.event.title }}</h2>
      <p class="event-card__meta">
        <img src="@/assets/icons/calendar.svg" alt="" class="event-card__meta-icon" /> {{
          Intl.DateTimeFormat('pt-BR',).format(new Date(`${props.event.date}T00:00:00`)) }} às {{
          props.event.time }}
      </p>
      <p class="event-card__meta">

        <img src="@/assets/icons/map-pin.svg" alt="" class="event-card__meta-icon" />
        {{ props.event.location }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.event-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  flex: 1 1 280px;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all .2s ease-in-out
}

@media (max-width: 635px) {
  .event-card {
    max-width: none;
  }
}

.event-card:hover {
  border: 1px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

}

.event-card__cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.event-card__body {
  padding: 12px 16px;
}

.event-card__category {
  display: inline-block;
  text-transform: capitalize;
  font-size: var(--font-small);
  color: #fff;
  background: var(--secondary-color);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 8px;
}

.event-card__top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.event-card__top-row .event-card__category {
  margin-bottom: 0;
}

.event-card__favorite {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: var(--font-large);
  line-height: 1;
  background: #fff;
  color: #999;
  cursor: pointer;
}

.event-card__favorite--active {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.event-card__title {
  font-size: var(--font-large);
  color: var(--primary-color);
  margin: 0 0 8px;
}

.event-card__meta {
  font-size: var(--font-medium);
  margin: 4px 0;
}

.event-card__meta-icon {
  color: var(--secondary-color);
  width: 15px;
  height: 15px;
  margin-right: 2px;
  user-select: none;
}
</style>
