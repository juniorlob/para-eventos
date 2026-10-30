<script setup>
import { Button } from './ui/button'

const props = defineProps(["categories", "selected", "onSelect"])
</script>

<template>
  <div class="mt-3 flex flex-wrap items-center gap-2">
    <slot name="prefix" />
    <div v-if="$slots.prefix" class="h-6 w-px shrink-0 bg-border" aria-hidden="true" />

    <Button
      type="button"
      variant="outline"
      class="capitalize"
      :class="{
        'border-brand-secondary bg-brand-secondary text-white hover:bg-brand-secondary/90 hover:text-white':
          props.selected === 'Todos',
      }"
      :aria-pressed="props.selected === 'Todos'"
      @click="props.onSelect('Todos')"
    >
      Todos
    </Button>
    <Button
      v-for="category in props.categories"
      :key="category"
      type="button"
      variant="outline"
      class="capitalize"
      :class="{
        'border-brand-secondary bg-brand-secondary text-white hover:bg-brand-secondary/90 hover:text-white':
          props.selected === category,
      }"
      :aria-pressed="props.selected === category"
      @click="props.onSelect(category)"
    >
      {{ category }}
    </Button>
  </div>
</template>
