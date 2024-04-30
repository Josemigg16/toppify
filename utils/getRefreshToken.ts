export async function getRefreshToken() {
	const refreshToken = localStorage.getItem('refresh_token') as string

	const res = await fetch('api/refresh?refresh_token=' + refreshToken)
	const data = await res.json()

	if (!data.access_token) return true
	localStorage.setItem('access_token', data.access_token)
	return false
}
