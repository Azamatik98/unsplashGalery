<script setup>
import { RouterLink } from 'vue-router';
import IconFavorites from '../assets/icons/IconFavorites.vue';
import IconSearch from '../assets/icons/IconSearch.vue';
</script>

<template>
 <header>
  <div class="container">
    <div class="header_content">
      <RouterLink to="/">
        <img class="logo" src="./assets/icons/logo_art.svg" />
      </RouterLink>
      <nav>
        <RouterLink class="nav_link" to="/">
          <i>
            <IconSearch />
          </i>
          <span>Поиск</span>
        </RouterLink>
        <RouterLink class="nav_link" to="/favorites">
            <i>
              <IconFavorites />
            </i>
            <span>Избранное</span>
          </RouterLink>
      </nav>
    </div>
  </div>
 </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  place-items: center;
  padding: 20px 0;
  background-color: var(--vt-c-black);
  line-height: 1.5;
  width: 100%;
  max-height: 100vh;
}

.header__content {
  display: flex;
  place-items: center;
  justify-content: space-between;
}

.logo {
  display: block;
}

nav {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.nav {
  &__link {
    display: flex;
    align-items: center;
    color: var(--vt-c-white);

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 4px;
    }
  }
}

nav a.router-link-exact-active {
  color: #fff200;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
