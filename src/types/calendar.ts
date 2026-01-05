export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  countryCode: string;
  countryName: string;
  websiteUrl: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  events: CalendarEvent[];
}
