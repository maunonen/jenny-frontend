import React, {useState} from 'react'
import Switch from './svg/Switch'
import Plus from './svg/Plus'
import Road from './svg/Road'
import Time from './svg/Time'
import Zone from './svg/Zone'
import Dog from './svg/Dog'
import Luggage from './svg/Luggage'
import Plane from './svg/Plane'
import Invalid from './svg/Invalid'
import LuggageKg from './svg/LuggageKg'
import LuggageSpecial from './svg/LuggageSpecial'
import _ from 'lodash'
import priceService from '../services/price'
import Body from './svg/Body'

import {useSelector} from 'react-redux'



const AddPrice = () => {

  const [priceDate, setPricedate] = useState(''); 
  const [minPrice, setMinprice] = useState(''); 
  const [startPrice, setStartprice] = useState(''); 
  const [distance, setDistance] = useState(''); 
  const [duration, setDuration] = useState(''); 
  const [zone, setZone] = useState(''); 
  
  const [city, setCity] = useState(''); 
  const [street, setStreet] = useState(''); 
  const [index, setIndex] = useState(''); 
  const [phone, setPhone] = useState('');
  const [phoneOpenOurs, setPhoneopenours] = useState('');

  const [email, setEmail] = useState(''); 
  const [emailOpenOurs, setEmailopenours] = useState(''); 

  const [luggage, setLuggage] = useState(false)
  const [specialLuggage, setSpecialLuggage] = useState(false)
  const [animal, setAnimal] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [delivery, setDeliviry] = useState(false)
  const [airport, setAirport] = useState(false)
  const [group, setGroup] = useState('')
  const [message, setMessage] = useState(null)

  const token  = useSelector(state => state.user.token )

  const [additional , setAdditional ] = useState({
    luggage : false, 
    animal : false, 
    invalid : false, 
    delivery : false, 
    specialLuggage : false, 
    airport : false , 
  })

  const handleLuggage = (event) => {
    setLuggage(event.target.checked)
  }
  
  const handleAnimal = (event) => {
    setAnimal(event.target.checked)
  }
  const handleInvalid = (event) => {
    setInvalid(event.target.checked)
  }
  const handleDelivery = (event) => {
    setDeliviry(event.target.checked)
  }
  const handleSpecialLuggage = (event) => {
    setSpecialLuggage(event.target.checked)
  }
  const handleAirport = (event) => {
    setAirport(event.target.checked)
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const priceObjet = {}
    const additionalObject = {}
    const services = []
    
    if (priceDate !== undefined) { priceObjet['priceDate'] = priceDate; } 
    if ( minPrice !== undefined){priceObjet['minPrice'] = minPrice; } 
    if ( startPrice !== undefined){priceObjet['startPrice'] = startPrice; } 
    if ( distance !== undefined){priceObjet['distance'] = distance ; } 
    if ( duration !== undefined){priceObjet['duration'] = duration ; } 
    if ( zone !== undefined){priceObjet['zone'] = zone ; } 
    if ( city !== undefined){priceObjet['city'] = city ; } 
    if ( street !== undefined){priceObjet['street'] = street ; } 
    if ( index !== undefined){priceObjet['index'] = index ; } 
    if ( phone !== undefined){priceObjet['phone'] = phone ; } 
    if ( phoneOpenOurs !== undefined){priceObjet['phoneOpenOurs'] = phoneOpenOurs ; } 
    if ( email !== undefined){priceObjet['email'] = email ; } 
    if ( emailOpenOurs !== undefined){priceObjet['emailOpenOurs'] = emailOpenOurs ; } 
    if ( luggage !== undefined){priceObjet['luggage'] = luggage ; } 

    /* create services array  */
    if ( luggage ){services.push('luggage'); } 
    if ( specialLuggage ){services.push('specialLuggage'); } 
    if ( animal){services.push('animal'); } 
    if ( invalid){services.push('invalid'); } 
    if ( delivery ){services.push('delivery'); } 
    if ( airport){services.push('airport'); } 

    /* add group to additional object */
    if (group){additionalObject['group'] = group ; } 
    
    if (!_.isEmpty(services)){
      additionalObject['services'] = services; 
    }
    
    if (!_.isEmpty(additionalObject)){
      priceObjet['additional'] = additionalObject; 
    }

    if (_.isEmpty(priceObjet)) {
      handleMessage('Price is empty', 'error')
      return ; 
    } 

    try {
      console.log('send request')
      const responce = await priceService.addPrice(priceObjet, token ); 
      handleMessage('Succes', 'error')
      
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // Object not found checck status code
        console.log('Responce', err.response)
        if ( err.response.status && err.response.status === 404){
          handleMessage('Status 404 Not found', 'error')
          
        } else if ( err.response.status && err.response.status === 400){
          handleMessage('status 400 bad request', 'error')
        }  else if (err.response.status && err.response.status === 403){
          handleMessage('You don\'t have permission', 'error')
        } else if (err.response.status && err.response.status === 401){
          handleMessage(`Error: Status 401 ${err.response.data.error}`, 'error')
        } else if ( err.response.status && err.response.status === 500) {
          handleMessage('Error status 500', 'error')
          }
      }
      else if (err.request) {
        handleMessage('Connection to server lost', 'error')
      } else {
        handleMessage('Wrong request setting', 'error')
      }
    }
  } 

  const handleMessage = (message,type) => {
    setMessage({ type, message })
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }
  


  
  return (
    <div className="creator-container">
      <div className="creator-form">
      <form>
        <h1 className="creator-form__title">Create your price</h1>
        { message && <h1> { message.message } { message.type} </h1> }
        <div className="form-row">
          <input 
            className="form-row__input form-row__input--sm"
            type="date" 
            value={priceDate} 
            name="price date" 
            onChange={({target})=> setPricedate(target.value)}
            placeholder="price date"
          />
        </div>
        <div className="form-row">
          <input 
            className="form-row__input form-row__input--sm"
            type="text" 
            value={minPrice} 
            name="minimal price" 
            onChange={({target})=> setMinprice(target.value)}
            placeholder="minimal price"
          />
        </div>


        <div className="form-row">
          <input 
            className="form-row__input form-row__input--sm"
            type="text" 
            value={startPrice} 
            name="start_price" 
            onChange={({target})=> setStartprice(target.value)}
            placeholder="start price"
          />
        </div>
        
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={distance} 
              name="diastance" 
              onChange={({target})=> setDistance(target.value)}
              placeholder="distance"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={duration} 
              name="duration" 
              onChange={({target})=> setDuration(target.value)}
              placeholder="duration"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={zone} 
              name="zone" 
              onChange={({target})=> setZone(target.value)}
              placeholder="zone"
            />
          </div>
          <hr/>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={city} 
              name="city" 
              onChange={({target})=> setCity(target.value)}
              placeholder="city"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={street} 
              name="street" 
              onChange={({target})=> setStreet(target.value)}
              placeholder="street"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={index} 
              name="post index" 
              onChange={({target})=> setIndex(target.value)}
              placeholder="post index"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={phone} 
              name="phone" 
              onChange={({target})=> setPhone(target.value)}
              placeholder="phone"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={phoneOpenOurs} 
              name="phone open ours" 
              onChange={({target})=> setPhoneopenours(target.value)}
              placeholder="phone open ours"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={email} 
              name="email" 
              onChange={({target})=> setEmail(target.value)}
              placeholder="email"
            />
          </div>
          <div className="form-row">
            <input 
              className="form-row__input form-row__input--sm"
              type="text" 
              value={emailOpenOurs} 
              name="email open ours" 
              onChange={({target})=> setEmailopenours(target.value)}
              placeholder="email open ours"
            />
          </div>
          <div className="form-row">
            <fieldset>
              <legend>Jos hinta tai sen osa perustuu:</legend>
              <label>
                <input 
                  type="checkbox"
                  value="luggage"
                  onChange={handleLuggage}
                  className="form-row__checkbox-input"
                />
                <span className="form-row__checkbox-label">
                  matkatavaroiden määrään
                </span>
              </label>
              <br/>
            <label>
              <input 
                type="checkbox"
                value="specialLuggage"
                onChange={handleSpecialLuggage}
                className="form-row__checkbox-input"
              />
              <span className="form-row__checkbox-label">
                erikoismatkatavaroiden kuljetukseen:
              </span>
            </label>
            <br/>

            <label>
              <input 
                type="checkbox"
                value="animal"
                onChange={handleAnimal}
              />
              <span className="form-row__checkbox-label">
                eläinten kuljetukseen
              </span>
            </label>
            <br/>
            <label>
              <input 
                type="checkbox"
                value="invalid"
                onChange={handleInvalid}
                className="form-row__checkbox-input"
              />
              <span className="form-row__checkbox-label">
                esimerkiksi avustamiseen, paarien asennukseen tai porrasvetoon
              </span>
            </label>
            <br/>
            <label>
              <input 
                type="checkbox"
                value="delivery"
                onChange={handleDelivery}
                className="form-row__checkbox-input"
              />
              <span className="form-row__checkbox-label">
                tavarakuljetukseen
              </span>
            </label>
            <br/>
            <label>
              <input 
                type="checkbox"
                value="airpoprt"
                onChange={handleAirport}
                className="form-row__checkbox-input"
              />
              <span className="form-row__checkbox-label">
                siihen, että matka aloitetaan lentoasemalta
              </span>
            </label>
            <br/>
            <div className="form-row">
            <label htmlFor="additional_group">Additiniola fees htmlFor group more than</label>
            <input 
              className="form-row__input form-row__input--sm"
              type="text"
              name="additional_group" 
              value={group} 
              name="additional_group" 
              onChange={({target})=> setGroup(target.value)}
              placeholder="group size"
            />
            </div>
          </fieldset>
          <button 
            onClick={handleSubmit}
            className="form-button form-button--sm"
          >
              Suubmit
          </button>
          </div>
        </form>
      </div>
      <div className="creator-template creator-template--sticky">
        <div className="creator-header pr-4">
          <p className="creator-header__date pb-0 mb-0">{priceDate}</p>
        </div>
        <div className="creator-table">
          <table className="pt-0">
            <colgroup>
              <col className="creator-table__column-one"/>
              <col className="creator-table__column-two"/>
              <col className="creator-table__column-three"/>
            </colgroup>
            <tbody>
            
            
            <tr className="creator-table__row">
              <td colSpan="3" className="creator-table__title mt-0 pt-0">Hinnasto</td>
            </tr>
            <tr className="creator-table__row">
              <td colSpan="3">
                <div className="creator-table__underline"></div> 
              </td>
            </tr>
            <tr className="creator-table__row">
              <td colSpan="3" className="creator-table__min-price creator-table__min-price--pb-2">Minimihinta: {minPrice}</td>
            </tr>
            <tr className="creator-table__row">
              <td>
                <Switch className="creator-table__icon"/>
              </td>
              <td>Aloitusmaksu</td>
              <td>{startPrice} <span>&euro;</span></td>
            </tr>
            <tr>
              <td className="creator-table__plus" colSpan="3">
                <Plus className="creator-table__plus-icon"/>
              </td>
            </tr>
            <tr className="creator-table__row">
              <td>
                <Road className="creator-table__icon"/>
              </td>
              <td>Matka</td>
              <td>{distance} <span>&euro;</span>/km</td>
            </tr>
            <tr>
              <td className="creator-table__plus" colSpan="3">
              <Plus className="creator-table__plus-icon"/>
              </td>
            </tr>
            <tr className="creator-table__row">
              <td>
                <Time
                  className="creator-table__icon--time"
                  fill="none"
                />
              </td>
              <td>Aika</td>
              <td>{duration} <span>&euro;</span>/min</td>
            </tr>
            <tr className="creator-table__row">
              <td colSpan="3">
                <div className="creator-table__underline"></div> 
              </td>
            </tr>
            <tr className="creator-table__row">
              <td>
                <Zone className="creator-table__icon"/>
              </td>
              <td>Vyöhyke</td>
              <td>{zone} <span>&euro;</span></td>
            </tr>
            </tbody>
          </table>
        </div>  
        <div className="creator-footer">
          <div className="creator-footer__adress">
            <p className="mt-1">{city}, {street}, {index} {city}</p>
            <p>Puh.{phone} ({phoneOpenOurs}), {email} ({emailOpenOurs})</p>

          </div>
          <div className="creator-footer__additional ml-1">
            <p className="mt-1">Lisämaksut</p>
              { luggage && <Luggage fill="yellow" className="creator-footer__icon mr-1"/> }
              { delivery && <LuggageKg fill="yellow" className="creator-footer__icon mr-1"/> }
              { animal && <Dog fill="yellow" className="creator-footer__icon mr-1"/>} 
              { invalid && <Invalid fill="yellow" className="creator-footer__icon mr-1"/> }
              { airport && <Plane fill="yellow" className="creator-footer__icon mr-1"/> }
              { specialLuggage && <LuggageSpecial fill="yellow" className="creator-footer__icon mr-1"/>} 
              
              { ((!!group && ( group > 9) || (group < 1) )) || <Body fill="yellow" amount = {group} className="creator-footer__icon"/>  }
          </div>
        </div>
      </div>
    </div>
      
    /* { group &&  <Body fill="yellow" amount = {6} className="creator-footer__icon"/> }  */
  )
}

export default AddPrice