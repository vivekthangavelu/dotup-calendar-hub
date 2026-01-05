import EventCalendar from "@/components/calendar/EventCalendar";
import { sampleEvents } from "@/data/events";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 px-4 md:px-6">
        <EventCalendar events={sampleEvents} />
      </div>
    </div>
  );
};

export default Index;
