import React , { useState , useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import '../styles/SearchItems.css'
import Button from '@mui/material/Button';
import { setHighestPrice , setLowestPrice } from '../redux/price';
import { Link } from 'react-router-dom';

const SearchItems = ({searchTerm}) => {

  const [gridIsClick, setGridIsClick] = useState(true)
  const dispatch = useDispatch()
  const products = useSelector((state) => {
    return state.product.products
  })

  const selectedCheckbox = useSelector(state => {
    return state.selectedCheckbox.selectedCheckbox
  })


  const [itemSearch, setItemSearch] = useState([])
  
  useEffect(() => {
    const list = []
    products.map(item => {
      if(item.searchTag && item.searchTag.toLowerCase() === selectedCheckbox){
        return list.push(item)
      } else {
        return null;
      }
    })
    setItemSearch(list)
  }, [selectedCheckbox, products])
  
  useEffect(() => {
    let biggestNumber = 0
    itemSearch.forEach(item => {
      if(biggestNumber < item.price){
        biggestNumber = item.price;
      }
    })
    dispatch(setHighestPrice(biggestNumber))

    let price = itemSearch.map(item => item.price)
    const lowestNumber = Math.min(...price)
    dispatch(setLowestPrice(lowestNumber))
  }, [itemSearch, dispatch])



  useEffect(() => {
    let searchList = []
    products.map(item => {
      if(item.searchTag && item.searchTag.toLowerCase().includes(searchTerm.toLowerCase())) {
        return searchList.push(item)
      } else{
        return null;
      }
    })
    setItemSearch(searchList)
  }, [searchTerm, products])

  
  return (
      <div className="search-items-container">
        <div className='item-search-header p-3 position-relative'>
          {selectedCheckbox ? <h4 className='fw-bold'>Categories for "{selectedCheckbox}"</h4> 
          :<h4 className='fw-bold'>Search Results for "{searchTerm}"</h4> 
          }
          <p>Showing {itemSearch.length} products</p>
          <div className='d-flex position-absolute bottom-0 end-0 p-3'>
            <p className='m-0'>View</p>
            <i
            onClick={() => setGridIsClick(true)} 
            className={`${gridIsClick ? 'search-grid-active' : 'search-grid'} fas fa-th m-1`}></i>
            <i
            onClick={() => setGridIsClick(false)}  
            className={`${gridIsClick ? 'search-grid' : 'search-grid-active'} fas fa-list m-1`}></i>
          </div>
        </div>
        <div className='container-fluid px-0'>
          <div className="row m-0">
            {itemSearch.length > 0 && itemSearch.map((item, index) => {
              return (
                <div key={index} className={gridIsClick ? 'col-sm-6 col-md-3 item-search-card' : 'item-search-card-list'}>
                  <img src={item.img} alt="item-searched"/>
                  <div className={gridIsClick ? null : 'w-25 m-5'}>
                    <p className='fw-bold text-start fs-5 w-100 mt-4'>{item.series}</p>
                    <p className='fw-bold text-start fs-5 w-100'>₱{item.price.toLocaleString()}</p>
                  </div>
                  <Link to={`/product/buy/${item.tag}`}>
                   <Button className='list-button' variant='contained' fullWidth>View Product</Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
         
    
  )
}




export default SearchItems
