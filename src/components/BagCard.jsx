import React, { useState } from 'react'
import { getCount, getTotal, removeToCart, setQuantityItemCart } from '../redux/product';
import { Button, MenuItem, NativeSelect, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const BagCard = ({item , index, setTotalPrice}) => {

  const dispatch = useDispatch()
  const [value, setValue] = useState(1)


  useEffect(() => {
    dispatch(setQuantityItemCart({id: item.id, quantity: parseInt(value)}))
  }, [value])
  return (
    <div 
    key={index}
    className='bag-card-wrapper'>
      <img className='bag-card-image' src={item.img} alt='item-bag-image'/>
      <div className='item-header-bag'>
       <h3 className='fw-bold me-5'>{item.name} {item.size} {item.color}</h3>
      </div>
      {value >= 10 ? 
      <TextField
        className='input-bag'
        id="outlined-number"
        type="number"
        label='Quantity:'
        value={value}
        margin='normal'
        onChange={(e) => setValue(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      :
      <Select
        className='select-bag'
        label="Quantity"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {quantity.map(count => {
        return <MenuItem value={count.value}>{count.value}{count.add}</MenuItem>
        })}      
      </Select>
      }
      <div className='d-flex flex-column'>
        <h3 className='fw-bold'>
        ₱ {item.totalPrice.toLocaleString()}
        </h3>
        <button
        onClick={() => dispatch(removeToCart(item))}
        className='bag-remove-button'>Remove</button>
      </div> 
    </div>
  )
}

const quantity = [
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
  {value: 6},
  {value: 7},
  {value: 8},
  {value: 9},
  {value: 10, add: '+'},
]

export default BagCard
