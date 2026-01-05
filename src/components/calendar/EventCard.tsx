import { CalendarEvent } from "@/types/calendar";
import { getCountryFlag } from "@/data/events";
import { ExternalLink } from "lucide-react";

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
      className="group w-full flex items-center gap-2 px-2 py-1.5 rounded-md bg-accent hover:bg-primary/15 border border-transparent hover:border-primary/30 transition-all duration-200 cursor-pointer"
    >
      <span className="text-base flex-shrink-0" title={event.countryName}>
        {getCountryFlag(event.countryCode)}
      </span>
      <span className="flex-1 text-xs font-medium text-foreground truncate text-left">
        {event.title}
      </span>
      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
    </button>
  );
};

export default EventCard;
