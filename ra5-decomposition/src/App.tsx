import Ads from './components/Maket/Ads';
import NewsList from './components/Maket/NewsList';
import Search from './components/Maket/Search';
import Widgets from './components/Maket/Widgets';

import './App.css'

function App() {
  return (
    <div>
      <div>
        <NewsList />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Ads
          img={
            'https://linkbuilder.su/images/uploads/glossary/banner.jpg'
          }
        />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default App
