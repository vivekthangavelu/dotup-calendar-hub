import { useState, useMemo, useCallback } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isSameDay,
  addMonths,
  subMonths,
  isWeekend,
} from "date-fns";
import { CalendarDay, CalendarEvent } from "@/types/calendar";

export const useCalendar = (events: CalendarEvent[]) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState(0);

  const days = useMemo<CalendarDay[]>(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const allDays = eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd,
    });

    return allDays.map((date) => ({
      date,
      isCurrentMonth: isSameMonth(date, currentDate),
      isToday: isToday(date),
      isWeekend: isWeekend(date),
      events: events.filter((event) => isSameDay(event.date, date)),
    }));
  }, [currentDate, events]);

  const goToPreviousMonth = useCallback(() => {
    setDirection(-1);
    setCurrentDate((prev) => subMonths(prev, 1));
  }, []);

  const goToNextMonth = useCallback(() => {
    setDirection(1);
    setCurrentDate((prev) => addMonths(prev, 1));
  }, []);

  const goToToday = useCallback(() => {
    const today = new Date();
    const currentMonth = startOfMonth(currentDate);
    const todayMonth = startOfMonth(today);
    
    if (todayMonth > currentMonth) {
      setDirection(1);
    } else if (todayMonth < currentMonth) {
      setDirection(-1);
    }
    
    setCurrentDate(today);
  }, [currentDate]);

  return {
    currentDate,
    days,
    direction,
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
  };
};
