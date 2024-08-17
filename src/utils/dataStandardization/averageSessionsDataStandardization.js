export function standardizeAverageSessions(apiData) {
  const { data } = apiData;
  const daysOfWeek = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  return {
    userId: data.userId,
    sessions: data.sessions.map((session) => ({
      day: daysOfWeek[session.day - 1].charAt(0),
      sessionLength: session.sessionLength,
    })),
  };
}
