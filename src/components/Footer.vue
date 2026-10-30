<script setup>
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const footerSections = [
  {
    title: 'Sobre a Pará Eventos',
    links: [
      { label: 'Quem somos', href: '#' },
      { label: 'Termos e Condições Gerais', href: '#' },
      { label: 'PARÁ EVENTOS no Pará', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Acessibilidade', href: '#' },
    ],
  },
  {
    title: 'Atendimento ao Cliente',
    links: [
      { label: 'Newsletter', href: '#' },
      { label: 'Mapa do Site', href: '#' },
      { label: 'Definição de Privacidade', href: '#' },
      { label: 'Assessoria de Imprensa', href: '#' },
    ],
  },
  {
    title: 'Mais PARÁ EVENTOS',
    links: [
      { label: 'Central de Ajuda / Fale Conosco', href: '#' },
      { label: 'Pontos de Venda e Retirada em Belém', href: '#' },
      { label: 'Formas de Pagamento', href: '#' },
      { label: 'Meia-Entrada', href: '#' },
      { label: 'Retirada de Ingressos por Terceiros', href: '#' },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', icon: '/src/assets/facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/src/assets/instagram.svg', href: '#' },
  { name: 'Twitter', icon: '/src/assets/twitter.svg', href: '#' },
]
</script>

<template>
  <footer class="mt-auto border-t bg-muted/60 text-foreground">
    <div class="container mx-auto px-4 mx-auto px-4 py-8">
      <nav aria-label="Rodapé" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 justify-between">
        <div v-for="section in footerSections" :key="section.title">
          <h3 class="mb-3 text-lg font-bold text-secondary-foreground">
            {{ section.title }}
          </h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in section.links" :key="link.label">
              <a :href="link.href"
                class="text-primary transition-colors hover:text-secondary-foreground hover:underline">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <Separator />

    <nav aria-label="Redes Sociais" class="py-3">
      <div class="container mx-auto px-4 mx-auto px-4">
        <ul class="flex items-center gap-2">
          <li v-for="social in socialLinks" :key="social.name">
            <Button variant="ghost" size="icon" as-child>
              <a :href="social.href" :aria-label="social.name">
                <img :src="social.icon" :alt="social.name"
                  class="h-6 w-6 brightness-0 saturate-100 invert-[30%] sepia-[26%] saturate-[6859%] hue-rotate-[201deg] brightness-[105%] contrast-[106%]" />
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mx-auto px-4 mx-auto px-4 py-2 pb-4">
      <small class="text-xs text-muted-foreground">
        &copy; 2024 Pará Eventos. Todos os direitos reservados.
      </small>
    </div>
  </footer>
</template>