<script setup lang="ts">
import { ref } from 'vue'

const config = useRuntimeConfig()
const redirect = ref(false)

onNuxtReady(async () => {
  const success = await getRefreshToken() as boolean
  redirect.value = success ? true : false
  if (redirect.value) window.location.replace(config.public.baseUrl)
  getTopArtist()
})


</script>

<template>
  <h1>dashboard</h1>
</template>