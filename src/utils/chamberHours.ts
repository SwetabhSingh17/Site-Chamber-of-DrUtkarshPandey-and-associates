import { IOfficeStatus } from '../types/legal.types';

/**
 * Calculates current status of the Chamber based on Indian Standard Time (IST, UTC+5:30).
 * Working hours: Monday through Saturday, 10:00 AM to 7:00 PM IST.
 * Sunday is reserved for chamber legal research and matter preparation.
 */
export function getChamberOfficeStatus(): IOfficeStatus {
  // Compute current time in UTC, then convert to IST (UTC + 5.5 hours)
  const nowUtc = new Date();
  const istOffsetMs = (5 * 60 + 30) * 60 * 1000;
  const istTime = new Date(nowUtc.getTime() + nowUtc.getTimezoneOffset() * 60 * 1000 + istOffsetMs);

  const dayOfWeek = istTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentTotalMinutes = hours * 60 + minutes;

  // Working window: 10:00 AM (600 mins) to 7:00 PM (1140 mins)
  const openingMinutes = 10 * 60;
  const closingMinutes = 19 * 60;

  const isWorkDay = dayOfWeek >= 1 && dayOfWeek <= 6; // Mon-Sat
  const isDuringHours = isWorkDay && currentTotalMinutes >= openingMinutes && currentTotalMinutes < closingMinutes;

  const formattedTimeIst = istTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  if (isDuringHours) {
    return {
      isOpen: true,
      currentTimeIst: `${formattedTimeIst} IST`,
      statusMessage: 'CHAMBERS IN SESSION',
      nextSessionTime: 'Court Registry & Consultation Desk Open Until 7:00 PM IST',
    };
  }

  // Determine next opening session
  let nextSessionMessage = 'Re-opening tomorrow at 10:00 AM IST';
  if (dayOfWeek === 0) {
    nextSessionMessage = 'Re-opening Monday at 10:00 AM IST';
  } else if (currentTotalMinutes < openingMinutes) {
    nextSessionMessage = 'Opening today at 10:00 AM IST';
  }

  return {
    isOpen: false,
    currentTimeIst: `${formattedTimeIst} IST`,
    statusMessage: 'REGISTRY CLOSED • AFTER HOURS',
    nextSessionTime: `${nextSessionMessage} • Urgent briefs logged automatically`,
  };
}

