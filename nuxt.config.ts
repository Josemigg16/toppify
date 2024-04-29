// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', "@nuxt/eslint"],
	runtimeConfig: {
		clientId: '',
		clientSecret: '',
		redirectUri: '',
		public: {
			clientId: '',
			baseUrl: '',
		}
	}
})