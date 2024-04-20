import Card from './Card';
import CardButton from './CardButton';
import Image1 from '../../assets/card1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cards() {
  return (
    <div>
      <Card
        title="Card title"
        imageUrl={Image1}
        imageAlt="Image description"
        className="mb-4"
        textContent="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <CardButton href="#">Go somewhere</CardButton>
      </Card>

      <Card 
        title="Special title treatment"
        textContent="With supporting text below as a natural lead-in to additional content."
      >
        <CardButton href="#">Go somewhere</CardButton>
      </Card>
    </div>
  );
}
