<script setup>
import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>
  <PageTemplate title="Página não encontrada">
    <p>O endereço acessado não existe ou foi movido.</p>
    <RouterLink to="/"
      class="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-primary/90">
      Voltar para a home
    </RouterLink>
  </PageTemplate>
</template>
