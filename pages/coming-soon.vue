<template>
  <div id="app" class="coming-soon">
    <DecorativeStars />
    <Container>
      <Col>
        <TopSection>
          <Logotype />
          <h1>Coming soon.</h1>
          <Paragraph size="xl">
            There will be a superfast cryptocurrency exchanger with KYC and transparent commissions.
          </Paragraph>
          <EmailCard />
        </TopSection>
        <BottomSection>
          <Social />
<!--          <FooterLinks />-->
          <Paragraph size="sm" color="muted">
            © 2021 Beaver Dealer, All Rights Reserved.
          </Paragraph>
        </BottomSection>
      </Col>
    </Container>
  </div>
</template>

<script>
import themeSwitcher from "../plugins/themeSwitcher";

import Container from "../components/comingSoonPage/Container";
import Col from "../components/comingSoonPage/Col";
import TopSection from "../components/comingSoonPage/TopSection";
import BottomSection from "../components/comingSoonPage/BottomSection";
import Logotype from "../components/uiKit/Logotype";
import Paragraph from "../components/uiKit/Paragraph";
import Social from "../components/comingSoonPage/Social";
import FooterLinks from "../components/comingSoonPage/FooterLinks";
import EmailCard from "../components/comingSoonPage/EmailCard";
import DecorativeStars from "../components/comingSoonPage/DecorativeStars";

export default {
  name: "ComingSoon",
  components: {
    Container,
    Col,
    TopSection,
    BottomSection,
    Logotype,
    Paragraph,
    Social,
    FooterLinks,
    EmailCard,
    DecorativeStars
  },
  beforeMount: () => {
    themeSwitcher();
  },
  head: {
    title: "Beaver Dealer. Coming soon.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "There will be a superfast cryptocurrency exchanger with KYC and transparent commissions."
      }
    ]
  }
}
</script>

<style lang="scss">
@import "../styles/media";

.coming-soon {
  background: url("~/assets/images/comingsoon_background.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 120%;
}
</style>
