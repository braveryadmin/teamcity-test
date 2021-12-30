<template>
  <div class="logo-mobile">
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4204 15.88L6.8129 12.4931V6.8129H16.4715C18.9154 6.8129 21.231 7.78936 22.9552 9.51351C24.6793 11.2377 25.6558 13.5588 25.6558 15.9972C25.6558 18.4412 24.6793 20.7568 22.9552 22.4865C21.231 24.2106 18.9099 25.1871 16.4715 25.1871H6.8129V19.4455L3.4204 16.0586L0 19.4511V32H16.4715C20.7289 32 24.7686 30.3093 27.7761 27.3018C30.7836 24.2943 32.4743 20.2546 32.4743 16.0028C32.4743 11.7454 30.7836 7.70567 27.7761 4.70375C24.763 1.69067 20.7233 0 16.4715 0H0V12.4931L3.4204 15.88Z" fill="#7A5AF8"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LogotypeMobile",
}
</script>

<style lang="scss">
.logo-mobile {
  display: none;

  @media all and (max-width: 768px) {
    display: block;
  }
}
</style>
