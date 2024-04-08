export const convertTextToSpeech = (text: string) => {
  if (!("speechSynthesis" in window)) {
    alert("Browser not support");
    return;
  }
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[0];
  window.speechSynthesis.speak(utterance);
};
