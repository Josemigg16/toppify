<script setup lang="ts">
import TrackRow from './TrackRow.vue'
import GoBack from '~/components/GoBack.vue'
const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)
</script>
<template>
    <section class="w-screen p-24 grid place-content-center">
        <GoBack />
        <section class="w-fit">
            <TrackRow v-for="item, index in items" :key="index" :item="item" />
        </section>
    </section>
</template>