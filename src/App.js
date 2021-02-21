import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard'
import unsplash from "./api/unsplash";
import { useEffect, useState } from 'react';
function App() {
  const [pins, setNewPins] = useState([])
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
    params : {
      query: term,
      per_page: 100
    }
  });
}


  const onSearchSubmit = (term) => {
    console.log("on serach submit ", term)
    getImages(term).then((res) => {
      // res.data.results to get the result from unsplash as a dictionary
      //let to create an other variable and full it with the results
      let results = res.data.results;
      let newPins = [...results]//,...pins
      newPins.sort(function(a,b){
        return 0.5 - Math.random()
      });
      setNewPins(newPins)
    })

  };
  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats','lake','mouse','house','beauty','girls','mens','fashion','luxury','pillow','baby','laptop','clothes','hot','cold','gorgeous','nature','travel']
    pins.forEach((pinTeam) => {
      promises.push(getImages(pinTeam).then((res) => {
        let results = res.data.results;
        pinData = pinData.concat(results);
        pinData.sort(function(a,b){
          return 0.5 - Math.random();//1:55:39
        });
      })
    )

    })
    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  }
  useEffect(() => {
    getNewPins()
  }, [])
  
  


  //onSearchSubmit("bali");





  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pins}/>
    </div>
  );
}

export default App;
