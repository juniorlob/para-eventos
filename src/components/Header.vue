<script setup></script>

<template>
  <header class="header z-30">
    <div class="container">
      <nav class="navbar">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </nav>
    </div>
  </header>
</template>


<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #353535;


}

.header {
  background-color: #cbe6ff;
  padding: .5rem 0;
  border-bottom: 1px solid #c4e2ff;
  position: sticky;
  top: 0;
}

.header-title {
  font-size: var(--font-2xlarge);
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
