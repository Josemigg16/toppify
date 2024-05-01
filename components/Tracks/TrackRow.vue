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
    <article class="flex place-content-center p-3 w-[1000px] max-w-[90vw] bg-white dark:bg-[--spotify-gray] sm:h-40 h-24 mb-6 rounded mx-auto">
        <a :href="href" target="_blank" class="shadow-md min-w-20">
            <img class="sm:h-32 h-20 min-w-20" :src="image" :alt="image + ' image'">
        </a>
        <div class="flex justify-center items-center flex-grow overflow-hidden">
            <h3 class="text-xl overflow-hidden text-ellipsis text-nowrap px-1">{{ name }}</h3>
        </div>
    </article>
</template>