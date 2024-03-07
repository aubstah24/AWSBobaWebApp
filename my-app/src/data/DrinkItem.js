import {Card, CardHeader, CardContent, CardDescription, Image, CardMeta} from "semantic-ui-react";
import * as PropTypes from "prop-types";
import {Component} from "react";


export class DrinkItem extends Component {
    render() {
        let {drink, id, price, img, description, category, caffeine, includesDairy} = this.props;
        return (
            <Card>
                <CardHeader>{drink}</CardHeader>
                <Image src={img} circular/>
                <CardDescription>{description}</CardDescription>
                <CardMeta>${price}</CardMeta>
                <CardContent>{caffeine} | {includesDairy}</CardContent>
                <div>
                    {quantity === 0 ? (
                        <Button>
                            Add to Cart
                        </Button>
                    ): null}
                </div>
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