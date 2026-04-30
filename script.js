console.log("ZNT carregado com sucesso");

const btn = document.querySelector(".download");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Download em breve");
  });
}
