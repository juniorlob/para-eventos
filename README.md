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
O desenvolvimento seguiu o documento de requisitos do projeto:
https://docs.google.com/document/d/e/2PACX-1vS44xzjsYP0xMKYM-nQROwIpYCS0HmV21Dp0oaV2hA2dGt8UWOgWb8PIUp6DJdoGX_mp8TGQdP53BIo/pub

## Prompts utilizados com IA
Abaixo estão os prompts utilizados nesta tarefa:

**Prompt 1 – Lista de eventos e descrição dos banners:**

```
1- Crie uma lista de eventos para o projeto Pará Eventos, contemplando categorias como shows, teatro, museus, palestras, eventos religiosos e culinários. Para cada evento, mantenha exatamente a estrutura JavaScript já utilizada no projeto, com os campos id, title, category, date, time, location e description. Utilize locais do Pará, datas variadas e descrições curtas e naturais, sem alterar a estrutura dos objetos já existentes.
Além da lista geral de eventos, selecione 5 eventos principais que serão utilizados como banners de destaque na página inicial. Esses cinco eventos devem ser diferentes entre si e representar categorias variadas.
Para cada um dos 5 eventos de banner, informe também uma descrição visual da imagem, baseada diretamente no evento criado. A descrição deve explicar o cenário, ambiente, personagens, iluminação, cores, elementos principais e clima visual que a imagem deverá transmitir.
Organize a resposta desta forma:
Banner 1
Evento: título do evento
Categoria: categoria
Descrição da imagem: descrição detalhada da cena que representa esse evento.
Banner 2
Evento: título do evento
Categoria: categoria
Descrição da imagem: descrição detalhada da cena que representa esse evento.
Repita o mesmo padrão até o Banner 5.
As descrições das imagens devem ser coerentes com o título, categoria e local de cada evento, com estilo visual moderno, realista, vibrante e relacionado à cultura e ao lazer no Pará. Não inserir textos, datas, títulos, logotipos ou botões dentro das imagens.
```

**Prompt 2 – Conteúdo do projeto web Pará Eventos:**

```
2- Crie o conteúdo do projeto web *Pará Eventos*, mantendo uma identidade visual moderna, vibrante e inspirada na cultura e no lazer do Pará.

Gere os *5 banners principais* do projeto, sem textos, datas, logotipos ou botões inseridos nas imagens, representando os seguintes eventos:

1. *Show Nacional – Verão Amazônico 2025* — grande show no Estádio Mangueirão, com palco iluminado, público e clima de festival.
2. *Espetáculo Amazônia em Cena* — apresentação teatral no Theatro da Paz, com iluminação dramática e referências à cultura amazônica.
3. *Festival Gastronômico Sabores do Pará* — evento com pratos típicos paraenses, chefs e ambiente gastronômico.
4. *Exposição Raízes da Amazônia* — exposição em ambiente de museu com cerâmicas marajoaras, artefatos indígenas e elementos culturais amazônicos.
5. *Palestra: Cultura Paraense – História e Tradições* — auditório com palestrante e elementos relacionados ao Círio de Nazaré, carimbó, folclore e tradições do Pará.

Crie também a lista de eventos do projeto seguindo exatamente a estrutura JavaScript:

id, title, category, date, time, location e description.

Utilize categorias como show, Religioso, teatro, culinario, museu e palestras, mantendo descrições curtas, naturais e locais relacionados ao Pará.

Além disso, gere imagens individuais para os cards dos seguintes eventos:

*Shows:* Show Nacional – Verão Amazônico 2025, Festival de Verão 2027, Noite do Samba e Pagode e Festival Musical de Carnaval.

*Religiosos:* Encontro de Fé e Esperança, Festival de Música Gospel e Congresso de Renovação Espiritual.

*Teatro:* Espetáculo Amazônia em Cena, O Mistério do Teatro Antigo, As Aventuras do Pequeno Sonhador e Comédia: Família em Apuros.

*Culinários:* Festival Gastronômico Sabores do Pará, Festival Gastronômico de Verão, Sabores da Amazônia e Festival de Comida de Rua.

*Museus:* Exposição Raízes da Amazônia, Exposição Memórias da Cidade, Arte e Cultura Amazônica e Museu Interativo: Ciência e Tecnologia.

*Palestras:* Palestra: Cultura Paraense – História e Tradições, Inteligência Artificial e o Futuro, Empreendedorismo Digital em 2027 e Marketing, Redes Sociais e Criatividade.

Todas as imagens devem manter o mesmo padrão de qualidade, proporção e identidade visual, com estilo realista ou cinematográfico, boa iluminação e composição moderna, sem inserir textos, datas ou logotipos diretamente nas imagens.
```

## Ferramentas e método
- **Vue 3 + Vite**: construção da aplicação
- **CSS puro**: estilização, sem frameworks como Bootstrap ou Tailwind
- **GitHub LiveShare**: programação em par, desenvolvido ao vivo entre os integrantes
- **GitHub Projects (Board de tarefas)**: https://github.com/users/juniorlob/projects/3/views/1 — board para organizar as etapas do projeto

## Repositório e colaboração
Projeto desenvolvido em conjunto por todos os integrantes da equipe com colaboração via LiveShare. Todo o trabalho foi feito através de Pull Requests e issues, que podem ser verificadas no histórico de commits, PRs do repositório e tarefas no projeto.

Alguns padrões de estilo BEM para css podem ter sido utilizados de forma livre, fugindo um pouco do padrão rígido, pois o foco foi o aprendizado dos fundamentos de Vue.

## Vídeo de apresentação
O vídeo será entregue em anexo para o professor, conforme exigido na entrega da atividade.

## Requisitos atendidos
- [x] Aplicação One Page
- [x] Sem Vue Router
- [x] Sem bibliotecas externas de componentes ou CSS
- [x] Pelo menos 4 componentes em arquivos .vue utilizados no App.vue
- [x] Uso de <script setup>, props, ref(), eventos (@click, @input) e diretivas (v-if, v-show, v-for, v-model)
- [x] Reúso de componentes
- [x] Estrutura organizada de pastas
