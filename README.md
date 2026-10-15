# ParáEventos

A sua agenda cultural e de lazer na Região Metropolitana.

## Sobre o projeto
Aplicação simples para consultar eventos culturais, gastronômicos, esportivos e de entretenimento em Belém e Ananindeua, no Pará. Desenvolvida como trabalho da disciplina de Frontend, no primeiro semestre do curso de ADS.

## Como executar
1. Baixe ou clone este repositório
2. Abra o terminal na pasta do projeto
3. Execute:
   ```bash
   npm install
   npm run dev
   ```
4. Acesse o link que aparece no terminal (geralmente http://localhost:5173)

## O que a aplicação faz
- Lista eventos com foto, título, data, hora e local
- Busca por nome do evento
- Favoritos: marque os eventos que mais te interessam
- Filtro por tipo (Show, Teatro, Culinário, Museu, Palestras, Religioso)
- Detalhes do evento ao clicar no card

## Documento de requisitos
O desenvolvimento seguiu o documento de requisitos da disciplina:  
https://docs.google.com/document/d/e/2PACX-1vS44xzjsYP0xMKYM-nQROwIpYCS0HmV21Dp0oaV2hA2dGt8UWOgWb8PIUp6DJdoGX_mp8TGQdP53BIo/pub

## Ferramentas e método
- **Vue 3 + Vite**: construção da aplicação
- **CSS puro**: estilização, sem frameworks como Bootstrap ou Tailwind
- **GitHub LiveShare**: programação em par, desenvolvido ao vivo entre os integrantes
- **GitHub Projects**: board de tarefas para organizar as etapas do projeto

## Repositório e colaboração
Projeto desenvolvido em conjunto por todos os integrantes da equipe, com colaboração via GitHub. Todo o trabalho foi feito através de Pull Requests, que podem ser verificadas no histórico de commits e PRs do repositório.

Alguns padrões de estilo (BEM) podem ter sido utilizados de forma livre, fugindo um pouco do padrão rígido, pois o foco foi o aprendizado dos fundamentos de Vue.

## Vídeo de apresentação
O vídeo de pitch (máximo 5 minutos) será entregue em anexo para o professor, conforme exigido na entrega da atividade.

## Requisitos atendidos
- Aplicação One Page (sem navegação entre páginas)
- Sem Vue Router
- Sem bibliotecas externas de componentes ou CSS
- Pelo menos 4 componentes em arquivos .vue utilizados no App.vue
- Uso de <script setup>, props, ref(), eventos (@click, @input) e diretivas (v-if, v-show, v-for, v-model)
- Reúso de componentes
- Estrutura organizada de pastas
