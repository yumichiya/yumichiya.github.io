import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { searchDogs } from '../../services/dog.service';
import { Dog } from '../../models/dog.model';
import "./MatchModal.css";

function MatchModal({show, onSetShow, match}: {show: boolean, onSetShow: any, match: string}) {

    const handleClose = () => onSetShow(false);
    
    const [dog, setDog] = useState<Dog[]>([]);

    useEffect(() => {
        searchDogs([match]).then(dogs => {
            setDog(dogs);
        });
    }, [show]);

    return (
    <>
      {(dog) ? 
        (<Modal className="match-modal" show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
            <Modal.Title>Matched Dog For Me</Modal.Title>
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
        </Modal>) :
        (<div>No matches found.</div>)
      }
    </>
    )
}

export default MatchModal