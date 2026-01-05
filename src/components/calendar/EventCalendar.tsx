import { CalendarEvent } from "@/types/calendar";
import { useCalendar } from "@/hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

interface EventCalendarProps {
  events: CalendarEvent[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const {
    currentDate,
    days,
    direction,
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
  } = useCalendar(events);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <CalendarHeader
        currentDate={currentDate}
        onPreviousMonth={goToPreviousMonth}
        onNextMonth={goToNextMonth}
        onToday={goToToday}
      />
      <CalendarGrid days={days} direction={direction} />
    </div>
  );
};

export default EventCalendar;
