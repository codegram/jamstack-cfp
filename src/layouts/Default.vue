<template>
  <div class="container mx-auto my-8">
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
