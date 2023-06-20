import React, {useContext} from 'react';
import './App.css';
import {FormattedMessage, FormattedDate } from 'react-intl';
import {Context} from "./components/Wrapper";
import ReactPlayer from 'react-player'

function App(props) {
  const context = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <select value = {context.locale} onChange={context.selectLanguage}>
          <option value= 'en'>English</option>
          <option value= 'fr'>French</option>
          <option value= 'ar'>Arabic</option>

        </select>
        <p>
          <FormattedMessage
              id = "app.header"
              defaultMessage="React internalization"
              values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id = "app.content"
            defaultMessage="Learning how to render multilang using react internalization"
          />

        </a>
        <FormattedMessage
          id = "app.subHeading"
          defaultMessage="multilanguage"
        />
        <br/>
        <FormattedDate
            value={props.date}
            year = 'numeric'
            month= 'long'
            day = 'numeric'
            weekday = 'long'
        />
        <br/>
      </header>
      <div><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></div>
    </div>
  );
}

export default App;