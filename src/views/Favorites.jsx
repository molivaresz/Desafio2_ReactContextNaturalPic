import { useContext } from "react";
import {PhotosContext} from "../context/PhotosContextProvider";
import IconHeart from "../components/IconHeart";

const Favorites = () => {

  const {data, setData} = useContext(PhotosContext)
  
  const agregarFavorito =(id)=>{
    const dataActualizada = data.map(dataPhotos =>{
        if(dataPhotos.id === id){
            return{
                ...dataPhotos, liked: !dataPhotos.liked
            }
        }
        return dataPhotos;
    })
    setData(dataActualizada)
  }

  return ( 
    <>
    <div className="App">
      <h1>Fotos favoritas</h1>
    </div>    
    <div className="gallery grid-columns-5 p-3">
      {
        data && 
        data.filter(dataPhotos => dataPhotos.liked == true).map((dataPhotos, index) => (
  
          <div key={'div1' + index} className="cuadroimagen">
            <button type="button" onClick={()=> agregarFavorito(dataPhotos.id)}>
              <img key={'img' + index} src={dataPhotos.src.tiny} alt={dataPhotos.alt} />
              {dataPhotos.liked === false ? <IconHeart filled="0"/> : <IconHeart filled="1"/>}
              <div key={'p' + index} className="textoimg">{dataPhotos.alt}</div>
            </button>
          </div>
        ))
      }
    </div>
    </>
  )
};
export default Favorites;