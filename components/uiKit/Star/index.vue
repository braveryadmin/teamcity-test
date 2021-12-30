<template>
  <svg :id="id" class="star" :width="size ? size : '138'" :height="size ? size : '138'" viewBox="0 0 138 138"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M0 69C32.5269 69 48.7904 69 58.8952 79.1048C69 89.2096 69 105.473 69 138C69 105.473 69 89.2096 79.1048 79.1048C89.2096 69 105.473 69 138 69C105.473 69 89.2096 69 79.1048 58.8952C69 48.7904 69 32.5269 69 0C69 32.5269 69 48.7904 58.8952 58.8952C48.7904 69 32.5269 69 0 69Z" fill="#5925DC"/>
  </svg>
</template>

<script>
export default {
  name: "Star",
  props: {
    size: String,
    id: String
  }
}
</script>
