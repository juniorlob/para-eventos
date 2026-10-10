// Modelagem do objeto de evento — Issue #4 (Fase 2).
//
// Shape oficial do evento:
//   id, title, date, time, location, imageUrl, description
//
// A carga real dos 5 eventos catalogados de Belém entra na Issue #5.
// Aqui ficam amostras estruturais para validar o shape e plugar o
// estado reativo no `App.vue` sem dependência de backend.

export const EVENT_FIELDS = [
  "id",
  "title",
  "date",
  "time",
  "location",
  "imageUrl",
  "description",
]

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0
}

export function isValidEvent(event) {
  if (!event || typeof event !== "object") return false
  if (typeof event.id !== "string" && typeof event.id !== "number") return false
  if (String(event.id).trim().length === 0) return false
  return ["title", "date", "time", "location", "imageUrl", "description"].every(
    (field) => isNonEmptyString(event[field]),
  )
}

// Amostras estruturais (substituídas pelo catálogo real na Issue #5).
export const initialEvents = [
  {
    id: "sample-1",
    title: "Evento de exemplo 1",
    date: "2025-01-10",
    time: "19:00",
    location: "Local de exemplo 1",
    imageUrl: "https://placehold.co/800x450?text=Evento+1",
    description: "Descrição de exemplo para validar o shape do evento.",
  },
  {
    id: "sample-2",
    title: "Evento de exemplo 2",
    date: "2025-02-15",
    time: "20:30",
    location: "Local de exemplo 2",
    imageUrl: "https://placehold.co/800x450?text=Evento+2",
    description: "Segunda descrição de exemplo para validar a lista em memória.",
  },
  {
    id: "sample-3",
    title: "Evento de exemplo 3",
    date: "2025-03-20",
    time: "18:00",
    location: "Local de exemplo 3",
    imageUrl: "https://placehold.co/800x450?text=Evento+3",
    description: "Terceira descrição de exemplo para validar a renderização futura.",
  },
]
