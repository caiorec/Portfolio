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
  name: "Caio Soares",
  email: "", // ainda a criar; enquanto vazio, o contato mostra o Instagram
  instagram: "https://www.instagram.com/kaioh.rec/",
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
    { id: "reel-01", brand: "Marca", title: { pt: "Reel 01", en: "Reel 01" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DVJY55DCZFz/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-02", brand: "Marca", title: { pt: "Reel 02", en: "Reel 02" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DXzNhUjNcCS/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-03", brand: "Marca", title: { pt: "Reel 03", en: "Reel 03" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DWzfU9ehO__/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-04", brand: "Marca", title: { pt: "Reel 04", en: "Reel 04" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DUTO5McDcKR/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-05", brand: "Marca", title: { pt: "Reel 05", en: "Reel 05" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DUo0vFyExM9/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-06", brand: "Marca", title: { pt: "Reel 06", en: "Reel 06" }, cat: "", year: 2026, featured: true, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DUEs9urASEl/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-07", brand: "Marca", title: { pt: "Reel 07", en: "Reel 07" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DUrVdVmjTfE/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-08", brand: "Marca", title: { pt: "Reel 08", en: "Reel 08" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DUvycz5kdnS/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-09", brand: "Marca", title: { pt: "Reel 09", en: "Reel 09" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DZ0S1xPh3AH/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-10", brand: "Marca", title: { pt: "Reel 10", en: "Reel 10" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DaBpg2nhNkK/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-11", brand: "Marca", title: { pt: "Reel 11", en: "Reel 11" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DaORBwfhtk8/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-12", brand: "Marca", title: { pt: "Reel 12", en: "Reel 12" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/DdpTZdIxz1R/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-13", brand: "Marca", title: { pt: "Reel 13", en: "Reel 13" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/Dd2FSeuOXc2/" }, thumb: "",
      desc: { pt: "", en: "" } },
    { id: "reel-14", brand: "Marca", title: { pt: "Reel 14", en: "Reel 14" }, cat: "", year: 2026, featured: false, placeholder: true,
      video: { type: "instagram", src: "https://www.instagram.com/reel/Dbi9EUAxUCF/" }, thumb: "",
      desc: { pt: "", en: "" } }
  ]
};
