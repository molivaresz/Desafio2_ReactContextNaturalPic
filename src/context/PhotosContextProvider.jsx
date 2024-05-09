import { createContext, useEffect, useState} from "react";

export const PhotosContext = createContext();

const PHOTO_URL = "/photos.json";

const PhotosContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    
    const getPhotos = async () => {
        try {
            const response = await fetch(PHOTO_URL);
            const dataPhotos = await response.json();
            setData(dataPhotos.photos)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <PhotosContext.Provider value={{data, setData}}>
            {children}
        </PhotosContext.Provider>
    );
}
export default PhotosContextProvider