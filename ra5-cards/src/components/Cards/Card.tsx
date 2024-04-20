type CardProps = {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  textContent?: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ 
  title, 
  imageUrl, 
  imageAlt,
  className = '',
  textContent,
  children 
}: CardProps) => {
  const cardClasses = `card ${className || ''}`.trim();

  return (
    <div className={cardClasses}  style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={imageAlt} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{textContent}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
