<script setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section v-if="props.slides.length > 0" class="carousel">
    <div class="carousel__strip">
      <div v-for="slide in props.slides" :key="slide.src" class="carousel__item">
        <img class="carousel__image" :src="slide.src" :alt="slide.title" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  margin-bottom: 8px;
}

.carousel__strip {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
}

.carousel__item {
  flex: 0 0 auto;
  width: calc(100vw / 6);
  margin: 0;
  scroll-snap-align: start;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
}

@media (max-width: 1024px) {
  .carousel__item {
    width: calc(100vw / 3);
  }
}

@media (max-width: 768px) {
  .carousel__item {
    width: calc(100vw / 2);
  }
}

@media (max-width: 480px) {
  .carousel__item {
    width: 85%;
  }


}

.carousel__caption {
  font-size: var(--font-medium);
  margin: 4px 0 0;
}
</style>
