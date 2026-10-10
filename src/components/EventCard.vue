<script setup>

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="event-card">
    <img class="event-card__cover" :src="props.event.imageUrl" :alt="props.event.title" />
    <div class="event-card__body">
      <span class="event-card__category">{{ props.event.category }}</span>
      <h2 class="event-card__title">{{ props.event.title }}</h2>
      <p class="event-card__meta">{{ Intl.DateTimeFormat('pt-BR',).format(new Date(props.event.date)) }} às {{
        props.event.time }}</p>
      <p class="event-card__meta">{{ props.event.location }}</p>
    </div>
  </article>
</template>

<style scoped>
.event-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
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
  font-size: var(--font-small);
  color: #fff;
  background: var(--secondary-color);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 8px;
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
</style>
