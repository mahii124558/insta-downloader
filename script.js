function download() {
  const url = document.getElementById("url").value.trim();

  if (!url) {
    alert("Instagram link paste karo");
    return;
  }

  const target = "https://snapinsta.app/?url=" + encodeURIComponent(url);
  window.open(target, "_blank");
}
