<template>
  <div class="container mx-auto my-8 max-w-3xl p-5">
    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
