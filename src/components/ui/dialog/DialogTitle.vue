<script setup>
import { reactiveOmit } from "@vueuse/core";
import { DialogTitle, useForwardProps } from "reka-ui";
import { cn } from "cn";

const props = defineProps({
  ...DialogTitle.props,
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});

const forwarded = useForwardProps(reactiveOmit(props, "class"));
</script>

<template>
  <DialogTitle v-bind="forwarded" :class="cn('text-lg leading-none font-semibold', props.class)">
    <slot />
  </DialogTitle>
</template>
