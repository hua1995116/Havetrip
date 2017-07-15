<template>
  <div id="app">
    <header>
      <router-link :to="{ path: 'index' }">index</router-link>
      <router-link :to="{ path: 'show' }">show</router-link>
      <router-link :to="{ path: 'notes' }">notes</router-link>
      <router-link :to="{ path: 'person' }">person</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
