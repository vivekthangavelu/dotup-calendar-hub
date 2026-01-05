import { CalendarEvent } from "@/types/calendar";
import { getCountryFlag } from "@/data/events";

interface EventCardProps {
  event: CalendarEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const handleClick = () => {
    window.open(event.websiteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-2 py-1.5 rounded-md bg-accent hover:bg-primary/15 border border-transparent hover:border-primary/30 transition-all duration-200 cursor-pointer"
    >
      <div className="text-base leading-none mb-1" title={event.countryName}>
        {getCountryFlag(event.countryCode)}
      </div>
      <p className="text-[11px] font-medium text-foreground leading-tight line-clamp-2">
        {event.title}
      </p>
    </button>
  );
};

export default EventCard;
