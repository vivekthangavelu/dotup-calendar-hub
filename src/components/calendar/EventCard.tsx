import { CalendarEvent } from "@/types/calendar";
import { getCountryFlag } from "@/data/events";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface EventCardProps {
  event: CalendarEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const handleClick = () => {
    window.open(event.websiteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group w-full text-left rounded-md bg-primary/10 hover:bg-primary/20 px-2 py-1.5 transition-all duration-200 cursor-pointer border border-primary/20 hover:border-primary/40"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-1.5">
        <span className="text-sm flex-shrink-0" title={event.countryName}>
          {getCountryFlag(event.countryCode)}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-primary truncate leading-tight">
            {event.title}
          </p>
        </div>
        <ExternalLink className="w-3 h-3 text-primary/60 group-hover:text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.button>
  );
};

export default EventCard;
