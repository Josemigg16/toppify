export interface ItemOptions {
	type: 'artists' | 'tracks'
	timeRange?: 'long_term' | 'medium_term' | 'short_term'
	limit?: number
}