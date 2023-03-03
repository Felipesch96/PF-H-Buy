export default function prom(qualification) {
  let i = 0;
  let sum = 0;
  while (i < qualification.length) {
    sum = sum + qualification[i++];
  }
  const promedio = (sum / qualification.length).toFixed(1);
  return promedio;
}
