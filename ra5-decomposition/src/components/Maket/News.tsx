type NewsProps = {
  img: string;
  href: string;
  children?: React.ReactNode;
};

/** Новость иконка, текст и ссылка */
export default function News ({ img,  href, children}: NewsProps) {
  return (
    <div>
      <img src={img} alt='icon'/>
      <a href={href}>{children}</a>      
    </div>
  );
}
