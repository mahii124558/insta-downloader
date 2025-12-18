function download() {
  const url = document.getElementById("url").value.trim();
  const result = document.getElementById("result");

  if (!url) {
    alert("Instagram link paste karo");
    return;
  }

  result.innerHTML = "⏳ Processing...";

  const api = "https://igdownloader.app/api/ajaxSearch";

  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "q=" + encodeURIComponent(url)
  })
    .then(res => res.json())
    .then(data => {
      if (!data || !data.data) {
        result.innerHTML = "❌ Download link nahi mila";
        return;
      }
      result.innerHTML = data.data;
    })
    .catch(() => {
      result.innerHTML = "❌ Error, baad mein try karo";
    });
}
