import './App.css';
import Clock from './components/RenderProps/RenderClickCounter';
import Emoji2 from './components/composition/Emoji2';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import Text from './components/inheritence/Text';
import Text2 from './components/composition/Text2';
import Bracket from './components/composition/Bracket';
import RenderClickCounter from './components/RenderProps/RenderClickCounter';
import RenderHoverCounter from './components/RenderProps/RenderHoverCounter';
import User from './components/RenderProps/User';
import RenderCounter from './components/RenderProps/RenderCounter';
import Section from './components/RenderProps/Section';
import React from 'react';
import ThemeContext from './contexts/themeContext';
import { ReducerCounter } from './components/UserReducer/ReducerCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    }
  }
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        {/* <Clock locale="bn-BD" /> */}

        {/* inheritance */}
        {/* <Text /> */}

        {/* composition */}
        {/* <Emoji2>
        {
          ({ addEmoji }) => (
            <Bracket>
              {
                ({ addBracket }) => <Text2 addEmoji={addEmoji} addBracket={addBracket} />
              }
            </Bracket>
          )
        }
      </Emoji2> */}

        {/* render props */}
        {/* <RenderCounter>
          {
            ({ counter, increaseCounter }) => <RenderClickCounter counter={counter} increaseCounter={increaseCounter} />
          }
        </RenderCounter> */}
        {/* <RenderCounter>
        {
          ({ counter, increaseCounter }) => <RenderHoverCounter counter={counter} increaseCounter={increaseCounter} />
        }
      </RenderCounter> */}

        {/* for context api */}
        {/* <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider> */}


        {/* <RenderCounter render={({ counter, increaseCounter }) => <RenderHoverCounter counter={counter} increaseCounter={increaseCounter} />} /> */}

        {/* <User render={(isLoggedIn) => isLoggedIn ? "Mehedi" : "Guest"} /> */}
        {/* render props end */}

        {/* useReducer hook use */}
        <ReducerCounter />
        {/* useReducer hook use end */}
      </div>
    );
  }

}

export default App;
