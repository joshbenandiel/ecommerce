import axios from 'axios';
import productsData from '../components/data/RecomendationsData';

class ProductService {

  getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 'success', data: productsData })
      }, 2000)
    })
  }

  getSingleProducts = () => {}
}

export default new ProductService

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 'success', data: productsData })
    }, 2000)
  })
}
