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
      <p class="event-card__meta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="event-card__meta-icon lucide lucide-calendar preview-icon">
          <path d="M8 2v3" />
          <path d="M16 2v3" />
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
        </svg> {{ Intl.DateTimeFormat('pt-BR',).format(new Date(props.event.date)) }} às {{
          props.event.time }}</p>
      <p class="event-card__meta">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          class="event-card__meta-icon lucide lucide-map-pin preview-icon">
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
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

.event-card__meta-icon {
  color: var(--secondary-color);
  width: 15px;
  height: 15px;
  margin-right: 2px;
}
</style>
