import {
    Image,
    Button,
    Container,
    Header, Card, CardMeta, CardDescription
} from "semantic-ui-react";
import {useContext} from "react";
import {CartContext} from "../Cart/CartContext";


export const FruitTea = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, category, defaultAtr } = props.data;
    const { addToCart } = useContext(CartContext);

    const handleModal = () => {
        if(category === "Coffee") {

        }
        addToCart(id);
    }

    return (
        <div key={id} className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={img} size="large" centered={true}/>
                <Container fluid>
                    <CardDescription>{description}</CardDescription>
                    <p>{defaultAtr}</p>
                    <p>${price}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>
                {/*<Button onClick={handleModal}>Add To Cart</Button>*/}
                <Button onClick={() => addToCart(id)} color='black'>Add To Cart</Button>
                <Button onClick={() => handleModal()} color='black'>Customize</Button>
            </Card>
        </div>
    );
}