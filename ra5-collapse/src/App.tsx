import Collapse from './components/Collapse/Collapse';
import './App.css'

export default function App () {
  return (
    <div>
      <Collapse>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna nulla, ultricies in odio sit amet, hendrerit consectetur dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
        </div>
      </Collapse>
    </div>
  )
}
