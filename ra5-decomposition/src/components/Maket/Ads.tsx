type AdsProps = {
  img: string;
};

/** Баннер с рекламой */
export default function Ads ({ img }: AdsProps)  {
  return (
    <img
      className='banner'
      src={img}
      alt='Рекламный баннер'
      style={{ width: 'auto', height: '300px' }}
    />
  );
}
