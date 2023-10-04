import React from 'react'
import { BiGasPump } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import { BsSpeedometer2 } from 'react-icons/bs';
import { RiSteering2Fill } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import './carcard.css'

const Carcard = ({ id, image, name, model_No, people, fuel, milaze, driving_Mode, rent_Cost }) => {
    return (
        <div className='carCardDiv'>

            <img src={image} alt="" />

            <div className='nameModelSection'>
                <div className='carName' style={{ fontSize: '1.5rem' }}>{name}</div>
                <div className='carModel'>{model_No}</div>
            </div>

            <div className='carFeatures'>
                <div>
                    <div><BiGasPump className='icons' />  {people} People</div>
                    <div><GoPeople className='icons' />  {fuel}</div>
                </div>
                <div>
                    <div><BsSpeedometer2 className='icons' />  {milaze}</div>
                    <div><RiSteering2Fill className='icons' />  {driving_Mode}</div>
                </div>
            </div>
            <div className='hrline'></div>
            <div className='carRentOption'>
                <div>&#36;{rent_Cost} <span>/month</span></div>
                <div>
                    <FiHeart className='likeIcon' />
                    <button>Rent now</button>
                </div>
            </div>
        </div>
    )
}

export default Carcard