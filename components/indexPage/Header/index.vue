<template>
  <Container>
    <div class="navbar-header">
      <div class="left">
        <Logotype />
        <LogotypeMobile />
        <img
          class="mobile-menu-toggle"
          src="~/assets/icons/menu-icon.svg"
          alt="menu"
          @click="openedSidebar = true; disableBodyScroll()"
        />
        <div class="divider" />
        <nav>
          <div class="navbar-section">
            <a href="#">Products</a>
          </div>
          <div class="navbar-section" :class="{active: openedSection === 'Company'}">
            <a href="#" @click="openedSection === 'Company' ? openedSection = null : openedSection = 'Company'">
              Company
              <img
                src="~/assets/icons/arrow-down.svg"
                alt="Company"
              />
            </a>
            <div class="dropdown" :class="{hide: openedSection !== 'Company'}">
              <NavbarSectionCompany />
            </div>
          </div>
          <div class="navbar-section"><a href="#">Fees</a></div>
          <div class="navbar-section" :class="{active: openedSection === 'Resources'}">
            <a href="#" @click="openedSection === 'Resources' ? openedSection = null : openedSection = 'Resources'">
              Resources & Learn
              <img
                src="~/assets/icons/arrow-down.svg"
                alt="Company"
              />
            </a>
            <div class="dropdown" :class="{hide: openedSection !== 'Resources'}">
              <NavbarSectionResources />
            </div>
          </div>
        </nav>
      </div>
      <div class="right">
        <div class="theme-toggle" @click="changeTheme">
          <img
            src="~/assets/icons/light-theme.svg"
            alt="Light theme"
            class="toggle-light"
          />
          <img
            class="toggle-dark"
            src="~/assets/icons/dark-theme.svg"
            alt="Dark theme"
          />
        </div>
        <Button color="primary">Exchange now</Button>
        <Button>Sign In</Button>
      </div>
    </div>
    <div class="sidebar" :class="{opened: openedSidebar}">
      <Container>
        <div class="sidebar-header">
          <Logotype />
          <img
            class="mobile-menu-toggle"
            src="~/assets/icons/close.svg"
            alt="menu"
            @click="openedSidebar = false; openedSection = null; enableBodyScroll()"
          />
        </div>
        <div class="sidebar-body">
          <div class="navbar-section">
            <a href="#">Products</a>
          </div>
          <div
            class="navbar-section expanded"
            :class="{opened: openedSection === 'Company'}"
            @click="openedSection === 'Company' ? openedSection = null : openedSection = 'Company'">
            <a href="#">Company</a>
            <NavbarSectionCompany />
          </div>
          <div class="navbar-section">
            <a href="#">Fees</a>
          </div>
          <div
            class="navbar-section expanded"
            :class="{opened: openedSection === 'Resources'}"
            @click="openedSection === 'Resources' ? openedSection = null : openedSection = 'Resources'">
            <a href="#">Resources</a>
            <NavbarSectionResources />
          </div>
        </div>
        <div class="sidebar-footer">
          <Button color="primary">Exchange now</Button>
          <Button>Sign In</Button>
        </div>
      </Container>
    </div>
    <div
      class="backdrop"
      :class="{opened: !!openedSection}"
      @click="openedSection = null"
    />
  </Container>
</template>

<script>
import Button from "../../uiKit/Button";
import Tag from "../../uiKit/Tag";
import Container from "../../uiKit/Container";
import Logotype from "~/assets/icons/Logotype";
import LogotypeMobile from "~/assets/icons/LogotypeMobile";
import NavbarSectionResources from "./NavbarSectionResources";
import NavbarSectionCompany from "./NavbarSectionCompany";
import {store, mutations} from "~/store";

export default {
  name: "Header",
  components: {
    Button,
    Container,
    Tag,
    Logotype,
    LogotypeMobile,
    NavbarSectionResources,
    NavbarSectionCompany
  },
  data: () => ({
    theme: "dark",
    openedSection: null,
    openedSidebar: false
  }),
  methods: {
    disableBodyScroll: () => {
      document.querySelector("body").classList.add("disable-scroll");
    },
    enableBodyScroll: () => {
      document.querySelector("body").classList.remove("disable-scroll");
    },
    changeTheme: () => {
      if (process.browser) {
        let current;
        let theme;

        if (localStorage && localStorage.theme) {
          current = localStorage.theme;
        } else {
          current = document.querySelector("body").getAttribute("vs-theme");
        }

        theme = current === "light" ? "dark" : "light";;

        localStorage.theme = theme;
        mutations.setTheme(theme);
        document.querySelector("body").setAttribute("vs-theme", theme);
      }
    }
  }
}
</script>

<style lang="scss">
.disable-scroll {
  overflow: hidden;
}

