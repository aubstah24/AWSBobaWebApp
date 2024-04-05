import {
    Image,
    Button,
    Container,
    Header, Card, CardMeta, CardDescription
} from "semantic-ui-react";
import {useContext} from "react";
import {CartContext} from "../Cart/CartContext";


export const DrinkItem = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy } = props.data;
    const { addToCart } = useContext(CartContext);

    return (
        <div key={id} className="product">
            <Card>
                <Header as='h2' textAlign='center'>{drink}</Header>
                    <Image src={img} size="large" centered={true}/>
                    <Container fluid>
                        <CardDescription>{description}</CardDescription>
                        <p>${price}</p>

                        <CardMeta>
                            {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                            <br/>
                            {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                        </CardMeta>
                    </Container>
                    <Button onClick={() => addToCart(id)} color='black'>Add To Cart</Button>
            </Card>
        </div>
    );
}