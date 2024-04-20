type WidgetProps = {
  title: string;
  children?: React.ReactNode;
};

/** Виджет: заголовок и содержание */
export default function Widget({ title, children }: WidgetProps) {
  return (
    <div className='widget'>
      <h6>{title}</h6>
      {children}
    </div>
  );
}
