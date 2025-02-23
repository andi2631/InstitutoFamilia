export const setEventName = (eventName: string) => {
  switch (eventName) {
    case "cimientos":
      return "cimientos del matrimonio";
    default:
      return "Evento";
  }
}