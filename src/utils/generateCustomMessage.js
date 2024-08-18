export function generateCustomMessage(data) {
  if (!data || !data.dataScore || data.dataScore.length === 0) {
    return '⏳ Chargement en cours... !';
  }

  const { scorePercentage } = data.dataScore[0];

  if (scorePercentage >= 90) {
    return "Félicitations ! Vous avez survolé vos objectifs aujourd'hui 🌟";
  } else if (scorePercentage >= 80) {
    return 'Bravo ! Vous êtes en pleine forme 💪 Continuez comme ça !';
  } else if (scorePercentage >= 70) {
    return 'Bien joué ! Vous êtes sur la bonne voie 👍';
  } else if (scorePercentage >= 60) {
    return 'Bon travail ! Continuez à progresser 👏';
  } else if (scorePercentage >= 50) {
    return 'Vous êtes à mi-chemin 🛤️ Ne relâchez pas vos efforts !';
  } else if (scorePercentage >= 40) {
    return 'Continuez ! Vous faites des progrès 🚀';
  } else if (scorePercentage >= 30) {
    return 'Ne lâchez rien ! Chaque pas compte 🏃‍♂️';
  } else if (scorePercentage >= 20) {
    return 'Gardez le cap ! Les résultats viendront ⏳';
  } else if (scorePercentage >= 10) {
    return 'Chaque effort compte, persévérez 🔄';
  } else {
    return 'Ne vous découragez pas ! Continuez à avancer 🌱';
  }
}
