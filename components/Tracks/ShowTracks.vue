<script setup lang="ts">
import TrackRow from './TrackRow.vue'
import { ref } from 'vue';

const tracks = ref(await getTopItems('tracks'))
console.log(tracks)
</script>
<template>
    <section>
        <h2>Here are the songs</h2>
        <section>
            <TrackRow />
        </section>
    </section>
</template>