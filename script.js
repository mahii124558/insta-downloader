function download() {
  let url = document.getElementById("url").value;
  if(url === "") {
    alert("Paste Instagram link");
    return;
  }

  let api = "https://saveig.app/api/ajaxSearch";

  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "q=" + encodeURIComponent(url)
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("result").innerHTML =
      "Download link generated (public content only)";
  });
}
