import {
    Image,
    Button,
    Container,
    Header
} from "semantic-ui-react";


export const DrinkItem = (props) => {
    const { id, drink, price, img, description, category, caffeine, includesDairy } = props.data;

    return (
        <div>
            <Image src={img} style={{width: "100%"}} />
            <Container fluid>
                <Header as='h2' textAlign="center">{drink}</Header>
                <span>{description}</span>
                <p>${price}</p>
                {product.caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                <br/>
                {product.includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
            </Container>
            <Button>Add To Cart</Button>
        </div>
    )
}