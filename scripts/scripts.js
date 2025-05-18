const fs = require('fs');
const path = require('path');

// Lista de URLs que tú defines
const urls = [
  "https://drive.google.com/file/d/1uEcohZnoqcP9vaByBuRGLTfFWGoJPAkL/view",
  "https://drive.google.com/file/d/1m9uaJl7BwLl2qwLglHrs7n7i34EdxvMH/view",
  "https://drive.google.com/file/d/1UYj4CqSMeqIsEvP3WNGlkF3EJkX_KP1U/view",
  "https://drive.google.com/file/d/12JOQYGLtaZ9BS5x2Kc4rx1VdAm02mjyt/view",
  "https://drive.google.com/file/d/1TAg3jK3Q-okiHmYL2x6yO5fbDksqcYvq/view",
  "https://drive.google.com/file/d/1JOoMb7YOobWsWGbGATdG57GDrPATivMX/view",
  "https://drive.google.com/file/d/1TrlFlLb4JxkwBygiji-QTCoYFPrMoY4D/view",
  "https://drive.google.com/file/d/1Te071QTyRKstqFoSxFrL5bk1SkM1Rlu4/view",
  "https://drive.google.com/file/d/1F0X7ap_Ce6ywvp8m524_GpKP9zboZ_SF/view",
  "https://drive.google.com/file/d/1SYEyvkhAzzMf9j93pr45vqfZSdnoZduP/view",
  "https://drive.google.com/file/d/1sTrHK9Xk1wCNWd_265PMSLN9NLXJnlpu/view",
  "https://drive.google.com/file/d/1X2VwcoUL-g7_h7Z20Th8qMBj0egAZXgm/view",
];

// Función para obtener una URL aleatoria
function getRandomUrl(urls) {
  return urls[Math.floor(Math.random() * urls.length)];
}

// Leer el archivo alimentos.json
const filePath = path.join(__dirname, 'alimentos.json');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(fileContent);

// Reemplazar el href de cada objeto
data.forEach(item => {
  item.href = getRandomUrl(urls);
});

// Guardar el resultado en un nuevo archivo
fs.writeFileSync(
  path.join(__dirname, 'alimentos_href_random.json'),
  JSON.stringify(data, null, 2)
);

console.log('Archivo procesado y guardado como alimentos_href_random.json');