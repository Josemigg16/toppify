<template>
  <h1>dashboard</h1>
</template>

<script setup lang="ts">
import { getRefreshToken } from '~/utils/getRefreshToken'

const redirectUser = getRefreshToken()

</script>F