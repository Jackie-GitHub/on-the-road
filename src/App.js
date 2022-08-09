import React, { useState } from 'react';

import Modal from './components/Modal';
import SearchResult from './components/SearchResult';

import Header from './components/Header';
import MainPage from './components/MainPage';
import MainDescription from './components/MainDescription';
import BigCities from './components/BigCities';
import BigCitiesTextes from './components/BigCitiesTextes';
import SmallTownCarousel from './components/SmallTownCarousel';
import SmallTownText from './components/SmallTownText';
import Nature from './components/Nature';
import NatureText from './components/NatureText';
import Footer from './components/Footer';

import youtube from './axios/youtube';
import weatherbit from './axios/weatherbit';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [weatherBit, setWeatherBit] = useState(null);

  const onSearch = async(videoSearch, weatherSearch) => {
    console.log('onSearch');
    await youtube.get('search',{
      params:{
        q:`${videoSearch} travel`
      }
    }).then((response) => {
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    }).catch((err)=>{
      console.log("video fetch err");
      setVideos(null);
      setSelectedVideo(null);
    })

    await weatherbit.get('weather?',{
      params:{
        city:weatherSearch
      }
    }).then((response)=>{
      setWeatherBit(response.data.data[0]);
    }).catch((err)=>{
      console.log("No weather infomation");
      setWeatherBit(null);
    }).then(
      console.log(weatherBit)
    ) 

    setShowSearch(true);
  }

  const onSelectVedio = (video) => {
    setSelectedVideo(video);
  }

  const hideSearch = () => {
    setShowSearch(false);
  }

  return (
    <div className="App">
      <Modal onSearch={showSearch} onclick={hideSearch}>
        <SearchResult videos={videos} selectedVideo={selectedVideo} onSelect={onSelectVedio} weather={weatherBit} searchTerm={onSearch} />
      </Modal>
      <Header searchTerm={onSearch}/>
      <MainPage />
      <MainDescription />
      <BigCities searchTerm={onSearch}/>
      <BigCitiesTextes searchTerm={onSearch}/>
      <SmallTownCarousel searchTerm={onSearch}/>
      <SmallTownText searchTerm={onSearch}/>
      <Nature searchTerm={onSearch}/>
      <NatureText searchTerm={onSearch}/>
      <Footer />
    </div>
  );
}

export default App;
