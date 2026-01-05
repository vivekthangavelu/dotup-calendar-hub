import { CalendarDay } from "@/types/calendar";
import CalendarCell from "./CalendarCell";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarGridProps {
  days: CalendarDay[];
  direction: number;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const CalendarGrid = ({ days, direction }: CalendarGridProps) => {
  // Group days into weeks
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="calendar-shadow-lg rounded-xl overflow-hidden bg-card border border-border">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 bg-secondary/50">
        {WEEKDAYS.map((day, index) => (
          <div
            key={day}
            className={`py-3 text-center text-sm font-medium border-b border-r border-border/50 ${
              index === 0 || index === 6
                ? "text-calendar-weekend"
                : "text-calendar-day"
            }`}
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.charAt(0)}</span>
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={days[15]?.date.toISOString() || "empty"}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7">
              {week.map((day, dayIndex) => (
                <CalendarCell key={`${weekIndex}-${dayIndex}`} day={day} />
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CalendarGrid;
