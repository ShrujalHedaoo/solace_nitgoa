import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-white px-6 py-8 mt-8">
      <div className="space-y-6">
        {/* Main Footer Content */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">SOLACE</h3>
          <p className="text-sm opacity-90">
            Literature & Drama Society, NIT Goa
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-solace-accent" />
            <span className="text-sm">National Institute of Technology Goa, Cuncolim, South Goa
          </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-solace-accent" />
            <a 
              href="mailto:solacenitgoa@gmail.com" 
              className="text-sm hover:text-solace-accent transition-colors"
            >
              solacenitgoa@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-solace-accent" />
            <a 
              href="https://wa.me/917984884347" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-solace-accent transition-colors"
            >
              +91 79848 84347
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center space-y-3">
          <p className="text-sm font-medium">Follow us on social media</p>
          <div className="flex justify-center">
            <a href="https://instagram.com/solace_nitgoa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">
              <Instagram className="w-5 h-5 text-solace-accent" />
              <span className="text-sm font-medium">@solace_nitgoa</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 text-center space-y-2">
          <p className="text-xs opacity-75">© 2025 SOLACE - Literature & Drama Society, NIT Goa. All rights reserved.</p>
          <p className="text-xs opacity-75">
            Designed and Developed by{" "}
            <a 
              href="https://www.linkedin.com/in/shrujal-hedaoo-b96b74347" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-solace-accent transition-colors font-medium"
            >
              Shrujal Hedaoo
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;