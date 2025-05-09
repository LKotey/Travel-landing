const form = document.getElementById("calculator");
const origin = document.getElementById("from");
const destination = document.getElementById("to");
const passengers = document.getElementById("passengers");
const resultThere = document.getElementById("there-num");
const resultBackAndForth = document.getElementById("backAndForth-num");
const result = document.getElementById("result");
const sell = document.getElementById("backAndForth-sell");

const priceData = {
  "Ag.Georgios/Limasol": { 4: [50, 90], 6: [70, 130] },
  "Agianapa/Limasol": { 4: [130, 240], 6: [200, 350] },
  "Aphrodite Hills/Limasol": { 4: [70, 120], 6: [100, 190] },
  "Aphrodite Rock/Limasol": { 4: [70, 120], 6: [100, 190] },
  "Coral/Bay": { 4: [115, 210], 6: [180, 340] },
  "Ercan Airport/Limasol": { 4: [145, 250], 6: [200, 370] },
  "Kikkos/Limasol": { 4: [150, 280], 6: [220, 400] },
  "Kourion-Kolossi/Limasol": { 4: [85, 150], 6: [120, 160] },
  "Kyreniva/Limasol": { 4: [200, 370], 6: [250, 460] },
  "Larnaca Airport/Limasol": { 4: [80, 140], 6: [120, 200] },
  "Larnaca/Limasol": { 4: [90, 160], 6: [110, 200] },
  "Latch/Limasol": { 4: [150, 280], 6: [200, 370] },
  "Lefkara/Limasol": { 4: [80, 140], 6: [110, 200] },
  "Limasol/Meniko": { 4: [115, 210], 6: [0, 0] },
  "Limasol/Nicosia": { 4: [95, 170], 6: [130, 240] },
  "Limasol/Omodos": { 4: [85, 150], 6: [120, 220] },
  "Limasol/Paphos": { 4: [90, 160], 6: [110, 200] },
  "Limasol/Paphos Airport": { 4: [80, 140], 6: [120, 220] },
  "Limasol/Paphos Zoo": { 4: [120, 220], 6: [180, 340] },
  "Limasol/Pissouri": { 4: [70, 120], 6: [90, 160] },
  "Limasol/Platres": { 4: [70, 120], 6: [90, 160] },
  "Limasol/Protaras": { 4: [140, 260], 6: [220, 400] },
  "Limasol/Stavrovouni": { 4: [80, 140], 6: [100, 190] },
  "Limasol/Trimiklini": { 4: [75, 130], 6: [90, 170] },
  "Limasol/Trodos": { 4: [95, 170], 6: [120, 220] },
  "Limasol/Zigy": { 4: [60, 110], 6: [80, 150] },
};

[origin, destination, passengers].forEach((el) =>
  el.addEventListener("change", () => {
    result.style.display = "none";
  })
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  sell.innerText = "";

  const way = [origin.value, destination.value].sort().join("/");
  result.style.display = "grid";

  if (!priceData[way]) {
    resultThere.innerText = "Not available";
    resultBackAndForth.innerText = "Not available";
    return;
  }

  const passengersNumber = passengers.value;

  if (passengersNumber === "30") {
    resultThere.innerText = "Price negotiable. Please contact for details.";
    resultBackAndForth.innerText =
      "Price negotiable. Please contact for details.";
    return;
  }

  const [priceThere, priceBackAndForth] = priceData[way][passengersNumber];

  resultThere.innerText = priceThere ? priceThere + "€" : "Not available";
  resultBackAndForth.innerText = priceBackAndForth
    ? priceBackAndForth + "€"
    : "Not available";
  sell.innerText = priceBackAndForth ? "-20%" : "";
});
