<script setup>
import { CarouselItem, Carousel, CarouselContent,CarouselPrevious,CarouselNext } from './ui/carousel';

const props = defineProps(["slides", "onOpen"])
</script>

<template>
   <Carousel
    class="w-full z-0"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 mb-6">
      <CarouselItem v-for="(slide, index) in props.slides" :key="`${slide.id}-${index}`" class="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5" @click="props.onOpen(slide)">
        <div class="p-1">
                  <img class=" object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out cursor-pointer" :src="slide.banner" :alt="slide.title" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
