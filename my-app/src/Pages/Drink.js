import {CartState} from "../ShoppingCartContext";
import {SingleItem} from "../data/SingleItem";


const Drink = () => {
    const {
        state: { products }
    } = CartState();

    return <div className='drink'>
        <div className="productContainer">
            {products.map((product) => {
                return <SingleItem product={product} key={product.id} />;
            })}
        </div>
    </div>
}