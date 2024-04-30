// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@pinia/nuxt'],
	pinia: {
		storesDirs: ['./stores/**']
	},
	runtimeConfig: {
		clientId: '',
		clientSecret: '',
		redirectUri: '',
		public: {
			clientId: '',
			baseUrl: ''
		}
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Toppify',
			meta: [
				{
					name: 'description',
					content: 'This is an amazing web app for showing your spotify charts'
				}
			]
		}
	}
})
