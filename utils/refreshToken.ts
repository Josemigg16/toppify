import { ref } from 'vue'

export function refreshToken() {
	const config = useRuntimeConfig()
	const redirect = ref(false)

	onNuxtReady(async () => {
		const success = (await getRefreshToken()) as boolean
		redirect.value = success ? true : false
		if (redirect.value) navigateTo('/dashboard')
	})
}
