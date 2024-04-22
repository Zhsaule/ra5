import Button from 'react-bootstrap/Button';
import CardRBS from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props: { image?: string; title: string; text: string; btn_name: string; }) {
  const {image, title, text, btn_name} = props;
  return (
    <CardRBS style={{ width: '18rem' }}>
      <CardRBS.Img variant="top" src={image} />
      <CardRBS.Body>
        <CardRBS.Title>{title}</CardRBS.Title>
        <CardRBS.Text>
          {text}
        </CardRBS.Text>
        <Button variant="primary">{btn_name}</Button>
      </CardRBS.Body>
    </CardRBS>
  );
}

export default Card;