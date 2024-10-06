// data json
const data = [
  {
    id: 1,
    title: "Bromo Tengger",
    title2: "Kawasan Taman Nasional",
    slug: "/media/bromo",
    image: "/assets/images/bromo.jpg",
    location: "Probolinggo, Jawa Timur",
  },
  {
    id: 2,
    title: "CMC",
    title2: "Clungup Mangrove Conservation",
    slug: "/media/cmc",
    image: "/assets/images/cmc.jpg",
    location: "Malang, Jawa Timur",
  },
  {
    id: 3,
    title: "Batu",
    title2: "Enviromental Issue",
    slug: "/media/batu",
    image: "/assets/images/batu.jpg",
    location: "Malang, Jawa Timur",
  },
];

// ambil element berdasarkan id ="cards"
const cards = document.getElementById("cards");

// looping data json
data.forEach((item) => {
  // membuat element card
  const card = document.createElement("div");
  card.classList.add("card", "aspect-ratio");

  // membuat link
  const link = document.createElement("a");
  link.href = item.slug;
  // membuat element img
  const img = document.createElement("img");
  img.setAttribute("src", item.image);

  // membuat shadow sebelum teks
  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  // membuat element h3
  const h3 = document.createElement("h3");
  h3.innerText = item.title;

  // membuat element span
  const span = document.createElement("span");
  span.innerText = item.title2;
  const span2 = document.createElement("span");
  span2.innerText = item.location;
  span2.classList.add("location");
  // menambahkan semua elemen ke card
  link.appendChild(img);
  link.appendChild(shadow);
  link.appendChild(span);
  link.appendChild(h3);
  card.appendChild(span2);
  card.appendChild(link);

  card.addEventListener("click", async (event) => {
    event.preventDefault();

    card.classList.add("fixed");
    span2.classList.add("hidden");

    // Bungkus setTimeout dalam Promise
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    window.location.href = item.slug;
    card.classList.remove("fixed");
    span2.classList.remove("hidden");
  });
  // menambahkan semua card ke cards
  cards.appendChild(card);
});

const showPetunjuk = () => {
  const guides = document.getElementById("petunjuk");
  guides.classList.add("show");
};

const closePetunjuk = () => {
  const guides = document.getElementById("petunjuk");
  guides.classList.remove("show");
};
