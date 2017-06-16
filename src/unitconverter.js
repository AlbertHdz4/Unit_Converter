export function poundsToKilograms(...pound) {
  let kilograms;
  return kilograms = pound.map((pound) => parseFloat((pound * 0.453592)));
}

export function kilogramsToPounds(...kilo) {
  let pounds;
  return pounds = kilo.map((kilo) => parseFloat((kilo * 2.20462)));
}
