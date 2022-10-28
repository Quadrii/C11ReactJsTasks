import React, {useEffect, useState} from "react";
import {UnsplashApi} from './unsplashApi'
import Search from "./search";
import ImageList from "./imageList";
import ImageItem from "./imageItem";
const SearchWrap = ()=>{
    const [searchTerm, setSearchTerm] = useState("office");
    const [images, setImages]=useState([])
    const getSearchTerm = (term)=> {
        setSearchTerm(term)
    }

    useEffect(()=>{
        const fetchPhotos = async ()=>{
            const result = await UnsplashApi.get(`search/photos/?query=${searchTerm}`);
            setImages(result.data.results)
            console.log(result.data.results)
        };
        fetchPhotos();
    }, [searchTerm])
    return(
        <>
            <Search getSearch={getSearchTerm}/>
            {images.map(image=>
                <ImageItem key={image.id} imgSrc={image.urls.regular} imgAlt={image.alt_description}/>
            )}
        </>
    )
}
export default SearchWrap;