[vs-theme='dark'] .theme-toggle .toggle-dark {
  display: none !important;
}
[vs-theme='dark'] .theme-toggle .toggle-light {
  display: block !important;
}
[vs-theme='light'] .theme-toggle .toggle-dark {
  display: block !important;
}
[vs-theme='light'] .theme-toggle .toggle-light {
  display: none !important;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  background: var(--theme-backdrop);
  transition: all 0.25s ease;

  &.opened {
    opacity: 1;
    pointer-events: all;
  }
}

.navbar-header {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  z-index: 1500;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;

    .mobile-menu-toggle {
      padding: 16px;
      display: none;
      margin-left: 8px;
      cursor: pointer;
    }

    .divider {
      width: 1px;
      height: 36px;
      background: var(--theme__footer__border__color);
      margin-left: 32px;
      margin-right: 16px;
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      .navbar-section {
        .dropdown {
          opacity: 1;
          transition: all 0.25s ease;
          pointer-events: all;

          &.hide {
            opacity: 0;
            pointer-events: none;
          }
        }

        &.active {
          & > a {
            color: var(--theme__navbar-link-color-active);

            img {
              transform: rotate(180deg);
            }
          }
        }

        & > a {
          color: var(--theme__navbar-link-color);
          cursor: pointer;
          font-size: 16px;
          line-height: 16px;
          padding: 16px;
          white-space: nowrap;

          &:hover {
            color: var(--theme__navbar-link-color-active);
          }
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;

    .theme-toggle {
      padding: 12px;
      cursor: pointer;
      margin-right: 24px;
    }

    & > :last-child {
      margin-left: 24px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 16px 0;

    .left {
      .logo {
        margin-right: 24px
      }
      .divider {
        display: none;
      }

      nav {
        .navbar-section {
          & > a {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      }
    }

    .right {
      .theme-toggle {
        padding: 12px;
        cursor: pointer;
        margin-right: 8px;
      }

      :nth-child(2) {
        display: none;
      }

      :nth-child(3) {
        margin-left: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 8px 0;

    .left {
      .mobile-menu-toggle {
        display: block;
      }

      .logo, .divider, nav {
        display: none;
      }
    }
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--theme__card-exchanger__background);
  z-index: 10000;
  transform: translateX(-100%);
  transition: all 0.25s ease;
  display: none;

  &.opened {
    transform: translateX(0%);
  }

  .sidebar-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;

    .mobile-menu-toggle {
      padding: 16px;
      cursor: pointer;
    }
  }

  .sidebar-body {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 64px;
    overflow-y: scroll;

    .navbar-section {
      height: 50px;
      overflow: hidden;
      margin-top: 16px;

      &.opened {
        height: auto;

        & > a {
          color: var(--theme__inline-link) !important;

          &:after {
            transform: rotate(-180deg);
          }
        }
      }

      &.expanded {
        & > a {
          &:after {
            content: "";
            display: block;
            width: 24px;
            height: 24px;
            background: url("~/assets/icons/arrow-down.svg");
            transition: all 0.25s ease;
          }
        }
      }

      & > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 24px;
        font-weight: 700;
        line-height: 26px;
        padding: 12px 16px;
        color: var(--theme__navbar-section__card__sidebar__text__color);
      }

      .navbar-section-block {
        position: static;
        background: transparent;
        padding: 8px 0;
        border-radius: 0;

        .inner {
          flex-direction: column;
          align-items: flex-start;
          background: transparent;
          border-radius: 0;

          .left, .right {
            padding: 0;
          }

          .left {
            flex-direction: column;
            padding: 0 16px;

            .col-header {
              margin-bottom: 20px;
            }

            .navbar-section-col-group {
              margin-bottom: 32px;
              display: flex;
              flex-direction: column;

              .navbar-section-col {
                margin-bottom: 0;
              }
            }

            .navbar-section-col {
              margin-bottom: 32px;
              padding: 0;

              .navbar-section-links {
                flex-direction: row;
                flex-wrap: wrap;

                a {
                  margin-right: 40px;
                  margin-bottom: 20px;
                  font-size: 14px;
                  line-height: 12px;
                }
              }
            }
          }

          .right {
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            width: 100%;
            padding-left: 8px;

            &::-webkit-scrollbar {
              display: none;
            }

            .navbar-section-card-wrap {
              flex: auto;
              width: 90vw;
              min-width: 90vw;
              padding: 0 8px;
            }
          }
        }
      }
    }
  }

  .sidebar-footer {
    position: fixed;
    padding: 8px;
    bottom: 0;
    left: 0;
    padding-left: 16px;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--theme__card-exchanger__background);

    .theme-toggle {
      padding: 12px;
      cursor: pointer;
      margin-right: 8px;
    }

    & > :last-child {
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
}
</style>
