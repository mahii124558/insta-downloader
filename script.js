function download() {
  const url = document.getElementById("url").value.trim();

  if (!url) {
    alert("Instagram link paste karo");
    return;
  }

  // WORKING redirect (tested)
  const target = "https://snapinsta.to/?url=" + encodeURIComponent(url);
  window.open(target, "_blank");
}
