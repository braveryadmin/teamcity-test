<template>
  <div class="navbar-section-block company">
    <div class="inner">
      <div class="left">
        <div class="navbar-section-col-group">
          <div class="navbar-section-col">
            <span class="col-header">Company</span>
            <div class="navbar-section-links">
              <a href="#">About</a>
              <a href="#">Supported  currencies</a>
              <a href="#">Press about us</a>
              <a href="#">Our partners</a>
            </div>
          </div>
          <div class="navbar-section-col">
            <div class="navbar-section-links">
              <a href="#">Reviews</a>
              <a href="#">Testimonials</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
        <div class="navbar-section-col">
          <span class="col-header">For partners</span>
          <div class="navbar-section-links">
            <a href="#">For tokens</a>
            <a href="#">For wallets</a>
            <a href="#">For exchanges</a>
            <a href="#">For services</a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="navbar-section-card-wrap">
          <div class="card-bg">
            <div class="navbar-section-card company-1">
              <span class="h4">Here’s what people have to say about us.</span>
            </div>
          </div>
        </div>
        <div class="navbar-section-card-wrap">
          <div class="card-bg">
            <div class="navbar-section-card company-2">
              <span class="h4">Read more about our company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../../uiKit/Tag";

export default {
  name: "Header",
  components: {
    Tag,
  },
}
</script>

<style lang="scss">
.navbar-section-block {
  position: absolute;
  top: 96px;
  left: -12px;
  right: -12px;
  background: var(--theme__card-gradient__wrapper);
  padding: 12px;
  z-index: 10000;
  border-radius: 28px;

  .inner {
    display: flex;
    flex-direction: row;
    min-height: 340px;
    background: var(--theme__card-exchanger__background);
    border-radius: 20px;

    .left {
      flex: 0 0 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 48px;

      .navbar-section-col-group {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex: 0 0 66.66%;

        .navbar-section-col {
          flex: 0 0 50%;

          &:last-child {
            padding-top: 60px;
          }
        }
      }

      .navbar-section-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex: 0 0 33.33%;
        padding-right: 16px;

        .col-header {
          display: block;
          font-size: 18px;
          font-weight: 700;
          line-height: 28px;
          margin-bottom: 32px;
          color: var(--theme__text-color__headings);
        }

        .navbar-section-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;

          a {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
            margin-bottom: 32px;
            text-decoration: underline;
            //white-space: nowrap;
            color: var(--theme__text-color__primary);

            .tag {
              margin-left: 8px;
            }
          }
        }
      }
    }

    .right {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-right: 48px;
      flex: 0 0 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;

      .navbar-section-card-wrap {
        flex: 0 0 50%;
        margin: 0;
        padding: 0 12px;
        display: block;

        .navbar-section-card {
          display: flex;
          flex-direction: column;
          //align-items: flex-end !important;
          height: 252px;
          padding: 24px;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          background-position: center !important;

          &.company-1 {
            justify-content: flex-end !important;
            background: url('~/assets/images/talk.png');
          }

          &.company-2 {
            justify-content: flex-end !important;
            background: url('~/assets/images/rocket.png');
          }

          .h4 {
            margin: 0;
            display: block;
          }
        }
      }
    }
  }

  @media all and (max-width: 1024px) {
    .inner {
      flex-direction: column !important;

      .left {
        padding: 0 40px;
        padding-top: 48px;

        .navbar-section-col {
          flex: 0 0 50%;
          padding: 0 12px;
        }
        .navbar-section-col-group {
          flex-direction: column;
          flex: 0 0 50%;

          .navbar-section-col {
            flex: 0 0 100%;

            &:last-child {
              padding-top: 0;
            }
          }
        }
      }

      .right {
        padding: 0 40px;
      }
    }
  }
}
</style>
