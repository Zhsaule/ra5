type CardBody = {
  children: React.ReactNode;
}
const CardBody = ({ children }: CardBody) => {
  return (
    <div className="card-body">
      {children}
    </div>
  );
};

export default CardBody;
