export function standardizePerformanceData(apiData) {
  const { data } = apiData;

  const performanceTypes = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };

  const transformedData = data.data.map((item) => ({
    value: item.value,
    kind: item.kind,
    kindName: performanceTypes[item.kind],
  }));

  transformedData.sort((a, b) => a.kind - b.kind);

  return {
    userId: data.userId,
    performanceData: transformedData,
  };
}
