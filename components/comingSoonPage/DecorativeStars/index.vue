<template>
  <div class="stars">
    <Star id="star-1" size="138" />
    <Star id="star-2" size="230" />
    <Star id="star-3" size="138" />
  </div>
</template>

<script>
import Star from "../../uiKit/Star";

export default {
  name: "DecorativeStars",
  components: {
    Star
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.stars {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > svg {
    @keyframes star {
      0% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(0, 40%, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }

    animation-name: star;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 4s;
  }

  #star-1 {
    position: absolute;
    animation-delay: 1s;
    animation-duration: 7s;
    top: 10%;
    left: 65%;

    @include md-lg() {
      left: 75%;
    }
  }

  #star-2 {
    position: absolute;
    top: 70%;
    right: 10%;
    animation-delay: 2s;
    animation-duration: 10s;

    @include md-lg() {
      right: 5%;
    }
  }

  #star-3 {
    position: absolute;
    top: 60%;
    left: 20%;
    animation-delay: 4s;
    animation-duration: 9s;

    @include md-lg() {
      left: 5%;
    }
  }

  @include xs-md() {
    display: none;
  }
}
</style>
