<script setup>
import { Search } from '@lucide/vue'
import { Input } from './ui/input'

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  onSearch: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div class="relative w-full">
    <Search
      class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
      aria-hidden="true"
    />
    <Input
      class="h-10 pl-9"
      type="text"
      placeholder="Buscar evento por título..."
      :model-value="props.modelValue"
      :on-input="props.onSearch"
    />
  </div>
</template>
