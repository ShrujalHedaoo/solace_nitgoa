import { Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location?: string;
  image: string;
  time?: string;
}

const EventCard = ({ title, date, location, image, time }: EventCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
      <div className="relative h-32">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-2 text-white">
          <h3 className="font-bold text-sm">{title}</h3>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{date}</span>
          {time && <span>• {time}</span>}
        </div>
        {location && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;