import { UseSelector, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import Product from "./Product";

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart);

    const delete1 =(id) => {
        dispatch(remove(id))
    }

    const cards = products.map(product =>(
        <div className="col-md-6">
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
            <Button variant="warning" onClick={() => delete1(product.id) }>Remove to Cart</Button>
        </Card.Footer>
        </Card>
    </div>
        ))

    return(<>

       <div className="row">
            {cards}
       </div>
    </>);
}

export default Cart;