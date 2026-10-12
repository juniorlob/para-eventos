<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
  },
  selected: {
    type: String,
  },
  onSelect: {
    type: Function,
  },
})
</script>

<template>
  <div class="category-filter">
    <button type="button" class="category-filter__button"
      :class="{ 'category-filter__button--active': props.selected === 'Todos' }" @click="props.onSelect('Todos')">
      Todos
    </button>
    <button v-for="category in props.categories" :key="category" type="button" class="category-filter__button"
      :class="{ 'category-filter__button--active': props.selected === category }" @click="props.onSelect(category)">
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.category-filter__button {
  font-size: var(--font-medium);
  text-transform: capitalize;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: inherit;
  cursor: pointer;
}

.category-filter__button--active {
  border-color: var(--secondary-color);
  background: var(--secondary-color);
  color: #fff;
}
</style>
