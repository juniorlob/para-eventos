<script setup>
const props = defineProps(["event", "onClose"])
</script>

<template>
  <div v-if="props.event" class="modal-overlay" @click="props.onClose">
    <div class="modal-dialog" @click.stop>
      <button type="button" class="modal-close" aria-label="Fechar detalhes" @click="props.onClose">
        ×
      </button>
      <img class="modal-cover"
        :src="props.event.imageUrl || `https://mockimage.tw/photo/500x400/ffffff/000000/${props.event.title}`"
        :alt="props.event.title" />
      <div class="modal-body">
        <span class="modal-category">{{ props.event.category }}</span>
        <h2 class="modal-title">{{ props.event.title }}</h2>
        <p class="modal-meta">{{ props.event.date }} às {{ props.event.time }}</p>
        <p class="modal-meta">{{ props.event.location }}</p>
        <p class="modal-description">{{ props.event.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-dialog {
  position: relative;
  background: #fff;
  border-radius: 8px;
  max-width: 560px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  font-size: var(--font-large);
  line-height: 1;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
}

.modal-cover {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  border-radius: 8px 8px 0 0;
}

.modal-body {
  padding: 16px 20px 20px;
}

.modal-category {
  display: inline-block;
  font-size: var(--font-small);
  color: #fff;
  background: var(--secondary-color);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 8px;
}

.modal-title {
  font-size: var(--font-large);
  color: var(--primary-color);
  margin: 0 0 8px;
}

.modal-meta {
  font-size: var(--font-medium);
  margin: 4px 0;
}

.modal-description {
  font-size: var(--font-medium);
  margin: 12px 0 0;
}
</style>
