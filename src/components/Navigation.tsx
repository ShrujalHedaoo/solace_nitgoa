import { Calendar, Users, Library, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { icon: Calendar, label: "Calendar", color: "bg-blue-500" },
  { icon: Users, label: "Members", color: "bg-green-500" },
  { icon: Library, label: "Library", color: "bg-orange-500" },
  { icon: Megaphone, label: "Advertisements", color: "bg-purple-500" },
];

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-4 bg-background">
      <div className="grid grid-cols-4 gap-4">
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
              onClick={() => {
                if (item.label === "Library") navigate("/library");
                if (item.label === "Members") navigate("/members");
                if (item.label === "Calendar") navigate("/calendar");
                if (item.label === "Advertisements") navigate("/advertisements");
              }}
              role={["Library", "Members", "Calendar", "Advertisements"].includes(item.label) ? "link" : undefined}
              aria-label={item.label}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground text-center">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
