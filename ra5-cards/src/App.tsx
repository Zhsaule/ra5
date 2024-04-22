// import './App.css'
import CardBS from './components/Cards/CardBS';
import Card from './components/Cards/Card';
import Image1 from '../src/assets/card1.png'
import Image2 from '../src/assets/card2.png'

function App () {
    return (
      <div className="card-group">
        <CardBS 
          image="https://netology.ru/_next/static/media/image.36b3e565.png"
          title="Название карточки"
          text="Текст карточки"
          btn_name="Кнопка"
        />
        <br/>
        <Card 
        image={Image1}
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        btn_name="Go somewhere"
        />
        <br/>
        <Card 
        image={Image2}
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        btn_name="Go somewhere"
        />
      </div>
    );
}
  
export default App;
