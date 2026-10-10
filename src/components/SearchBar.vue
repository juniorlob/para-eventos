<script setup>

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

function onInput(event) {
  props.onSearch(event.target.value)
}
</script>

<template>
  <div class="search-bar">
    <input class="search-bar__input" type="text" placeholder="Buscar evento por título..." :value="modelValue"
      @input="onInput" />
  </div>
</template>

<style scoped>
.search-bar {
  padding: 16px 0 0;
}

.search-bar__input {
  width: 100%;
  font-size: var(--font-medium);
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.search-bar__input:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>
