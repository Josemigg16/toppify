<script setup lang="ts">
import ArtistCard from './ArtistCard.vue'
import GoBack from '~/components/GoBack.vue'
const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)
</script>
<template>
    <section class="w-screen p-24">
        <GoBack v-if="items.length > 0" />
        <section class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-content-center">
            <ArtistCard v-for="item, index in items" :key="index" :item="item" />
        </section>
    </section>
</template>