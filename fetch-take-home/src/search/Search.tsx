import "./Search.css";
import logo from "../assets/fetch.svg";
import { KeyboardEventHandler, useEffect, useState } from "react";

import Select, { MultiValue } from 'react-select';
import Button from "react-bootstrap/Button";

import { getDogBreeds, matchDogs, searchDogBreeds, searchDogs } from "../services/dog.service.ts"
import { Dog, DogBreed, DogBreedResult, DogSearch, MatchDogResult } from "../models/dog.model.ts";
import { FloatingLabel, Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import FavoritesModal from "./favorites-modal/FavoritesModal.tsx";
import MatchModal from "./match-modal/MatchModal.tsx";

interface Option {
  readonly label: string;
  readonly value: string;
}

function Search() {

  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);

  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [minAge, setMinAge] = useState<string>("");
  const [maxAge, setMaxAge] = useState<string>("");
  const [zipCode, setZipCode] = useState<string[]>([]);

  const [dog, setDog] = useState<Dog[]>([]);
  const [dogCount, setDogCount] = useState<number>(NaN);
  const [totalDogCount, setTotalDogCount] = useState<number>(0);
  const [filterOrder, setfilterOrder] = useState<string>("asc");

  const [validated, setValidated] = useState(true);

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<readonly Option[]>([]);

  const [fromPage, setFromPage] = useState<number>(0);

  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavModal, setShowFavModal] = useState(false);
  const [match, setMatch] = useState<string>('');
  const [showMatchModal, setShowMatchModal] = useState(false);

  const components = {
    DropdownIndicator: null,
  };

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(inputValue)) {
          setValue((prev) => [...prev, createOption(inputValue)]);
          setZipCode((prev) => [...prev, inputValue]);
          setInputValue('');
          setValidated(true);
        } else {
          setValidated(false);
        }
        event.preventDefault();
    }
  }

  useEffect(() => {
    const dto: DogSearch = {
      breeds: [],
      zipCodes: [],
      ageMin: '',
      ageMax: ''
    }
    getDogBreeds().then(
      result => setDogBreeds(result.map((breed: string) => {return {value: breed, label: breed}}))
    );
    searchDog(true, dto);

  }, []);

  useEffect(() => {}, [dogCount, fromPage]);

  useEffect(() => {
  }, []);

  const handleSelection = (selectedOption: MultiValue<DogBreed>) => {
    setSelectedBreeds(selectedOption.map((o:any) => {return o.value}));
  };

  const handleZipCodes = (enteredZipCodes: MultiValue<Option>) => {
    setValue(enteredZipCodes);
    setZipCode(enteredZipCodes.map((code: any) => {return code.value}));
  }

  function handleSearch(event: any) {
    const dto: DogSearch = {
      breeds: selectedBreeds || [],
      zipCodes: zipCode || [],
      ageMin: minAge || '',
      ageMax: maxAge || ''
    }
    
    setFromPage(0);
    setfilterOrder("asc");
    searchDog(true, dto);
    

    event.preventDefault();
    event.stopPropagation();
  }

  function searchDog(newSearch: boolean = false, dto: DogSearch, dogSort: string = "asc", from: number = 0) {
    searchDogBreeds(dto, dogSort, from).then((result: DogBreedResult) => {
      searchDogs(result.resultIds).then(dogs => {
        setDog(dogs);
      });
      if(newSearch) {
        if(result.total > 0) {
          if(result.total > 20) {
            setDogCount(20);
          } else {
            setDogCount(result.total);
          }
          setTotalDogCount(result.total);
        } else {
          setDogCount(0);
          setTotalDogCount(0);
          setFromPage(0);
        }
      }
    });
  }

  const handleAddFavDog = (dog: Dog) => {
    setFavorites((prev) => [...prev, dog.id]);
  }

  const handleRemoveFavDog = (dog: Dog) => {
    setFavorites((prev) => prev.filter(fav => fav === dog.id));
  }

  const handleOpenFavModal = (show: boolean) => {
    setShowFavModal(show);
  }

  const handleOpenMatchModal = (show: boolean) => {
    setShowMatchModal(show);
  }

  const handleMyMatch = () => {
    matchDogs(favorites).then((matchDogs: MatchDogResult) => {setMatch(matchDogs.match);handleOpenMatchModal(true);});
    
  }

  function sortByBreed(sort: string) {
    const dto: DogSearch = {
      breeds: selectedBreeds || [],
      zipCodes: zipCode || [],
      ageMin: minAge || '',
      ageMax: maxAge || ''
    }
    searchDog(false, dto, sort, fromPage);
    setfilterOrder(sort);
  }

  function handlePrevious() {
    const dto: DogSearch = {
      breeds: selectedBreeds || [],
      zipCodes: zipCode || [],
      ageMin: minAge || '',
      ageMax: maxAge || ''
    }
    searchDog(false, dto, filterOrder, fromPage - 20);
    setFromPage(fromPage - 20);
    setDogCount(dogCount - 20);
  }

  function handleNext() {
    const dto: DogSearch = {
      breeds: selectedBreeds || [],
      zipCodes: zipCode || [],
      ageMin: minAge || '',
      ageMax: maxAge || ''
    }
    searchDog(false, dto, filterOrder, fromPage + 20);
    setFromPage(fromPage + 20);
    setDogCount(dogCount + 20);
  }

  return (
    <div className="main-search-container">
      <img className="logo" src={logo}></img>
      <div className="search-container">
        <div className="search-bar">
          <Form className="search-dogs-container" onSubmit={handleSearch}>
            <FloatingLabel label="Breeds" className="label-breeds">
              <Select className="select-breeds" classNamePrefix="select-breeds" isMulti options={dogBreeds} onChange={handleSelection} placeholder=""></Select>
            </FloatingLabel>
            <FloatingLabel label="Minimum Age" className="label-age">
              <Form.Control className="field-control" name="minAge" onChange={e => setMinAge(e.target.value)}></Form.Control>
            </FloatingLabel>
            <FloatingLabel label="Maximum Age" className="label-age">
              <Form.Control className="field-control" name="maxAge" onChange={e => setMaxAge(e.target.value)}></Form.Control>
            </FloatingLabel>
            <FloatingLabel label="Zip Codes" className="label-zip">
              <CreatableSelect 
                className="select-zip-codes" 
                classNamePrefix="select-zip-codes" 
                components={components}
                inputValue={inputValue}
                isMulti
                menuIsOpen={false}
                onChange={handleZipCodes}
                onInputChange={(newValue) => setInputValue(newValue)}
                onKeyDown={handleKeyDown}
                placeholder="Enter a zip code"
                value={value}
              ></CreatableSelect>
              {(!validated) ?
                (<div className="invalid-zip">Please enter a valid zip code.</div>) :
                (<div></div>)
              }
            </FloatingLabel>
            <Button className="purple-button" type="submit">Search</Button>
          </Form>
          <div className="favorite-dogs-container">
            <Button className="purple-button view-fav-btn" onClick={() => handleOpenFavModal(true)}>View My Favorites</Button>
            <FavoritesModal show={showFavModal} onSetShow={(show: any) => handleOpenFavModal(show)} favorites={favorites}></FavoritesModal>
            <Button className="purple-button" onClick={handleMyMatch}>Find My Match</Button>
            <MatchModal show={showMatchModal} onSetShow={(show: any) => handleOpenMatchModal(show)} match={match}></MatchModal>
          </div>
        </div>
        {
          totalDogCount === 0 ? 
            (<div className="dog-list-container"><h2 className="no-result">No results matching your criteria.</h2></div>) :
            (<div className="dog-list-container">
              <div className="filter-bar">
                {(filterOrder === "asc") ? 
                  (<Button className="dark-purple-button sort-button" onClick={() => sortByBreed("desc")}>
                    <span className="material-symbols-outlined sort-icon">keyboard_arrow_up</span>
                    Breed
                  </Button>) 
                  :
                  (<Button className="dark-purple-button sort-button" onClick={() => sortByBreed("asc")}>
                    <span className="material-symbols-outlined sort-icon">keyboard_arrow_down</span>
                    Breed
                  </Button>)
                }
              </div>
              <div className="dog-container">
                {
                  dog.map((dog) => (
                    <div key={dog.id} className="dog-item">
                      <img className="dog-image" src={dog.img}></img>
                      {(favorites.includes(dog.id)) ? 
                      (<span className="material-symbols-outlined favorited-icon" onClick={() => handleRemoveFavDog(dog)}>favorite</span>) :
                      (<span className="material-symbols-outlined favorite-icon" onClick={() => handleAddFavDog(dog)}>favorite</span>)}
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
              <div className="page-container">
                {(fromPage === 0) ? (<div className="no-previous"></div>) : (<Button className="purple-button" onClick={handlePrevious}>Previous</Button>)}
                
                <div className="dog-count">{dogCount ? dogCount : 0} of {totalDogCount}</div>
                <Button className="purple-button" onClick={handleNext}>Next</Button>
              </div>
            </div>)
        }
        
      </div>
    </div>
  )
}

export default Search
