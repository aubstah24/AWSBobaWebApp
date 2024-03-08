import {Card, CardHeader, CardContent, CardDescription, Image, CardMeta, Button} from "semantic-ui-react";
import * as PropTypes from "prop-types";
import {Component} from "react";


export class DrinkItem extends Component {
    render() {
        let {drink, id, price, img, description, category, caffeine, includesDairy} = this.props;
        const quantity = 0;

        return (
            <Card>
                <CardHeader>{drink}</CardHeader>
                <Image wrapped ui={false} src={img} style={{objectFit: "cover"}}/>
                <CardDescription>{description}</CardDescription>
                <CardMeta>$ {price}</CardMeta>
                <CardContent>{caffeine} | {includesDairy}</CardContent>
                <Button>
                    Add to Cart
                </Button>
            </Card>
        )
    }
}

DrinkItem.propTypes = {
    drink: PropTypes.any,
    id: PropTypes.any,
    price: PropTypes.any,
    img: PropTypes.any,
    description: PropTypes.any,
    category: PropTypes.any,
    caffeine: PropTypes.any,
    includesDairy: PropTypes.any
}