type CardButtonProps = {
  href: string;
  children: React.ReactNode;
};

const CardButton = ({ href, children }: CardButtonProps) => {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
};

export default CardButton;
