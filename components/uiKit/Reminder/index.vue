<template>
  <div class="reminder">
    <div class="inner">
      <div id="countdown" @click="closePopup">
        <div id="countdown-number">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 7L17 17M7 17L17 7" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="circle-group">
          <svg class="circle-active">
            <circle r="18" cx="20" cy="20"></circle>
          </svg>
          <svg class="circle">
            <circle r="18" cx="20" cy="20"></circle>
          </svg>
        </div>
      </div>
      <img src='~/assets/images/popup.png' />
      <span class="h4">Blockchain & Crypto crash course.</span>
      <Button color="primary">Learn now</Button>
    </div>
  </div>
</template>

<script>
import Button from "../Button";

export default {
  components: {
    Button
  },
  name: "Reminder",
  methods: {
    closePopup() {
      this.$emit('onRemind', false)
    }
  },
  beforeDestroy() {
    clearInterval()
  },
  mounted() {
    let countdown = 30;

    setInterval(() => {
      if(--countdown <= 0) {
        this.closePopup()
        countdown = 30
      } else {
        countdown = countdown;
      }
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.reminder-sticky {
  position: fixed;
  bottom: 5%;
  right: 50%;
  transform: translate(50%, 0);
  z-index: 222222;
  width: 90%;

  @media screen and (min-width: 768px) {
    bottom: 2%;
    right: 2%;
    transform: translate(0, 0);
    height: auto;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.reminder {
  max-width: 264px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  background: var(--popup-bg);
  border-radius: 20px;

  img {
    max-height: 176px;
  }
}
.reminder-text {
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 156%;
  color: var(--white);
  margin-bottom: 16px;;
}
.reminder-buttom {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: var(--white);
}
#countdown {
  cursor: pointer;
  position: relative;
  margin: auto;
  height: 40px;
  width: 40px;
  text-align: center;

  #countdown-number {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;

    .icon {
      position: relative;
      top: 8px;
      right: 0px;
      width: 24px;
      height: 24px;
    }
  }
}



svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 113px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 2px;
  stroke: var(--primary-500);
  fill: none;
  animation: countdown 30s linear infinite forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 113px;
  }
}

[vs-theme='light'] .reminder .icon path {
  stroke: #9B8AFB;
}

.reminder {
  padding: 12px;
  border-radius: 28px;
  background: var(--popup-wrapper);

  .circle-group {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;

    .circle {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      transform: rotateY(-180deg) rotateZ(-90deg);
      z-index: 100;

      circle {
        stroke-dasharray: 113px;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        stroke-width: 2px;
        stroke: var(--popup-circle);
        fill: none;
      }
    }
    .circle-active {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      transform: rotateY(-180deg) rotateZ(-90deg);
      z-index: 1000;

      circle {
        stroke-dasharray: 113px;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        stroke-width: 2px;
        stroke: var(--popup-circle-active);
        fill: none;
        animation: countdown 30s linear infinite forwards;
      }
    }
  }

  .inner {
    border-radius: 20px;
    background: var(--popup-bg);
    padding: 20px;

    img {
      width: 100%;
    }

    .h4 {
      display: block;
      color: var(--white) !important;
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      background: var(--popup-button);
    }
  }
}
</style>
