<template>
  <div class="index-footer">
    <Container>
      <Logotype />
      <div class="row">
        <div class="row-group row-group-1">
          <div class="footer-col company-col">
            <span class="col-header">Company</span>
            <a href="#">About</a>
            <a href="#">Supported  currencies</a>
            <a href="#">Press about us</a>
            <a href="#">Our partners</a>
            <a href="#">Reviews</a>
            <a href="#">Careers <Tag>Hire</Tag></a>
          </div>
          <div class="row-group-partners-support">
            <div class="footer-col">
              <span class="col-header">For Partners</span>
              <a href="#">For tokens</a>
              <a href="#">For wallets</a>
              <a href="#">For Exchanges</a>
              <a href="#">For services</a>
            </div>
            <div class="footer-col">
              <span class="col-header">Support</span>
              <a href="#">FAQ</a>
              <a href="#">Helpdesk</a>
              <a href="#">Blog</a>
              <a href="#">Course <Tag>Education</Tag></a>
            </div>
          </div>
        </div>
        <div class="row-group row-group-2">
          <div class="row-group-exchange">
            <div class="footer-col exchange-col-1">
              <span class="col-header">Exchange Pairs</span>
              <a href="#">Bitcoin price USD</a>
              <a href="#">1 Ethereum to GBP</a>
              <a href="#">ETH to GBP</a>
              <a href="#">ETH to USD</a>
              <a href="#">ETH to BTC</a>
              <a href="#">Bitcoin in GBP</a>
            </div>
            <div class="footer-col exchange-col-2">
              <a href="#">BTC Ripple</a>
              <a href="#">XRP ETH</a>
              <a href="#">XRP USD</a>
              <a href="#">Cardano USD</a>
              <a href="#">XRP BTC</a>
              <a href="#">LTC USD</a>
            </div>
          </div>
          <div class="footer-col">
            <span class="col-header">Legal</span>
            <a href="#">Terms of Use</a>
            <a href="/Privacy.pdf" download="Privacy and AML policy.pdf">Privacy and AML policy</a>
            <a href="#">For competent auth</a>
            <a href="#">For partners</a>
            <a href="#">AML/KYC</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <Paragraph size="sm">
          © 2021 Beaver Dealer, All Rights Reserved.
        </Paragraph>
        <div class="social-links">
          <a target="_blank" href="https://www.facebook.com/beaver.dealer">
            <FacebookIcon />
          </a>
          <a target="_blank" href="https://instagram.com/beaver__dealer?utm_medium=copy_link">
            <InstagramIcon />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCphGSfa_Pu-VhQMWpHpxQmg">
            <YouTubeIcon />
          </a>
          <a target="_blank" href="https://twitter.com/dealerbeaver?s=21">
            <TwitterIcon />
          </a>
        </div>
        <img
          class="gradient"
          src="~/assets/images/footer-gradient.png"
          alt="Gradient"
        />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../../uiKit/Container";
import Paragraph from "../../uiKit/Paragraph";
import Tag from "../../uiKit/Tag";
import Logotype from "~/assets/icons/Logotype";
import FacebookIcon from "~/assets/icons/FacebookIcon";
import InstagramIcon from "~/assets/icons/InstagramIcon";
import TwitterIcon from "~/assets/icons/TwitterIcon";
import YouTubeIcon from "~/assets/icons/YouTubeIcon";

export default {
  name: "Footer",
  components: {
    Container,
    Paragraph,
    Tag,
    Logotype,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon
  },
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style lang="scss">
@import "../../../styles/media";

[vs-theme='light'] .index-footer .gradient {
  opacity: 0.5;
}

.index-footer {
  border-top: solid 1px var(--theme__footer__border__color);
  padding-top: 90px;
  max-width: 100vw;
  overflow: hidden;

  .row {
    display: flex;
    flex-direction: row;

    .row-group {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex: 0 0 50%;

      .row-group-partners-support,
      .row-group-exchange {
        display: flex;
        flex-direction: row;
        flex: 0 0 66.66%;

        .footer-col {
          flex: 0 0 50%;
        }
      }

      .footer-col {
        flex: 0 0 33.33%;

        &.exchange-col-2 {
          padding-top: 58px;
        }

        .col-header {
          display: block;
          font-size: 18px;
          font-weight: 700;
          line-height: 28px;
          margin-bottom: 30px;
          color: var(--theme__text-color__headings);
        }

        a {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          margin-bottom: 35px;
          color: var(--theme__text-secondary__secondary);

          .tag {
            margin-left: 8px;
          }
        }
      }
    }
  }

  .copyright {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    padding: 30px 0;
    border-top: solid 1px var(--theme__footer__border__color);
    color: var(--theme-footer-copyright);
    z-index: 2;

    .gradient {
      position: absolute;
      width: 100%;
      top: -300%;
      left: -30%;
      z-index: 1;
      max-width: 100vw;
    }

    .social-links {
      a {
        margin-left: 32px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  @media all and (max-width: 1200px) {
    .row {
      .row-group {
        &.row-group-1,
        &.row-group-2 {
          .footer-col {
            flex: 0 0 50%;
          }
        }

        .row-group-partners-support,
        .row-group-exchange {
          flex: 0 0 50%;
          flex-direction: column;
          justify-content: flex-start;

          .footer-col {
            flex: auto;

            &.exchange-col-2 {
              padding-top: 0;
            }
          }
        }
      }
    }

    .copyright {
      .gradient {
        width: 200%;
        top: -200%;
        left: -40%;
      }
    }
  }

  @media all and (min-width: 769px) {
    .logo {
      display: none;
    }
  }

  @media all and (max-width: 768px) {
    padding-top: 48px;

    .row {
      align-items: flex-start;
      margin-top: 32px;

      .row-group {
        flex-direction: column;
        justify-content: flex-start;

        &.row-group-1,
        &.row-group-2 {
          flex-direction: column-reverse;

          .footer-col {
            flex: auto;
            margin-bottom: 10px;
          }
        }

        .footer-col {
          &.exchange-col-1 {
            margin-bottom: 0;
          }

          .col-header {
            margin-bottom: 20px;
          }

          a {
            font-size: 11px;
            line-height: 18px;
            margin-bottom: 20px;

            .tag {
              font-size: 11px;
              line-height: 18px;
              height: 20px;
            }
          }
        }
      }
    }

    .copyright {
      padding-top: 48px;
      padding-bottom: 40px;
      flex-direction: column-reverse;
      align-items: flex-start;

      .social-links {
        margin-bottom: 32px;
      }
    }

    .gradient {
      display: none;
    }
  }
}

</style>
