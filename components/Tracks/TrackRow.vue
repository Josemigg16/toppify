<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
const { album, name, external_urls, } = props.item

const image = album.images[1].url
const href = external_urls.spotify
</script>

<template>
    <article class="flex place-content-center p-3 w-[1000px] bg-white dark:bg-[--spotify-gray] h-40 mb-6 rounded">
        <a :href="href" target="_blank" class="block h-fit shadow-md">
            <img class="h-32" :src="image" :alt="image + ' image'">
        </a>
        <div class="flex justify-center items-center flex-grow">
            <h3 class="text-xl">{{ name }}</h3>
        </div>
    </article>
</template>