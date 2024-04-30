<script setup lang="ts">
import ArtistCard from './ArtistCard.vue';
import { ref } from 'vue';

const tracks = ref(await getTopItems({
    type: 'artists'
}))
console.log(tracks)
</script>
<template>
    <section>
        <h2>Here are the songs</h2>
        <section>
            <ArtistCard />
        </section>
    </section>
</template>