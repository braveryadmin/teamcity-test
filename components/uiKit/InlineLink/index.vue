<template>
  <a :href="href" class="inline-link">
    <slot />
    <ArrowRightIcon />
  </a>
</template>

<script>
import ArrowRightIcon from "~/assets/icons/ArrowRight.vue";

export default {
  name: "InlineLink",
  components: {
    ArrowRightIcon
  },
  props: {
    href: String
  }
}
</script>

<style lang="scss">
.inline-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: var(--theme__inline-link);
  cursor: pointer;
  text-decoration: underline;

  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: var(--theme__inline-link);
    }
  }

  &:hover {
    color: var(--theme__inline-link--hover);

    svg path {
      stroke: var(--theme__inline-link--hover);
    }
  }
}
</style>
