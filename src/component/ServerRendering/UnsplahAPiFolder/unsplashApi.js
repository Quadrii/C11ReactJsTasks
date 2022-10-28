import React from "react";
import axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_API_KEY || "DCmZkhkQh_8E08z5pG_WU8LFjAXs3oFoliXiCLeJm2Y"
export const UnsplashApi = axios.create(
    {
        baseURL:"https://api.unsplash.com/",
        headers:{
            Authorization:`Client-ID ${ACCESS_KEY}`
        }
    }
)


