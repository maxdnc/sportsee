export function standardizeUserData(apiData) {
  const { data } = apiData;
  const score = data.score || data.todayScore || 0;
  const scorePercentage = score * 100;
  const dataScore = [
    {
      score: score,
      scorePercentage: scorePercentage,
    },
  ];

  return {
    userId: data.id,
    userInfos: {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
    },
    dataScore: dataScore,
    keyData: {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    },
  };
}
