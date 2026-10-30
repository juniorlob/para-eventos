<script setup>
import { reactiveOmit } from "@vueuse/core";
import { DialogClose, useForwardProps } from "reka-ui";
import { cn } from "cn";

const props = defineProps({
  ...DialogClose.props,
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});

const forwarded = useForwardProps(reactiveOmit(props, "class"));
</script>

<template>
  <DialogClose v-bind="forwarded" :class="cn(props.class)">
    <slot />
  </DialogClose>
</template>
