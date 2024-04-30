export const useFormStore = defineStore('showForm', () => {
	const show = ref(true)
	const setShow = (newState: boolean) => show.value = newState
	return { show, setShow }
})

