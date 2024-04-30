<script setup lang="ts">
const formStore = useFormStore()
const itemsStore = useItemsStore()
const { setShow } = formStore
const { setItems } = itemsStore
const { itemType, timeRange, limit } = storeToRefs(itemsStore)
const handleSubmit = () => {
    setShow(false)
    setItems({
        type: itemType.value,
        timeRange: timeRange.value,
        limit: limit.value
    })
}
</script>

<template>
    <form class="lg:w-[450px] space-y-6 dark:bg-[--spotify-gray] bg-white rounded-lg p-12 max-w-[90vw]"
        @submit.prevent="handleSubmit">
        <label for="item-type" class="text-3xl font-bold uppercase text-center block pb-3"> Choose your options</label>
        <select id="item-type" v-model="itemType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select item type</option>
            <option value="artists">Artists</option>
            <option value="tracks">Songs</option>
        </select>
        <select v-model="timeRange"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select time range</option>
            <option value="short_term">1 month</option>
            <option value="medium_term">6 months</option>
            <option value="long_term">12 months</option>
        </select>
        <div>
            <label for="steps-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select limit:
                {{
                    limit }}
            </label>
            <input id="steps-range" type="range" min="1" max="50" value="20" step="1"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                @input="e => limit = parseInt((e.target as HTMLInputElement).value)">
        </div>

        <button type="submit"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Go</button>

    </form>
</template>