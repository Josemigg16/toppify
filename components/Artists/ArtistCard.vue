<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
const { external_urls, name, images } = props.item
const href = external_urls.spotify
const image = images[1].url

</script>

<template>
    <article class="bg-white dark:bg-[--spotify-gray] w-[300px] h-fit p-6 space-y-4 mx-auto mb-16">
        <picture class="grid place-content-center">
            <img class="h-60" :src="image" :alt="name + ' image'">
        </picture>
        <h3 class="text-xl font-semibold">{{ name }}</h3>
        <a target="_blank" class="bg-[--spotify-green] text-black p-2 block text-center rounded-3xl hover:contrast-125 transition-all" :href="href">Go to artist</a>
    </article>
</template>