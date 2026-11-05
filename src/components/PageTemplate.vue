<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="container mx-auto max-w-3xl px-4 py-12">
    <h1 class="text-3xl font-bold text-brand-primary">{{ title }}</h1>
    <div class="mt-6 space-y-4 text-base leading-relaxed text-foreground">
      <slot />
    </div>
  </article>
</template>
