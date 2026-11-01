# Portfólio audiovisual

Site estático (HTML/CSS/JS, sem build), bilíngue PT/EN, pronto para GitHub Pages.

## Como editar
Todo o conteúdo fica em `js/data.js` (trabalhos, marcas, categorias, contatos).
Textos fixos nos dois idiomas ficam em `js/i18n.js`.
Itens com `placeholder: true` são exemplos: troque ou remova.

- Logos das marcas: coloque em `assets/brands/` e informe `logo` em `brands`.
- Capas: `assets/thumbs/` e `thumb` no trabalho.
- Vídeos: YouTube (id), Instagram (link) ou arquivo local (`assets/videos/`).

## Ver localmente
`python3 -m http.server` na raiz e abrir http://localhost:8000
