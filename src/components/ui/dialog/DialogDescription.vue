<script setup>
import { reactiveOmit } from "@vueuse/core";
import { DialogDescription, useForwardProps } from "reka-ui";
import { cn } from "cn";

const props = defineProps({
  ...DialogDescription.props,
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});

const forwarded = useForwardProps(reactiveOmit(props, "class"));
</script>

<template>
  <DialogDescription v-bind="forwarded" :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </DialogDescription>
</template>
