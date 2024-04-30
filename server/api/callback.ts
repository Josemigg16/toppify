import querystring from 'querystring'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery(event)
	const code = (query.code ?? null) as string | null
	const state = query.state ?? null
	if (state === null) {
		event.node.res.writeHead(
			301,
			'/#' +
				querystring.stringify({
					error: 'state_mismatch'
				})
		)
		event.node.res.end()
	} else {
		const res = await fetch('https://accounts.spotify.com/api/token', {
			body: querystring.stringify({
				code,
				redirect_uri: config.redirectUri,
				grant_type: 'authorization_code'
			}),
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' + Buffer.from(config.clientId + ':' + config.clientSecret).toString('base64')
			},
			method: 'POST'
		})
		const data = await res.json()
		if (data.access_token) {
			event.node.res.writeHead(301, {
				location: config.public.baseUrl + '/auth?'
			})
			event.node.res.end()
		}
	}
})
