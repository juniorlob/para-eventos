<script setup>
import { computed } from "vue"
import { Calendar, MapPin } from "@lucide/vue"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog"

const FALLBACK_IMAGE_BASE = "https://mockimage.tw/photo/500x400/ffffff/000000/"

const props = defineProps(["event", "onClose"])

const imageUrl = computed(
  () => props.event?.imageUrl || `${FALLBACK_IMAGE_BASE}${encodeURIComponent(props.event?.title ?? "evento")}`,
)

const dateLabel = computed(() => {
  if (!props.event) return ""

  const parsed = new Date(`${props.event.date}T00:00:00`)

  if (Number.isNaN(parsed.getTime())) return props.event.date

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsed)
})

function handleOpenChange(open) {
  if (!open) props.onClose()
}
</script>

<template>
  <Dialog :open="!!props.event" v-on:update:open="handleOpenChange">
    <DialogContent v-if="props.event"
      class="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-[560px] [&>button]:rounded-full [&>button]:bg-black/50 [&>button]:p-1.5 [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-black/70">
      <div class="relative overflow-hidden rounded-t-lg">
        <img class="h-56 w-full object-cover sm:h-64" :src="imageUrl" :alt="props.event.title" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span
          class="absolute bottom-3 left-4 rounded bg-brand-secondary px-2 py-0.5 text-xs font-medium capitalize text-brand-foreground">
          {{ props.event.category }}
        </span>
      </div>

      <div class="flex flex-col gap-3 p-4 sm:p-5">
        <DialogTitle class="text-xl font-semibold text-brand-primary sm:text-2xl">
          {{ props.event.title }}
        </DialogTitle>

        <div class="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <Calendar class="size-4 shrink-0 text-brand-secondary" aria-hidden="true" />
            <span>
              {{ dateLabel }}<template v-if="props.event.time"> às {{ props.event.time }}</template>
            </span>
          </div>
          <div v-if="props.event.location" class="flex items-center gap-2">
            <MapPin class="size-4 shrink-0 text-brand-secondary" />
            <span>{{ props.event.location }}</span>
          </div>
        </div>

        <DialogDescription v-if="props.event.description" class="text-sm leading-relaxed text-foreground">
          {{ props.event.description }}
        </DialogDescription>
      </div>
    </DialogContent>
  </Dialog>
</template>
