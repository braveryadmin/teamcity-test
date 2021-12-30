<template>
  <div class="navbar-section-block resources">
    <div class="inner">
      <div class="left">
        <div class="navbar-section-col">
          <span class="col-header">Resources</span>
          <div class="navbar-section-links">
            <a href="#">How to start</a>
            <a href="#">FAQ</a>
            <a href="#">Helpdesk</a>
          </div>
        </div>
        <div class="navbar-section-col">
          <span class="col-header">Learn</span>
          <div class="navbar-section-links">
            <a href="#">Blog</a>
            <a href="#">Education</a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="navbar-section-card-wrap">
          <div class="card-bg">
            <div class="navbar-section-card education">
              <Tag color="danger">Education</Tag>
              <span class="h4">Blockchain & Crypto crash course.</span>
            </div>
          </div>
        </div>
        <div class="navbar-section-card-wrap">
          <div class="card-bg">
            <div class="navbar-section-card blog">
              <Tag color="success">Blog</Tag>
              <span class="h4">Stay up to date with Beaver Dealer blog </span>
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

      .navbar-section-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex: 0 0 50%;

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
            white-space: nowrap;
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

        .card-bg {
          background: var(--theme__navbar-section__card__background);
          border-radius: 10px;
        }

        .navbar-section-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between !important;
          align-items: flex-start;
          height: 252px;
          padding: 24px;
          border-radius: 10px;

          &.education {
            background: url('~/assets/images/book.png');
          }

          &.blog {
            background: url('~/assets/images/megaphone.png');
          }

          .h4 {
            margin: 0;
            display: block;
          }
        }
      }
    }
  }
}
</style>
