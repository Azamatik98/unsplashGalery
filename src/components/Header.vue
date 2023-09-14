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

<style scoped>
</style>
