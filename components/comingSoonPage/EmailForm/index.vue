<template>
  <div class="form">
    <div class="input-group">
      <Label>Email</Label>
      <input type="text" id="email-input" placeholder="Enter your email" />
    </div>
    <Button @click.native="sendEmail">Notify me</Button>
  </div>
</template>

<script>
import Button from "../../uiKit/Button";
import Label from "../../uiKit/Label";
import config from "../../../config";

export default {
  name: "EmailForm",
  components: {
    Button,
    Label
  },
  methods: {
    async sendEmail() {
      const email = document.getElementById("email-input").value;

      if (email && email.length > 0 && this.validateEmail(email)) {
        try {
          const result = await this.$axios.$post(
            config.apiURL + "email/save/",
            {
              email
            }
          );

          if (result.status.error_code === 200) {
            this.$toast.success("Your email has been accepted");
          } else {
            this.$toast.error(result.status.error_message);
          }
        } catch (e) {
          this.$toast.error(e.message);
        }
      } else {
        this.$toast.error("Please enter valid email");
      }
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

.form {
  position: relative;
  margin-top: 20px;

  .input-group {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: var(--theme__card-primary__input__bg);
    margin-bottom: 0;
    height: 96px;
    padding: 22px 28px;

    .label {
      color: var(--theme__card-primary__muted-text);
    }

    input {
      padding:0;
      background: transparent;
      border: 0;
      font-size: 18px;
      line-height: 28px;
      margin-top: 4px;
      box-shadow: none;
      outline: none;
      color: var(--theme__card-primary__input__color);

      &::placeholder {
        color: var(--theme__card-primary__input__placeholder);
      }
    }

    @include xs-md() {
      margin-bottom: 20px;
      height: 72px;
      padding: 13px 12px;
    }
  }

  .button {
    background: var(--theme__card-primary__button__bg);
    position: absolute;
    height: 54px;
    width: auto;
    right: 28px;
    top: 21px;

    &:hover {
      background: var(--theme__card-primary__button__bg--hover);
    }

    @include xs-md() {
      position: static;
      width: 100%;
      height: 64px;
      font-weight: 500;
      right: 0;
      top: 0;
    }
  }
}
</style>
