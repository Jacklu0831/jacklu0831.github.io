(function () {
  var originalTitle;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      originalTitle = originalTitle || document.title;
      document.title = "(╯°□°）╯ come back";
    } else if (originalTitle) {
      document.title = originalTitle;
    }
  });
})();
