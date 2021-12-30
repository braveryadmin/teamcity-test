<template>
  <div class="select-wrap" :class="{isCountry: isCountry}" v-click-outside="closeDropdown">
    <div class="select-row">
      <div class="select-toggle" @click="openDropdown" :class="{hide: open}">
        <div class="crypto-wrap" v-if="selected">
          <img class="crypto-image" :src="selected.photo" />
          <div class="crypto-text">
            <span class="crypto-abb">{{selected.abb}}</span>
            <span class="crypto-label">{{selected.label}}</span>
          </div>
        </div>
        <img
          src="~/assets/icons/arrow-down.svg"
          alt="open-dropdown"
          class="caret-icon"
          :class="{opened: open}"
        />
      </div>
      <div class="select-filter" :class="{hide: !open}">
        <span class="input-label">Currency</span>
        <input
          :id="'select-filter-' + id"
          class="input"
          :value="filterValue"
          @input="setFilterValue"
          placeholder="Search currency"
        />
      </div>
      <div class="select-input">
        <span class="input-label">{{actionText}}</span>
        <input
          class="input"
          :value="sendValue"
          placeholder="0.00"
        />
      </div>
    </div>
    <div
      class="dropdown-menu"
      :class="{hide: !open}">
      <div
        v-for="(option, i) of filteredOptions"
        :key="i"
        @click="handleOptionChange(option, i)"
        class="crypto-wrap">
        <img class="crypto-image" :src="option.photo" />
        <div class="crypto-text">
          <span class="crypto-abb">{{option.abb}}</span>
          <span class="crypto-label">{{option.label}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
  name: "SelectComponent",
  data() {
    return {
      open: false,
      inputValue: "1.953",
      filterValue: null,
      id: null
    }
  },
  created() {
    this.value = this.options[this.currentOption];
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    sendValue: {
      type: Number,
      default: 1.953,
    },
    isInline: {
      type: Boolean,
      default: false,
    },
    isReceive: {
      type: Boolean,
      default: false,
    },
    isCountry: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    additionalInfo: {
      type: Boolean,
      default: true
    },
    currentOption: Number,
    currentOptionValue: String
  },
  methods: {
    handleOptionChange(option, i) {
      this.open = false;
      this.filterValue = null;

      this.$emit('input', option);
      this.$emit('onOptionChange', option.value, i);
    },
    closeDropdown() {
      if (this.open === true) {
        this.open = false;
        this.filterValue = null;
      }
    },
    openDropdown() {
      if (this.open === false) {
        this.open = true;
        this.filterValue = null;

        if (window.innerWidth > 768) {
          setTimeout(() => {
            document.getElementById('select-filter-' + this.id).focus();
          }, 10);
        }
      }
    },
    getOptionByValue(value) {
      for (let i = 0; i < this.options.length; i++) {
        if (value === this.options[i].value) {
          return this.options[i];
        }
      }

      return this.options[0];
    },
    setFilterValue() {
      const value = document.getElementById('select-filter-' + this.id).value;

      if (value.length > 0) {
        this.filterValue = value;
      } else {
        this.filterValue = null;
      }
    }
  },
  computed: {
    actionText: function () {
      return this.isReceive ? "You receive" : "You send";
    },
    actionCount: function () {
      return this.value.count;
    },
    selected() {
      return this.options.length > 0 ? this.getOptionByValue(this.currentOptionValue) : null
    },
    filteredOptions() {
      if (this.filterValue) {
        return this.options.filter((option) => {
          return (option.label.toLowerCase().indexOf(this.filterValue.toLowerCase()) + 1)
            || option.abb.toLowerCase().indexOf(this.filterValue.toLowerCase()) + 1;
        });
      } else {
        return this.options;
      }
    }
  },
  mounted() {
    this.id = this._uid;
  }
}
</script>

<style lang="scss">
.select-wrap {
  position: relative;
  background-color: var(--theme__card-exchanger__select);
  border-radius: 10px;
  padding: 22px 28px;
  margin-bottom: 16px;

  &.isCountry {
    .select-toggle {
      justify-content: space-between;
      width: 100%;
    }
  }

  .select-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input {
    font-size: 18px;
    line-height: 28px;
    background: transparent;
    border: none;
    color: var(--theme__text-color__primary);
    outline: none;
    max-width: 160px;
    //width: 100%;

    &::placeholder {
      color: var(--theme__card__muted);
    }

    @media all and (max-width: 768px) {
      max-width: 160px;
    }

    @media all and (max-width: 400px) {
      max-width: 80px;
    }
  }

  .input-label {
    width: auto;
    font-size: 14px;
    line-height: 24px;
    color: var(--theme__card__muted);
  }

  .select-input {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .input-label {
      text-align: right;
    }

    .input {
      text-align: right;
    }
  }

  .crypto-wrap {
    display: flex;
    align-items: center;

    .crypto-image {
      display: block;
      margin-right: 16px;
      width: 32px;
      height: 32px;
    }

    .crypto-text {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;

      span.crypto-abb {
        display: block;
        font-size: 18px;
        line-height: 28px;
        color: var(--theme__text-color__primary);
      }
      span.crypto-label {
        display: block;
        font-size: 14px;
        line-height: 24px;
        color: var(--theme__card__muted);
      }
    }
  }

  .select-toggle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &.hide {
      display: none;
    }

    .caret-icon {
      transition: all 0.25s ease;
      margin-left: 8px;

      &.opened {
        transform: rotate(180deg);
      }
    }
  }

  .select-filter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.hide {
      display: none;
    }
  }

  .dropdown-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    top: 80px;
    left: 12px;
    width: 224px;
    max-height: 256px;
    padding: 8px 0;
    background: var(--theme__card-exchanger__select);
    border: solid 1px var(--theme__card__border__color);
    opacity: 1;
    transition: all 0.25s ease;
    pointer-events: all;
    border-radius: 10px;
    z-index: 10000;

    &.hide {
      opacity: 0;
      pointer-events: none;
    }

    .crypto-wrap {
      padding: 8px 16px;
      cursor: pointer;

      &:hover {
        background: var(--theme__card-exchanger__select-hover);
      }
    }
  }

  @media all and (max-width: 768px) {
    padding: 12px;
    margin-bottom: 12px;

    .crypto-wrap {
      .crypto-text {
        span.crypto-abb {
          font-size: 16px;
          line-height: 28px;
        }
        span.crypto-label {
          font-size: 10px;
          line-height: 18px;
        }
      }
    }

    .select-filter {
      input {
        max-width: 144px;
      }
    }

    .input-label {
      font-size: 10px;
      line-height: 18px;
    }

    .input {
      font-size: 16px;
      line-height: 28px;
    }
  }
}
</style>
