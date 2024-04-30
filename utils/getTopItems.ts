interface options {
	type: 'artists' | 'tracks'
	timeRange?: 'long_term' | 'medium_term' | 'short_term'
	limit?: number
}

export async function getTopItems({ type, timeRange = 'medium_term', limit = 20 }: options) {
	const token = localStorage.getItem('access_token') as string
	const artists = fetch(`https://api.spotify.com/v1/me/top/${type}`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	})
	return artists
}
