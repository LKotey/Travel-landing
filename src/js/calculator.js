const form = document.getElementById("calculator");
const origin = document.getElementById("from");
const destination = document.getElementById("to");
const passengers = document.getElementById("passengers");
const resultThere = document.getElementById("there-num");
const resultBackAndForth = document.getElementById("backAndForth-num");
const result = document.getElementById("result");

const priceData = {
  "Limasol/Larnaka Airport": { 4: [80, 140], 6: [120, 200] },
  "Limasol/Larnaka": { 4: [90, 160], 6: [130, 240] },
  "Limasol/Paphos Airport": { 4: [80, 140], 6: [120, 220] },
  "Limasol/Paphos": { 4: [90, 160], 6: [130, 240] },
  "Limasol/Nicosia": { 4: [95, 170], 6: [130, 240] },
  "Limasol/Trodos": { 4: [95, 170], 6: [120, 220] },
  "Limasol/Kikkos": { 4: [150, 280], 6: [220, 400] },
  "Limasol/Kourion-Kolossi": { 4: [85, 150], 6: [120, 160] },
  "Limasol/Lefkara": { 4: [80, 140], 6: [110, 200] },
  "Limasol/Omodos": { 4: [85, 150], 6: [120, 220] },
  "Limasol/Kyreniva": { 4: [200, 370], 6: [250, 460] },
  "Limasol/Agianapa": { 4: [130, 240], 6: [200, 350] },
  "Limasol/Protaras": { 4: [140, 260], 6: [220, 400] },
  "Limasol/Aphrodite Hills": { 4: [70, 120], 6: [100, 190] },
  "Limasol/Aphrodite Rock": { 4: [70, 120], 6: [100, 190] },
  "Limasol/Latch": { 4: [150, 280], 6: [200, 370] },
  "Limasol/Ercan Airport": { 4: [145, 250], 6: [200, 370] },
  "Limasol/Ag.Georgios": { 4: [50, 90], 6: [70, 130] },
  "Limasol/Zigy": { 4: [60, 110], 6: [80, 150] },
  "Limasol/Pissouri": { 4: [70, 120], 6: [90, 160] },
  "Limasol/Paphos Zoo": { 4: [120, 220], 6: [180, 340] },
  "Limasol/Platres": { 4: [70, 120], 6: [90, 160] },
  "Limasol/Meniko": { 4: [115, 210], 6: [0, 0] },
  "Limasol/Stavrovouni": { 4: [80, 140], 6: [100, 190] },
  "Coral/Bay": { 4: [115, 210], 6: [180, 340] },
  "Limasol/Trimiklini": { 4: [75, 130], 6: [90, 170] },
};

const getDestination = (origin) => {
  return Object.keys(priceData)
    .map((place) => {
      const [originPoint, destinationPoint] = place.split("/");

      if (originPoint === origin) {
        return `<option value="${destinationPoint}">${destinationPoint}</option>`;
      }
    })
    .join("");
};

origin.addEventListener("change", (event) => {
  if (origin.value === "Limasol") {
    destination.innerHTML = getDestination("Limasol");
  } else if (origin.value === "Coral") {
    destination.innerHTML = getDestination("Coral");
  }
});

origin.addEventListener("change", (o) => {
  result.style.display = "none";
});
destination.addEventListener("change", (o) => {
  result.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const way = origin.value + "/" + destination.value;
  result.style.display = "grid";

  if (!priceData[way]) {
    resultThere.innerText = "Not available";
    resultBackAndForth.innerText = "Not available";
    return;
  }

  const passengersNumber = passengers.value;
  const [priceThere, priceBackAndForth] = priceData[way][passengersNumber];

  if (!priceThere) {
    resultThere.innerText = "Not available";
  } else {
    resultThere.innerText = priceThere + "€";
  }

  if (!priceBackAndForth) {
    resultBackAndForth.innerText = "Not available";
  } else {
    resultBackAndForth.innerText = priceBackAndForth + "€";
  }
});
