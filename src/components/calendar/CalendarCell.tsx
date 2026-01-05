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
        "min-h-[90px] md:min-h-[110px] p-1.5 md:p-2 border-b border-r border-border/40 transition-colors duration-150",
        !day.isCurrentMonth && "bg-muted/20",
        day.isToday && "bg-accent/40"
      )}
    >
      {/* Day Number */}
      <div className="mb-1">
        <span
          className={cn(
            "inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full",
            day.isToday && "bg-primary text-primary-foreground",
            !day.isCurrentMonth && "text-muted-foreground/50",
            day.isWeekend && day.isCurrentMonth && !day.isToday && "text-muted-foreground",
            day.isCurrentMonth && !day.isToday && !day.isWeekend && "text-foreground"
          )}
        >
          {dayNumber}
        </span>
      </div>

      {/* Events */}
      <div className="space-y-1">
        {day.events.slice(0, 2).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {day.events.length > 2 && (
          <p className="text-[10px] text-muted-foreground text-center">
            +{day.events.length - 2} more
          </p>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;
