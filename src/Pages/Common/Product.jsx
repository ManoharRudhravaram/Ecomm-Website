import { NavLink } from 'react-router-dom';

import '../../Css/Product.css';
function Product({ item }) {
    let { img, title, price, id } = item;
    return (
        <div className="col-md-3 m-1" id='product'>
            <div className='image'>
                <NavLink to={`/singlepage/${id}`}> <img src={img} alt="abc" className='img-fluid' style={{ height: "180px", width: "250px" }} /></NavLink>
            </div>
            <p>{title}</p>
            <p>Price : Rs.{price}</p>
        </div>
    )
}

export default Product;