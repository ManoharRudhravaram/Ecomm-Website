import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../Context/ProductContext';
import AddtoCart from '../AddtoCart';
import '../../Css/SinglePage.css'

function SinglePage() {
  let Products = useProduct();
  const { id } = useParams();
  let single = Products.find((e) => {
    return e.id == id;
  })
  let { img, title, price, brand, stock } = single;

  return (
    <>
      <center>
        <div className="container mt-5 mb-3">
          <div className="row main">
            <div className="col-md-6">
              <div className="img m-1">
                <img src={img} alt="c" className='img-fluid'/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text">
                <h1>{title}</h1>
                <h2>{price}</h2>
                <h3>{brand}</h3>
                <AddtoCart single={single} /><br />
                <h4>Stock : {stock}</h4>
              </div>
            </div>
          </div>
        </div>
      </center>

    </>
  )
}

export default SinglePage