import './App.css';
import Clock from './components/Clock';
import Emoji2 from './components/composition/Emoji2';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import Text from './components/inheritence/Text';
import Text2 from './components/composition/Text2';
import Bracket from './components/composition/Bracket';

function App() {
  return (
    <div className="App">
      {/* <Clock locale="bn-BD" /> */}
      {/* <Text /> */}
      <Emoji2>
        {
          ({ addEmoji }) => (
            <Bracket>
              {
                ({ addBracket }) => <Text2 addEmoji={addEmoji} addBracket={addBracket} />
              }
            </Bracket>
          )
        }
      </Emoji2>
    </div>
  );
}

export default App;
