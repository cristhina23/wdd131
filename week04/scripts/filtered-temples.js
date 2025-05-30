const temples = [
  {
    templeName: "Albuquerque Temple",
    location: "New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34.245,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Utah, United States",
    dedicated: "1877, May, 18",
    area: 119.619,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "Manila  Temple",
    location: "Manila, Philippines",
    dedicated: "1984, September, 27",
    area: 26.683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Bismarck Temple",
    location: "North Dakota, United States",
    dedicated: "1999, September, 19",
    area: 10.700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bismarck-north-dakota-temple/bismarck-north-dakota-temple-7781-main.jpg"
  },
  {
    templeName: "Bogota Temple",
    location: "Bogota, Colombia",
    dedicated: "1999, April, 26",
    area: 53.500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Utah, United States",
    dedicated: "1986, January, 10",
    area: 382.207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Tijuana Temple",
    location: "Tijuana, Mexico",
    dedicated: "2015, December, 13",
    area: 33.367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },
  {
    templeName: "Illinois Temple",
    location: "Chicago, United States",
    dedicated: "1989, October, 8",
    area: 37.062,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
  },
  {
    templeName: "Caracas Temple",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15.332,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
  }
  
];

const lastModified = document.lastModified;

document.getElementById("last-updated").textContent = `Last modified: ${lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
  const menuActivador = document.getElementById("menu-activador");
  const menu = document.getElementById("menu");
  const templesContainer = document.getElementById("gallery-container");
  const home = document.getElementById("home");
    const old = document.getElementById("old");
    const newTemple = document.getElementById("new");
    const large = document.getElementById("large");
    const small = document.getElementById("small");

 
  menuActivador.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
 
  const renderTemples = (templesToRender) => {
    templesContainer.innerHTML = "";
    templesToRender.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location.trim()}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <figure>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>${temple.templeName}</figcaption>
        </figure>
      `;
      templesContainer.appendChild(card);
    });
  };


  renderTemples(temples);

  home.addEventListener("click", () => renderTemples(temples));
  old.addEventListener("click", () => renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)));
  newTemple.addEventListener("click", () => renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)));
  large.addEventListener("click", () => renderTemples(temples.filter(t => t.area > 90)));
  small.addEventListener("click", () => renderTemples(temples.filter(t => t.area < 10)));
});
  
  
