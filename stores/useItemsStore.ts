import type { ItemOptions } from '~/types'

export const useItemsStore = defineStore('items', () => {
	const itemType = ref<ItemOptions['type']>('artists')
	const timeRange = ref<ItemOptions['timeRange']>('medium_term')
	const limit = ref<ItemOptions['limit']>(20)
	const items = ref([])

	const setItemType = (newState: ItemOptions['type']) => (itemType.value = newState)
	const setTimeRange = (newState: ItemOptions['timeRange']) => (timeRange.value = newState)
	const setLimit = (newState: ItemOptions['limit']) => (limit.value = newState)
	const setItems = async ({ type, timeRange, limit }: ItemOptions) => {
		const fetchedItems = await getTopItems({ type, timeRange, limit })

		items.value = fetchedItems
	}

	return { itemType, timeRange, limit, items, setItemType, setTimeRange, setLimit, setItems }
})
