const CardText = ({ children }: { children: React.ReactNode; }) => {
  return (
    <p className="card-text">
      {children}
    </p>
  );
};

export default CardText;
