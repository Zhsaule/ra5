import Button from 'react-bootstrap/Button';
import CardRBS from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

type CardRBSProps = {
  image?: string;
  title: string;
  text: string;
  btn_name: string;
};

const CardBS = (props: CardRBSProps) => {
  const { image, title, text, btn_name } = props;
  return (
    <CardRBS style={{ width: '18rem' }}>
      <CardRBS.Img variant="top" src={image || 'default-image-path.jpg'} />
      <CardRBS.Body>
        <CardRBS.Title>{title}</CardRBS.Title>
        <CardRBS.Text>{text}</CardRBS.Text>
        <Button variant="primary">{btn_name}</Button>
      </CardRBS.Body>
    </CardRBS>
  );
};

export default CardBS;
