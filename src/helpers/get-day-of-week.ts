const getDaysOfWeek = (date = new Date()) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysOfWeek: { dayName: string; dayNumber: number; active: boolean }[] =
    [];

  // Tính ngày Thứ Hai của tuần
  const dayNumber = date.getDay(); // 0 -> sunday, 6 -> Saturday
  const monday = new Date(date);
  monday.setDate(date.getDate() - (dayNumber === 0 ? 6 : dayNumber - 1));

  // Thêm các ngày từ Thứ Hai đến Chủ Nhật vào mảng
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(monday);
    currentDay.setDate(monday.getDate() + i);

    // Thêm vào mảng với định dạng "Thứ Hai ngày 4"
    daysOfWeek.push({
      dayName: dayNames[currentDay.getDay()],
      dayNumber: currentDay.getDate(),
      active: dayNumber === currentDay.getDay(),
    });
  }

  return daysOfWeek;
};

export default getDaysOfWeek;
