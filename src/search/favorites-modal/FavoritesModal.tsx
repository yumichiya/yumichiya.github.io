import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { searchDogs } from '../../services/dog.service';
import { Dog } from '../../models/dog.model';
import "./FavoritesModal.css";

function FavoritesModal({show, onSetShow, favorites}: {show: boolean, onSetShow: any, favorites: string[]}) {

    const handleClose = () => onSetShow(false);
    
    const [dog, setDog] = useState<Dog[]>([]);

    useEffect(() => {
        searchDogs(favorites).then(dogs => {
            setDog(dogs);
        });
    }, [show]);

    return (
        <Modal className="favorites-modal" show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>My Favorite Dogs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="dog-container">
                {
                  dog.map((dog) => (
                    <div key={dog.id} className="dog-item">
                      <img className="dog-image" src={dog.img}></img>
                      {/* {(favorites.includes(dog.id)) ? 
                      (<span className="material-symbols-outlined favorited-icon" onClick={() => handleRemoveFavDog(dog)}>favorite</span>) :
                      (<span className="material-symbols-outlined favorite-icon" onClick={() => handleAddFavDog(dog)}>favorite</span>)} */}
                      <div className="dog-description">
                        <div className="dog-name">{dog.name}</div>
                        <div className="dog-year-breed">
                          <span>{dog.age} year(s) old</span>
                          <span className="dog-breed">{dog.breed}</span>
                        </div>
                        <div className="dog-zip">
                          <span className="material-symbols-outlined zip">location_on</span>{dog.zip_code}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </Modal.Body>
        </Modal>
    )
}

export default FavoritesModal