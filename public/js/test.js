/**
 * topbar.io SDK test harness — wire this to your real SDK API when ready.
 */
(function () {
  const logEl = document.getElementById("log");

  function log(message) {
    const line = document.createElement("div");
    line.textContent = "[" + new Date().toISOString() + "] " + message;
    if (logEl) logEl.appendChild(line);
    console.log(message);
  }

  log("Test harness loaded.");

  // Example: after your SDK exposes a global, initialize here.
  // if (window.Topbar && typeof window.Topbar.init === "function") {
  //   window.Topbar.init({ /* ... */ });
  //   log("Topbar.init() called.");
  // } else {
  //   log("SDK not detected on window (add script tag or adjust global name).");
  // }

  document.getElementById("ping")?.addEventListener("click", function () {
    log("Ping clicked — hook SDK actions here.");
  });
})();
