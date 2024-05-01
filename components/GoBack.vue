<script setup lang="ts">
const goBack = () => {
    navigateTo('/dashboard')
}
</script>
<template>
    <button type="button"
        class="bg-[--spotify-green] text-black py-2 px-3 block text-center rounded-3xl mb-12 text-2xl font-medium ml-auto mr-10 shadow-md hover:contrast-125 transition-all text-nowrap"
        @click="goBack">
        Go back
    </button>
</template>