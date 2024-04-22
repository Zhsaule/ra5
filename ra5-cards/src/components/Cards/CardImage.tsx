type CardImgProps = {
  src?: string;
  altimg?: string;
};

const CardImage = ({ src, altimg }: CardImgProps) => {
  return (
      <img src={src} className="card-img-top" alt={altimg} />
  );
};

export default CardImage;
