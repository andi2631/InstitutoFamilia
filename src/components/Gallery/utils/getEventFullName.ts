export const setEventName = (eventName: string) => {
  switch (eventName) {
    case "cimientos":
      return "Curso para novios: Cimientos 2024";
    default:
      return "Evento";
  }
}