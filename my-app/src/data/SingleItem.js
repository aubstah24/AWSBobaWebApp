import {
    Button,
    Card,
    CardContent,
    CardDescription,
    Grid,
    CardHeader,
    GridRow, GridColumn, Image
} from "semantic-ui-react";
import ShoppingCartContext from "../ShoppingCartContext";
import {CardText, CardFooter, Form, Col} from "react-bootstrap";
import {useContext} from "react";

function SingleItem (props) {

    const product = props.product;


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
                            <Button color="brown">
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
