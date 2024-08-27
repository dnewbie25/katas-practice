function humanReadable (seconds) {
  const minutes = seconds/60;
  const hours = Math.floor(minutes/60);
  const second = seconds%60;
  let arr = [hours, Math.floor(minutes%60), second].map(i=> {
    return i<10?`0${i}`:`${i}`
  })
  return arr.join(':');
}