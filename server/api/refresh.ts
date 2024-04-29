import querystring from "querystring"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const refresh_token = query.refresh_token as string

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(config.clientId + ":" + config.clientSecret).toString(
          "base64",
        ),
    },
  })
  const data = await res.json()
  return data
})
