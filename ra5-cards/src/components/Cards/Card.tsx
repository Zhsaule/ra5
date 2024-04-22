import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardImage from './CardImage';
import CardButton from './CardButton';
import 'bootstrap/dist/css/bootstrap.min.css';

type CardProps = {
  image?: string; 
  title: string; 
  text: string; 
  btn_name: string; 
};

const Card = (props: CardProps) => {
  const {image, title, text, btn_name} = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      <CardImage src={image} altimg="Description" />
      <CardBody>
        <CardTitle>{title} </CardTitle>
        <CardText>{text} </CardText>
        <CardButton href="#">{btn_name} </CardButton>
      </CardBody>
    </div>
  );
}

export default Card;