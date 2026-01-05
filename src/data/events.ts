import { CalendarEvent } from "@/types/calendar";

// Sample events data - you can replace with your actual events
export const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Digital Transformation Summit",
    date: new Date(2026, 0, 8),
    countryCode: "US",
    countryName: "United States",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "2",
    title: "Tech Innovation Conference",
    date: new Date(2026, 0, 15),
    countryCode: "GB",
    countryName: "United Kingdom",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "3",
    title: "AI & Machine Learning Workshop",
    date: new Date(2026, 0, 22),
    countryCode: "DE",
    countryName: "Germany",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "4",
    title: "Cloud Computing Expo",
    date: new Date(2026, 0, 28),
    countryCode: "JP",
    countryName: "Japan",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "5",
    title: "Cybersecurity Forum",
    date: new Date(2026, 1, 5),
    countryCode: "CA",
    countryName: "Canada",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "6",
    title: "Blockchain Summit",
    date: new Date(2026, 1, 12),
    countryCode: "SG",
    countryName: "Singapore",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "7",
    title: "DevOps World",
    date: new Date(2026, 1, 18),
    countryCode: "AU",
    countryName: "Australia",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "8",
    title: "IoT Conference",
    date: new Date(2026, 1, 25),
    countryCode: "FR",
    countryName: "France",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "9",
    title: "Data Science Symposium",
    date: new Date(2026, 2, 4),
    countryCode: "IN",
    countryName: "India",
    websiteUrl: "https://www.dotuptech.com",
  },
  {
    id: "10",
    title: "Startup Tech Meetup",
    date: new Date(2026, 2, 15),
    countryCode: "NL",
    countryName: "Netherlands",
    websiteUrl: "https://www.dotuptech.com",
  },
];

// Country code to flag emoji mapping
export const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
