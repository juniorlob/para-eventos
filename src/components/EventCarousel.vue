<script setup>
const props = defineProps(["slides", "onOpen"])

console.log("Slides in EventCarousel.vue", props.slides)
</script>

<template>
  <section v-if="props.slides.length > 0" class="carousel">
    <div class="carousel__strip">
      <div v-for="(slide, index) in props.slides" :key="`${slide.id}-${index}`" class="carousel__item"
        @click="props.onOpen(slide)">
        <img class="carousel__image" :src="slide.banner" :alt="slide.title" />
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
  transition: all .5s ease-in-out;

}

.carousel__item:hover {
  cursor: pointer;
}


.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: all .5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.carousel__item:hover .carousel__image {
  border: 1px solid var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
