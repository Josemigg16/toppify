<script setup lang="ts">
const { showForm, itemType } = defineProps<{
    itemType: string
    showForm: boolean
}>()
const handleSubmit = () => {
    itemType
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <h1>Choose your options</h1>
        <button type="submit">
            Go
        </button>
    </form>
</template>