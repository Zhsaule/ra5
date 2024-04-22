// import './App.css'
import Card from './components/Cards/Card';
import Image1 from '../src/assets/card1.png'

function App () {
    return (
      <div>
        <Card 
          image={Image1}
          title="Название карточки 1"
          text="Текст карточки 1"
          btn_name="Кнопка"
        />
        <br/>
        <Card 
        title="Название карточки 2"
        text="Текст карточки 2"
        btn_name="Кнопка 2"
        />
      </div>

    );
}
  
export default App;
