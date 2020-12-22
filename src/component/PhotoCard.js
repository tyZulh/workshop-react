import { useState } from "react";

function PhotoCard({photo}) {
  const [like, setLike] = useState(false)

  return(
    <div className='photoCard'>
      <h3>{photo.name}</h3>
      <img src={photo.src} alt={photo.name} />
      <button onClick={() => setLike(!like)}>
        {like ? 'Un-like' : 'Like' }
      </button>
      {like && <p>J'aime cette photo</p>}
    </div>
  )
}

export default PhotoCard;
