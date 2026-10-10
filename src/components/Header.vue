<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <p>A sua agenda de cultura e lazer na Região Metropolitana</p>
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
}

.logo {
  height: 80px;
  margin-right: 1rem;
}
</style>
