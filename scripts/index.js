var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "data.json",
});
animation.setSpeed(10);

const others = document.getElementById("others");
for (let index = 0; index !== 100_000; ++index) {
  const child = document.createElement("div");
  child.innerText = String(index);
  others.appendChild(child); // just pushing children for larger dom (closer to real apps)
}
