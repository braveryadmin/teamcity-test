<template>
  <div class="footer-links">
    <a href="#">
      Terms of Use
    </a>
    <a href="#">
      Privacy Policy
    </a>
  </div>
</template>

<script>
import YouTubeIcon from "../../../assets/icons/YouTubeIcon";
import TwitterIcon from "../../../assets/icons/TwitterIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import IconWrap from "../../../components/uiKit/IconWrap";

export default {
  name: "Social",
  components: {
    IconWrap,
    YouTubeIcon,
    TwitterIcon,
    InstagramIcon
  }
}
</script>

<style lang="scss">
.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;

  a {
    color: var(--theme__text-color__secondary);
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
