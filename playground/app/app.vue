<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <div>
    <NuxtLink
      :to="{
        name: 'admin-country-blogs',
        params: {
          country: 'uk',
        },
      }"
    >
      Users
    </NuxtLink>
    <NuxtLink
      :to="{
        name: 'admin-lang-users',
        params: {
          lang: 'en',
        },
      }"
    >
      Blogs
    </NuxtLink>
    <NuxtPage />
  </div>
</template>
