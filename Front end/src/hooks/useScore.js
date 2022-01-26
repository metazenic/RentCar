export default function useScore(rawScore) {
  let score =
    (rawScore * 10) % 1 == 0 ? rawScore * 2 : (rawScore * 2).toFixed(1);
  let qualification = "";
  let stars = [];

  switch (Math.ceil(rawScore)) {
    case 1:
      qualification = "Malo";
      break;

    case 2:
      qualification = "Regular";
      break;

    case 3:
      qualification = "Bueno";
      break;

    case 4:
      qualification = "Muy bueno";
      break;

    case 5:
      qualification = "Excelente";
      break;
  }

  let counter = 0;
  while (counter < 5) {
    rawScore >= 1
      ? stars.push(1)
      : rawScore > 0
      ? stars.push(0)
      : stars.push(-1);
    rawScore--;
    counter++;
  }

  return { score, qualification, stars };
}
