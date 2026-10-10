<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <p class="header-title">Bem vindo a Pará Eventos</p>
      </nav>
    </div>
  </header>
</template>


<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: #353535;


}

.header {
  background-color: #cbe6ff;
  padding: .5rem 0;
  border-bottom: 1px solid #c4e2ff;
}

.header-title {
  font-size: var(--font-3xlarge);
  font-weight: 600;
  color: var(--primary-color);
  margin-left: .5rem;
  margin-bottom: 0;
}

.logo {
  height: 80px;
  margin-right: 1rem;
}
</style>
