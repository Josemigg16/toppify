<script setup lang="ts">
const route = useRoute()
const accessToken = route.query.access_token as | null | undefined
const refreshToken = route.query.refresh_token as | null | undefined
console.log(route.query)
window
if (typeof window !== 'undefined') {
  localStorage.setItem('access_token', accessToken || '')
  localStorage.setItem('refresh_token', refreshToken || '')
  await navigateTo('/dashboard')
}

</script>
