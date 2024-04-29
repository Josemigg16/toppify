export async function getRefreshToken() {
  const config = useRuntimeConfig()
  const refreshToken = localStorage.getItem("refresh_token") as string

  console.log(refreshToken)
  console.log(config.public.clientId)

  const res = await fetch('api/refresh?refresh_token=' + refreshToken)
  const data = await res.json()

  console.log(data)
  if (!data.access_token) return true
  localStorage.setItem("access_token", data.access_token)
  return false
}
