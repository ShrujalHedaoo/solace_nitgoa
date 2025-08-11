import { Wifi, Signal, Battery } from "lucide-react";
const solaceLogo = "/lovable-uploads/ee1a9ffb-9254-4838-8c16-c1d3d9c6b330.png";

const Header = () => {
  return (
    <div className="relative">
      {/* Main Header */}
      <div className="relative bg-gradient-to-b from-primary to-solace-primary-light text-white p-6 pb-8">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold tracking-wider">SOLACE</h1>
          
          {/* Logo Circle */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-solace-accent bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <img 
                src={solaceLogo} 
                alt="SOLACE Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-solace-accent opacity-80"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-solace-accent opacity-60"></div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium">Society Of Literature, Art, Culture and Expression</p>
            <p className="text-sm opacity-90 mt-1">NIT Goa</p>
          </div>
        </div>
        
        {/* Decorative background silhouettes */}
        <div className="absolute left-0 bottom-0 w-16 h-20 opacity-20">
          <div className="w-full h-full bg-black/30 rounded-tr-full"></div>
        </div>
        <div className="absolute right-0 bottom-0 w-16 h-20 opacity-20">
          <div className="w-full h-full bg-black/30 rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;