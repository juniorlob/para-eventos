<script setup>
import { DialogRoot, useForwardPropsEmits } from "reka-ui";

const props = defineProps({
  ...DialogRoot.props,
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});
const emits = defineEmits(DialogRoot.emits);

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>
