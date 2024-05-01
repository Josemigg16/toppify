import type { ItemOptions } from '~/types'

export async function getTopItems({ type, timeRange, limit }: ItemOptions) {
	const token = localStorage.getItem('access_token') as string
	const res = await fetch(
		'https://api.spotify.com/v1/me/top/' +
			`${type}?` +
			new URLSearchParams({
				time_range: timeRange || 'medium_term',
				limit: (limit ?? 20).toString()
			}).toString(),
		{
			headers: {
				Authorization: 'Bearer ' + token
			}
		}
	)
	const artists = await res.json()
	return artists?.items
}
