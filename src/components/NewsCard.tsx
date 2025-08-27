interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  onClick?: () => void;
}

const NewsCard = ({ title, description, date, image, onClick }: NewsCardProps) => {
  return (
    <div 
      className={`bg-card rounded-xl overflow-hidden shadow-md border border-border ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="flex">
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-3">
          <h3 className="font-bold text-sm text-foreground mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
            {description}
          </p>
          <p className="text-xs text-primary font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;