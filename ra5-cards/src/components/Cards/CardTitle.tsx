const CardTitle = ({ children }: { children: React.ReactNode; }) => {
  return (
    <h5 className="card-title">
      {children}
    </h5>
  );
};

export default CardTitle;
