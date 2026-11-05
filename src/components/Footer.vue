<script setup>
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import facebookIcon from '@/assets/facebook.svg'
import instagramIcon from '@/assets/instagram.svg'
import twitterIcon from '@/assets/twitter.svg'

const footerSections = [
  {
    title: 'Sobre a Pará Eventos',
    links: [
      { label: 'Quem somos', to: { name: 'quem-somos' } },
      { label: 'Termos e Condições Gerais', to: { name: 'termos-e-condicoes-gerais' } },
      { label: 'Política de Privacidade', to: { name: 'politica-de-privacidade' } },
      { label: 'Segurança', to: { name: 'seguranca' } },
      { label: 'Sobre os Eventos', to: { name: 'sobre-os-eventos' } },
    ],
  },
  {
    title: 'Atendimento ao Cliente',
    links: [
      { label: 'Assessoria de Imprensa', to: { name: 'assessoria-de-imprensa' } },
      { label: 'Política de Cancelamento e Reembolso', to: { name: 'politica-de-cancelamento-e-reembolso' } },
      { label: 'Contato', to: { name: 'contato' } },
    ],
  },
  {
    title: 'Mais PARÁ EVENTOS',
    links: [
      { label: 'Central de Ajuda / Fale Conosco', to: { name: 'central-de-ajuda' } },
      { label: 'Formas de Pagamento', to: { name: 'formas-de-pagamento' } },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon, href: '#' },
  { name: 'Instagram', icon: instagramIcon, href: '#' },
  { name: 'Twitter', icon: twitterIcon, href: '#' },
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
              <RouterLink :to="link.to"
                class="text-primary transition-colors hover:text-secondary-foreground hover:underline"
                active-class="font-semibold text-secondary-foreground">
                {{ link.label }}
              </RouterLink>
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