import {
    Button,
    Card,
    CardContent,
    CardDescription,
    Grid,
    CardHeader,
    GridRow, GridColumn, Image, Dropdown
} from "semantic-ui-react";
import {CardText, CardFooter} from "react-bootstrap";
import {useState} from "react";
import sweetness from "./sweetness.json";
import toppings from "./toppings.json";



function SingleItem (props) {

    const product = props.product;

    const handleButtonAddCart = e => {
        e.preventDefault();
        addToCart(product.id, handleSweet(), handleToppings());
    }


    return <div className="eachitem">
        <Card style={{ width: "100%" }}>
            <Grid celled>
                <GridRow>
                    <GridColumn>
                        <CardHeader as="h2">{product.drink}</CardHeader>
                    </GridColumn>
                </GridRow>
                <GridRow columns={2}>
                    <GridColumn width={4}>
                        <Image wrapped ui={true} src={product.img} size="medium"/>
                    </GridColumn>
                    <GridColumn width={10}>
                        <CardDescription textAlign="center" style={{ fontsize: "20px" }}>{product.description}</CardDescription>
                        <CardText>$ {product.price}</CardText>
                        <CardContent>
                            {product.caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                            <br/>
                            {product.includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                        </CardContent>
                        <CardText>
                            <Dropdown fluid selection options={sweetness}/>
                            <Dropdown fluid selection options={toppings}/>
                        </CardText>
                        <CardFooter>
                            <Button color="brown" onClick={handleButtonAddCart}>
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </GridColumn>
                </GridRow>
            </Grid>

        </Card>
    </div>;
}

export default SingleItem;
