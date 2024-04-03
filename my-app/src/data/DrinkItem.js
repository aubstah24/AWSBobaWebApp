import {
    Image,
    Button,
    Container,
    Header
} from "semantic-ui-react";
import {useContext} from "react";


export const DrinkItem = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy } = props.data;
    const { addToCart, cartItems } = useContext(CartContext);
    const count = cartItems[id]

    return (
        <div>
            <Image src={img} style={{width: "100%"}} />
            <Container fluid>
                <Header as='h2' textAlign="center">{drink}</Header>
                <span>{description}</span>
                <p>${price}</p>
                {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                <br/>
                {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
            </Container>
            <Button onClick={() => addToCart(id)}>Add To Cart</Button>
        </div>
    )
}