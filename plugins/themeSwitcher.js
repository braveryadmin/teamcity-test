export default () => {
  if (localStorage && localStorage.theme) {
    if (document.body.getAttribute("vs-theme") !== localStorage.theme) {
      document.body.removeAttribute("vs-theme");
      document.body.setAttribute("vs-theme", localStorage.theme);
    }
  }
}
