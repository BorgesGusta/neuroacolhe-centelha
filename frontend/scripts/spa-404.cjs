// Copia dist/index.html para dist/404.html após o build de demonstração.
// GitHub Pages não tem rewrite de servidor para SPAs: quando o usuário
// acessa/atualiza uma rota interna (ex: /nura_centelha/app/dashboard),
// o Pages serve o 404.html do host. Sendo uma cópia do index.html, o
// React Router assume o roteamento client-side a partir daí.
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("[spa-404] dist/index.html não encontrado. Rode o build antes.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("[spa-404] dist/404.html criado a partir de dist/index.html");
