<script setup lang="ts">
import Form from '~/components/optionsForm.vue'
import ShowTracks from '~/components/Tracks/ShowTracks.vue'
const showForm = ref(true)
const itemType = ref('' as 'tracks' | 'artist' | '')
refreshToken()
</script>

<template>
  <main>
    <h1>dashboard</h1>
    <Form v-if="showForm" :item-type="itemType" :show-form="showForm" />
    <ShowTracks v-if="itemType === 'tracks'" />

  </main>
</template>
