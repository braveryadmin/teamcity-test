<template>
  <div class="social">
    <a href="https://instagram.com/beaver__dealer?utm_medium=copy_link" target="_blank">
      <IconWrap>
        <InstagramIcon />
      </IconWrap>
    </a>
    <a href="https://www.youtube.com/channel/UCphGSfa_Pu-VhQMWpHpxQmg" target="_blank">
      <IconWrap>
        <YouTubeIcon />
      </IconWrap>
    </a>
    <a href="https://twitter.com/dealerbeaver?s=21" target="_blank">
      <IconWrap>
        <TwitterIcon />
      </IconWrap>
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
@import "../../../styles/media";
@import "../../../styles/variables";

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 48px;

  a {
    margin-left: 16px;
    margin-right: 16px;

    svg path {
      transition: fill 0.15s ease;
      fill: var(--theme__icon__primary);
    }

    &:hover {
      svg path {
        fill: var(--theme__icon__primary--hover);
      }
    }
  }

  @include xs-md() {
    margin-bottom: 40px;
  }
}
</style>
