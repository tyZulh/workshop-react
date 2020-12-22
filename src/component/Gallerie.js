import photos from './listPhotos'
import PhotoCard from './PhotoCard';

function Gallery() {
  return(
    <div className='gallery'>
      <h2 className='gallery-title'>Gallerie</h2>
      
      <div className='gallery-photos'>
        {photos.map((photo) => {
          return (
            <PhotoCard photo={photo}/>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery;
