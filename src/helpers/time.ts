export const convertSeconds = (seconds: number) => {
  // convert seconds to milliseconds
  const milliseconds = seconds * 1000;

  const hours = Math.floor(milliseconds / 3600000); // 1hour = 3.600.000 milliseconds
  const minutes = Math.floor((milliseconds % 3600000) / 60000); // 1minute = 60.000 milliseconds
  const secondsRounded = Math.ceil((milliseconds % 60000) / 1000); // Round milliseconds to seconds

  // Format the result string hh:mm:ss
  const formattedTime = `
  ${hours.toString().padStart(2, "0")}:
  ${minutes.toString().padStart(2, "0")}:
  ${secondsRounded.toString().padStart(2, "0")}`;

  return formattedTime;
};
