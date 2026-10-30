<script setup>
import { computed } from 'vue'
import { Calendar, Heart, MapPin } from '@lucide/vue'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const FALLBACK_IMAGE_BASE = 'https://mockimage.tw/photo/500x400/ffffff/000000/'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  onToggleFavorite: {
    type: Function,
    required: true,
  },
  onOpen: {
    type: Function,
    required: true,
  },
})

const imageUrl = computed(
  () => props.event.imageUrl || `${FALLBACK_IMAGE_BASE}${encodeURIComponent(props.event.title ?? 'evento')}`,
)

const dateLabel = computed(() => {
  const parsed = new Date(`${props.event.date}T00:00:00`)

  if (Number.isNaN(parsed.getTime())) return props.event.date

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(parsed)
})

function openEvent() {
  props.onOpen(props.event)
}

function toggleFavorite() {
  props.onToggleFavorite(props.event.id)
}

function handleKeydown(keyboardEvent) {
  // Ignora teclas disparadas por elementos internos (ex.: botão de favorito).
  if (keyboardEvent.target !== keyboardEvent.currentTarget) return

  if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
    keyboardEvent.preventDefault()
    openEvent()
  }
}
</script>

<template>
  <Card
    class="group h-full cursor-pointer gap-0 overflow-hidden py-0 transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-brand hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    role="button" tabindex="0" :aria-label="`Ver detalhes do evento ${props.event.title}`" @click="openEvent"
    @keydown="handleKeydown">
    <CardHeader class="relative h-40 overflow-hidden p-0 sm:h-45">
      <img
        class="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
        :src="imageUrl" :alt="props.event.title" width="500" height="400" loading="lazy" decoding="async" />

      <div
        class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div class="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-2 p-3">
        <span class="inline-block rounded bg-brand px-2 py-0.5 text-xs font-medium capitalize text-brand-foreground">
          {{ props.event.category }}
        </span>

        <Button type="button" variant="ghost" size="icon-sm"
          class="rounded-full border border-white/40 bg-white/90 text-brand shadow-sm hover:bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          :aria-label="props.isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
          :aria-pressed="props.isFavorite" @click.stop="toggleFavorite">
          <Heart class="size-4" :fill="props.isFavorite ? 'currentColor' : 'none'" aria-hidden="true" />
        </Button>
      </div>
    </CardHeader>

    <CardContent class="flex flex-col gap-1.5 p-3 sm:gap-2 sm:p-4">
      <CardTitle class="line-clamp-2 min-h-10 text-base leading-snug">
        {{ props.event.title }}
      </CardTitle>

      <div class="flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar class="size-3.5 shrink-0 text-brand" aria-hidden="true" />
        <span>
          {{ dateLabel }}<template v-if="props.event.time"> às {{ props.event.time }}</template>
        </span>
      </div>

      <div v-if="props.event.location" class="flex items-center gap-2 text-xs text-muted-foreground">
        <MapPin class="size-3.5 shrink-0 text-brand" aria-hidden="true" />
        <span class="line-clamp-1 min-w-0">{{ props.event.location }}</span>
      </div>
    </CardContent>
  </Card>
</template>
