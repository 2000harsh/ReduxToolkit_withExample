import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { remove } from '../store/cartSlice';
const Product = () => {

    const dispatch = useDispatch();

    const [products,getProducts] = useState([]);

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data=> data.json())
        .then(result => getProducts(result))
    }, [])

    const addtoCart = (product) => {
        dispatch(add(product))
    }

    const delete1 =(product) => {
        dispatch(remove(product))
    }

    const cards = products.map(product =>(
    <div className="col-md-3">
    <Card  className='h-100'   key={product.id} style={{marginBottom:'10px'}}>
        <div className='text-center'>
         <Card.Img variant="top" src={product.image} style={{height:'100px', width:'100px'}}/>
        </div>
        
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
               INR:  {product.price}
            </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'white'}}>
            <Button variant="primary" style={{marginBottom:'3px'}} onClick={() => addtoCart(product) }>Add to Cart</Button><br/>
            <Button variant="primary" onClick={() => delete1(product) }>Remove to Cart</Button>
        </Card.Footer>
    </Card>
</div>
    ))

    return(<>

        <h1 className='title'>Product Dashboard</h1>
        <div className='row'>
            {cards}
        </div>
        {JSON.stringify(products)}
    </>);
}

export default Product;
