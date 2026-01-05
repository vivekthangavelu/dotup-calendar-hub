import { CalendarEvent } from "@/types/calendar";

interface EventCardProps {
  event: CalendarEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const handleClick = () => {
    if (event.websiteUrl)
      window.open(event.websiteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-2 py-1.5 rounded-md bg-accent hover:bg-primary/15 border border-transparent hover:border-primary/30 transition-all duration-200 cursor-pointer"
    >
      {event.countryCode && (
        <div className="text-base leading-none mb-1" title={event.countryName}>
          <span
            className={`fi fi-${event.countryCode.toString().toLowerCase()}`}
          ></span>
        </div>
      )}

      <p className="text-[14px] font-bold text-foreground leading-tight line-clamp-2">
        {event.title}
      </p>
    </button>
  );
};

export default EventCard;
