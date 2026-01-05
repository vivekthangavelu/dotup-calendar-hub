import { CalendarDay } from "@/types/calendar";
import EventCard from "./EventCard";
import { cn } from "@/lib/utils";

interface CalendarCellProps {
  day: CalendarDay;
}

const CalendarCell = ({ day }: CalendarCellProps) => {
  const dayNumber = day.date.getDate();

  return (
    <div
      className={cn(
        "min-h-[100px] md:min-h-[120px] p-2 border-b border-r border-border/50 transition-colors duration-150",
        !day.isCurrentMonth && "bg-muted/30",
        day.isToday && "bg-accent/50"
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className={cn(
            "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full transition-colors",
            day.isToday && "bg-primary text-primary-foreground",
            !day.isCurrentMonth && "text-calendar-other-month",
            day.isWeekend && day.isCurrentMonth && !day.isToday && "text-calendar-weekend",
            day.isCurrentMonth && !day.isToday && !day.isWeekend && "text-foreground"
          )}
        >
          {dayNumber}
        </span>
      </div>
      <div className="space-y-1 overflow-hidden max-h-[60px] md:max-h-[80px]">
        {day.events.slice(0, 2).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {day.events.length > 2 && (
          <p className="text-xs text-muted-foreground pl-1">
            +{day.events.length - 2} more
          </p>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;
