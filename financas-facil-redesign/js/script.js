/* Finanças Fácil - script.js
   Busca no cabeçalho, filtro do glossário, demonstração do formulário de contato,
   conversor R$/US$ e persistência de rascunho do formulário em localStorage.
   A duplicação dos itens da faixa de cotações permite que ela role em loop contínuo. */
function searchSite(e) {
  e.preventDefault();
  let q = document.getElementById("searchInput").value.trim();
  if (q) location.href = "ultimas.html?q=" + encodeURIComponent(q);
  return false;
}
const CONTATO_STORAGE_KEY = "ff_contato_rascunho";
const contactFieldIds = ["contactNome", "contactEmail", "contactAssunto", "contactMensagem"];
function salvarRascunhoContato() {
  const dados = {};
  contactFieldIds.forEach(function (id) {
    const campo = document.getElementById(id);
    if (campo) dados[id] = campo.value;
  });
  localStorage.setItem(CONTATO_STORAGE_KEY, JSON.stringify(dados));
}
function restaurarRascunhoContato() {
  const salvo = localStorage.getItem(CONTATO_STORAGE_KEY);
  if (!salvo) return;
  const dados = JSON.parse(salvo);
  contactFieldIds.forEach(function (id) {
    const campo = document.getElementById(id);
    if (campo && dados[id]) campo.value = dados[id];
  });
}
contactFieldIds.forEach(function (id) {
  const campo = document.getElementById(id);
  if (campo) campo.addEventListener("input", salvarRascunhoContato);
});
restaurarRascunhoContato();
function contactDemo(e) {
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent =
    "Mensagem validada! Demonstração acadêmica: nenhum dado foi enviado a um servidor. Rascunho salvo neste navegador foi limpo.";
  msg.classList.remove("alert-info");
  msg.classList.add("alert-success");
  localStorage.removeItem(CONTATO_STORAGE_KEY);
  e.target.reset();
  return false;
}
const gs = document.getElementById("glossarySearch");
if (gs)
  gs.addEventListener("input", () => {
    let q = gs.value.toLowerCase();
    document
      .querySelectorAll("#terms article")
      .forEach((x) => (x.style.display = x.innerText.toLowerCase().includes(q) ? "" : "none"));
  });
const DOLAR_RATE = 5.868;
function atualizarConversao() {
  const valorInput = document.getElementById("valorReais");
  const resultado = document.getElementById("resultadoConversao");
  const lista = document.getElementById("listaMultiplos");
  const valor = parseFloat(valorInput.value);
  if (isNaN(valor) || valor <= 0) {
    resultado.textContent =
      "Informe um valor em reais para converter em dólares, pela cotação de fechamento (R$ 5,868).";
    lista.innerHTML = "";
    return;
  }
  const dolares = valor / DOLAR_RATE;
  resultado.textContent = "R$ " + valor.toFixed(2) + " equivalem a aproximadamente US$ " + dolares.toFixed(2) + ".";
  const multiplos = [1, 10, 50, 100, 500];
  lista.innerHTML = "";
  multiplos.forEach(function (m) {
    const total = valor * m;
    const li = document.createElement("li");
    li.textContent = "R$ " + total.toFixed(2) + " → US$ " + (total / DOLAR_RATE).toFixed(2);
    lista.appendChild(li);
  });
}
const valorReaisInput = document.getElementById("valorReais");
if (valorReaisInput) valorReaisInput.addEventListener("input", atualizarConversao);
