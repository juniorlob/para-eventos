import axios from "axios"

const baseURL = `${import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? ""}/api`

export class ApiError extends Error {
  constructor(message, { code = "UNKNOWN_ERROR", status = 0, cause } = {}) {
    super(message)
    this.name = "ApiError"
    this.code = code
    this.status = status
    this.cause = cause
  }
}

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: { Accept: "application/json" },
})

function toApiError(error) {
  if (axios.isAxiosError(error)) {
    const payload = error.response?.data
    const isTimeout = error.code === "ECONNABORTED"

    return new ApiError(
      payload?.error?.message ??
        (isTimeout
          ? "A API demorou para responder. Tente novamente."
          : "Não foi possível conectar à API."),
      {
        code: payload?.error?.code ?? (isTimeout ? "TIMEOUT" : "REQUEST_FAILED"),
        status: error.response?.status ?? 0,
        cause: error,
      },
    )
  }

  return new ApiError("Erro inesperado ao acessar a API.", { cause: error })
}

async function request(config) {
  try {
    const { data } = await api.request(config)

    return data
  } catch (error) {
    throw toApiError(error)
  }
}

export async function getEvents(params = {}) {
  const response = await request({ method: "GET", url: "/events", params })

  return {
    data: response.data ?? [],
    meta: response.meta,
  }
}

export async function getEventById(id) {
  const response = await request({
    method: "GET",
    url: `/events/${encodeURIComponent(id)}`,
  })

  return response.data
}

export async function getCategories() {
  const response = await request({ method: "GET", url: "/categories" })

  return response.data ?? []
}

export async function getFeaturedEvents() {
  const response = await request({
    method: "GET",
    url: "/events",
    params: { featured: true, limit: 100 },
  })

  return response.data ?? []
}
