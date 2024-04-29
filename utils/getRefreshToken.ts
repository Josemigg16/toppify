import querystring from "querystring"

export async function getRefreshToken() {
  const config = useRuntimeConfig()
  const refreshToken = localStorage.getItem("refresh_token")
  const url = "https://accounts.spotify.com/api/token"

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: config.public.clientId,
    }),
  }
  const res = await fetch(url, payload)
  const data = await res.json()
  if (!data.access_token) return false
  localStorage.setItem("access_token", data.accessToken)
  localStorage.setItem("refresh_token", data.refreshToken)
}
