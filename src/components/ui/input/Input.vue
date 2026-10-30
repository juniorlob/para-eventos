<script setup>
import { cn } from "cn";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  onInput: {
    type: Function,
    default: undefined,
  },
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});
</script>

<template>
  <input
    data-slot="input"
    :value="props.modelValue"
    :class="
      cn(
        'border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/20',
        props.class,
      )
    "
    @input="props.onInput?.($event.target.value)"
  />
</template>
