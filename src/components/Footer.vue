<script setup></script>
<template>

  <footer class="footer">
    <div class="container">
      <nav class="footer-nav">
        <div>
          <p>Sobre a Pará Eventos</p>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Termos e Condições Gerais</a></li>
            <li><a href="#">PARÁ EVENTOS no Pará</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Acessibilidade</a></li>
          </ul>
        </div>
        <div>
          <p>Atendimento ao Cliente</p>
          <ul>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Mapa do Site</a></li>
            <li><a href="#">Definição de Privacidade</a></li>
            <li><a href="#">Assessoria de Imprensa</a></li>
          </ul>
        </div>
        <div>
          <p>Mais PARÁ EVENTOS</p>
          <ul>
            <li><a href="#">Central de Ajuda / Fale Conosco</a></li>
            <li><a href="#">Pontos de Venda e Retirada em Belém</a></li>
            <li><a href="#">Formas de Pagamento</a></li>
            <li><a href="#">Meia-Entrada</a></li>
            <li><a href="#">Retirada de Ingressos por Terceiros</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <nav class="social-media">
      <div class="container">
        <ul>
          <li><a href="#"><img src="/src/assets/facebook.svg" alt="Facebook"></a></li>
          <li><a href="#"><img src="/src/assets/instagram.svg" alt="Instagram"></a></li>
          <li><a href="#"><img src="/src/assets/twitter.svg" alt="Twitter"></a></li>
        </ul>
      </div>
    </nav>


    <div class="container copyright">
      <small>&copy; 2024 Para Eventos. Todos os direitos reservados.</small>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #ccc;
  margin-top: auto;
}

.footer-nav p {
  color: var(--secondary-color);
  font-weight: bold;
  font-size: var(--font-large);
  margin-bottom: 0.5rem;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 1rem 0;
}

@media (max-width: 576px) {
  .footer-nav {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

.footer-nav ul {
  list-style: none;
  padding: 0;

}

.footer-nav li {
  margin-bottom: 0.5rem;

}

.footer-nav a {
  text-decoration: none;
  color: var(--primary-color);
}

.footer-nav a:hover {
  color: var(--secondary-color);
}

.social-media {
  border-top: 1px solid #ccc
}

.social-media ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
}

.social-media img {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%) invert(30%) sepia(26%) saturate(6859%) hue-rotate(201deg) brightness(105%) contrast(106%);
}

.copyright {
  padding-block: .5rem;
}
</style>
