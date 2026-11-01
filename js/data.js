/*
  CONTEÚDO DO SITE — edite apenas este arquivo para trocar trabalhos, marcas e contatos.
  Os itens marcados com placeholder:true são EXEMPLOS e devem ser substituídos.

  video.type:
    "youtube"   -> src = ID do vídeo (ex.: "dQw4w9WgXcQ")
    "instagram" -> src = URL do post/reel (abre em nova aba + tenta embed)
    "file"      -> src = caminho do arquivo local (ex.: "assets/videos/meu.mp4")
  thumb: caminho de uma imagem de capa (opcional; sem ela o site gera um fundo).
*/
window.SITE = {
  name: "Caio",
  email: "contato@exemplo.com",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  brands: [
    { name: "Brahma" },
    { name: "Guaraná" },
    { name: "Beats" },
    { name: "Sebrae" },
    { name: "iFood" },
    { name: "Meio e Mensagem" }
    // Com logo: { name: "Brahma", logo: "assets/brands/brahma.svg" }
  ],
  categories: [
    { id: "eventos",       pt: "Eventos",       en: "Events" },
    { id: "publicidade",   pt: "Publicidade",   en: "Advertising" },
    { id: "clipes",        pt: "Clipes",        en: "Music videos" },
    { id: "institucional", pt: "Institucional", en: "Corporate" }
  ],
  works: [
    { id: "exemplo-01", brand: "Marca 01", title: { pt: "Título do projeto", en: "Project title" }, cat: "eventos", year: 2026, featured: true, placeholder: true,
      video: { type: "youtube", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-02", brand: "Marca 02", title: { pt: "Título do projeto", en: "Project title" }, cat: "publicidade", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-03", brand: "Marca 03", title: { pt: "Título do projeto", en: "Project title" }, cat: "clipes", year: 2025, featured: true, placeholder: true,
      video: { type: "youtube", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-04", brand: "Marca 04", title: { pt: "Título do projeto", en: "Project title" }, cat: "institucional", year: 2025, featured: true, placeholder: true,
      video: { type: "file", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-05", brand: "Marca 05", title: { pt: "Título do projeto", en: "Project title" }, cat: "eventos", year: 2025, featured: true, placeholder: true,
      video: { type: "youtube", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-06", brand: "Marca 06", title: { pt: "Título do projeto", en: "Project title" }, cat: "publicidade", year: 2024, featured: true, placeholder: true,
      video: { type: "instagram", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-07", brand: "Marca 07", title: { pt: "Título do projeto", en: "Project title" }, cat: "clipes", year: 2024, featured: false, placeholder: true,
      video: { type: "youtube", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } },
    { id: "exemplo-08", brand: "Marca 08", title: { pt: "Título do projeto", en: "Project title" }, cat: "eventos", year: 2024, featured: false, placeholder: true,
      video: { type: "youtube", src: "" }, thumb: "",
      desc: { pt: "Descrição curta do projeto, seu papel e o resultado.", en: "Short project description, your role and the outcome." } }
  ]
};
