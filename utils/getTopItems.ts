export async function getTopItems(type: 'artists' | 'tracks') {
	const token = localStorage.getItem('access_token') as string
	const artists = fetch(`https://api.spotify.com/v1/me/top/${type}`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	})
	return artists
}
