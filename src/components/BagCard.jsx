import React, { useState, useEffect, useRef } from 'react'
import { removeToCart, setQuantityItemCart } from '../redux/product';
import { MenuItem,Select, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

const BagCard = ({item , index}) => {

  const dispatch = useDispatch()

  const [value, setValue] = useState(item.count)
  const temp = useRef()


  
  const handleQuantity = () => {
    dispatch(setQuantityItemCart({id: item.id, quantity: parseInt(value)}))
  }
  temp.current = handleQuantity;
  useEffect(() => {
    temp.current();
    
  }, [value])

  return (
    <div 
    key={index}
    className='bag-card-wrapper'>
      <img className='bag-card-image' src={item.img} alt='item-bag'/>
      <div className="container">
        <div className="row card-details-wrapper">
          <div className="col-7">
            <div className='item-header-bag'>
              <h3 className='fw-bold me-5'>{item.inch} {item.name} {item.size} {item.color}</h3>
            </div>
            {item.pencil && <p className='m-0'>*{item.pencil}</p>}
            {item.folio && <p>*{item.folio.folio} - {item.folio.folioColor}</p>}
            {item.keyboard && <p className='m-0'>*{item.keyboard} - {item.keyboardColor}</p>}
            {item.smartKey && <p className='m-0'>*{item.smartKey}</p>}
          </div>
          <div className="col-2 d-flex align-items-center">
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
              {quantity.map((count, index) => {
              return <MenuItem key={index} value={count.value}>{count.value}{count.add}</MenuItem>
              })}      
            </Select>
            }
          </div>
          <div className="col-3 d-flex flex-column align-items-center justify-content-center">
              <h3 className='fw-bold'>
              ₱ {item.totalPrice.toLocaleString()}
              </h3>
              <button
              onClick={() => dispatch(removeToCart(item))}
              className='bag-remove-button'>Remove</button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 d-flex align-items-center fw-bold">
            <i className="fab fa-usps"></i>
            <p className='m-0 ms-2'>Ships in 1-3 business days.</p>
          </div>
        </div>
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
