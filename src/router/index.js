import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Início' },
    },
    {
      path: '/quem-somos',
      name: 'quem-somos',
      component: () => import('@/views/pages/QuemSomosView.vue'),
      meta: { title: 'Quem Somos' },
    },
    {
      path: '/termos-e-condicoes-gerais',
      name: 'termos-e-condicoes-gerais',
      component: () => import('@/views/pages/TermosCondicoesView.vue'),
      meta: { title: 'Termos e Condições Gerais' },
    },
    {
      path: '/politica-de-privacidade',
      name: 'politica-de-privacidade',
      component: () => import('@/views/pages/PoliticaPrivacidadeView.vue'),
      meta: { title: 'Política de Privacidade' },
    },
    {
      path: '/seguranca',
      name: 'seguranca',
      component: () => import('@/views/pages/SegurancaView.vue'),
      meta: { title: 'Segurança' },
    },
    {
      path: '/sobre-os-eventos',
      name: 'sobre-os-eventos',
      component: () => import('@/views/pages/SobreEventosView.vue'),
      meta: { title: 'Sobre os Eventos' },
    },
    {
      path: '/assessoria-de-imprensa',
      name: 'assessoria-de-imprensa',
      component: () => import('@/views/pages/AssessoriaImprensaView.vue'),
      meta: { title: 'Assessoria de Imprensa' },
    },
    {
      path: '/politica-de-cancelamento-e-reembolso',
      name: 'politica-de-cancelamento-e-reembolso',
      component: () => import('@/views/pages/PoliticaCancelamentoView.vue'),
      meta: { title: 'Política de Cancelamento e Reembolso' },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/views/pages/ContatoView.vue'),
      meta: { title: 'Contato' },
    },
    {
      path: '/central-de-ajuda',
      name: 'central-de-ajuda',
      component: () => import('@/views/pages/CentralAjudaView.vue'),
      meta: { title: 'Central de Ajuda / Fale Conosco' },
    },
    {
      path: '/formas-de-pagamento',
      name: 'formas-de-pagamento',
      component: () => import('@/views/pages/FormasPagamentoView.vue'),
      meta: { title: 'Formas de Pagamento' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: 'Página não encontrada' },
    },
  ],
})

router.afterEach((to) => {
  const title = to.meta.title
  document.title = title ? `${title} | Pará Eventos` : 'Pará Eventos'
})

export default router
