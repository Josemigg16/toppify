<script setup lang="ts">
import Form from '~/components/optionsForm.vue'
import ShowTracks from '~/components/Tracks/ShowTracks.vue'
import ShowArtists from '~/components/Artists/ShowArtists.vue';
refreshToken()

const formStore = useFormStore()
const itemsStore = useItemsStore()
const { show } = storeToRefs(formStore)
const { itemType } = storeToRefs(itemsStore)

</script>

<template>
  <main class="relative">
    <Form v-if="show" />
    <ShowTracks v-if="itemType === 'tracks' && !show" />
    <ShowArtists v-if="itemType === 'artists' && !show" />
  </main>
</template>
