export function standardizeActivityData(apiData) {
  const { data } = apiData;
  const xAxisTickFormat = (value) => {
    const valueDay = value.split('-');
    return Number(valueDay[2]);
  };
  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      date: session.day,
      dayNumber: xAxisTickFormat(session.day),
      kilogram: session.kilogram,
      calories: session.calories,
    })),
  };
}
