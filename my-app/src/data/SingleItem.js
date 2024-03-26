import {
    Button,
    Card,
    CardContent,
    CardDescription,
    Grid,
    CardHeader,
    GridRow, GridColumn, Image
} from "semantic-ui-react";
import {CardText, CardFooter} from "react-bootstrap";
import {useState} from "react";
import CartCounter from "./CartCounter";
import {addToCart} from "../ShoppingCartContext";


function SingleItem (props) {

    const product = props.product;


    console.log(count);

    this.handleAddItem = function (id) {
        return function (p1: React.MouseEvent<HTMLButtonElement>, p2: ButtonProps) {
            addToCart(id);
        };
    };
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
                            {product.includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}</CardContent>
                        <CardFooter>
                            <Button color="brown" onClick={this.handleAddItem(product.id)}>
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
