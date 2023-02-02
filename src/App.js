
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OptionSeletion from './components/OptionSeletion';

import {arrayItem} from './AiOption/index';
import Translation from './components/Translation';
import { useState } from 'react';

import { Configuration, OpenAIApi} from 'openai';
import { useEffect } from 'react';

function App() {
  const [option, setOption] = useState({})
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [api , setApi] = useState('')

  useEffect(() => {
    fetch('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', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setApi(data);
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
    
  });

  const configuration = new Configuration({
    apiKey: api,
  });
  const openai = new OpenAIApi(configuration);

  const selectOption = (option) => {
     setOption(option)
  };

  const doStuff = async () => {
   let object = {...option, prompt: input}

   const response = await openai.createCompletion({object});
   setResult(response.data.choices[0].text);
   console.log(response.data.choices[0].text);
  }

  return (
    <div className="App">
        
        
        {Object.values(option).length === 0 ? (
          <OptionSeletion arrayItem={arrayItem}
        selectOption={selectOption} />
        ) : (
          <Translation  result={result}
          doStuff={doStuff} setInput={setInput}  />
        )}
    </div>
  );
}

// function NoPage() {
//    return (
//      <div className="text-center">
//         <h1>404 - page Not Found</h1>
//      </div>
//    )
// }

export default App;
