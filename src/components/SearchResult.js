import React, { useState } from 'react';
import './SearchResult.scss';
import SearchResultWeather from './SearchResultWeather';
import { IoSearchOutline } from 'react-icons/io5';

function SearchResult ({videos, selectedVideo, onSelect, weather, searchTerm}) {
    const [inputText, setInputText] = useState('');

    const submitFrom = (e) => {
        e.preventDefault();
        searchTerm(inputText,inputText);
        setInputText('');
    }    
    
    if (!videos || !selectedVideo) {
        return (
            <div className="noVideoResult">
                <div className = "SearchResultBar">
                    <form className="input-group" role="search" onSubmit={submitFrom}>
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search Place"
                            value={inputText || ''}
                            onChange={e => { setInputText(e.target.value) }}
                        />
                        <button className="btn btn-outline-secondary" type="submit"><IoSearchOutline /></button>
                    </form>
                </div>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                <div>Please enter a valid place name.</div>               
            </div>
        )
    };
        
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    const searchResult = videos.map((video)=>{
        const src=video.snippet.thumbnails.medium.url;
        const alt=video.snippet.title
        return (
            <div key={video.id.videoId} onClick={()=>{onSelect(video)}} >
                <img src={src} alt={alt} style={{width:'100%'}} />
                <p style={{fontSize:'70%'}} >{video.snippet.title }</p>
            </div>
        )
    });    
        
    return (
        <>
        <div className="row">
            <div className="col-12 col-sm-9">
                <div className = "SearchResultTop">
                    <div className = "SearchResultWeather">
                        <SearchResultWeather weather={weather} />
                    </div>
                    <div className = "SearchResultBar">
                        <form className="input-group" role="search" onSubmit={submitFrom}>
                            <input 
                                className="form-control" 
                                type="search" 
                                placeholder="Search Place"
                                value={inputText || ''}
                                onChange={e => { setInputText(e.target.value) }}
                            />
                            <button className="btn btn-outline-secondary" type="submit"><IoSearchOutline /></button>
                        </form>
                    </div>
                </div>
                <div className="s-video">
                    <iframe title="video player" src={videoSrc} />
                </div>
                <div className="s-videoText">
                    <h4 className="s-videoTitle">{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </div>
            <div className="col-12 col-sm-3">
                {searchResult}
            </div>
        </div>
        </>
    );
};

export default SearchResult;