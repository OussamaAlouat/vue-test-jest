<template>
  <ul>
    <li v-for="message in messages" :key="message">
      {{message}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages']
}
</script>

<style>

</style>