import {Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image} from "semantic-ui-react";

const SingleItem = ({ product }) => {
    return (
        <div>
            <Card>
                <CardHeader>{product.drink}</CardHeader>
                <Image wrapped ui={false} src={product.img} style={{objectFit: "cover"}}/>
                <CardDescription>{product.description}</CardDescription>
                <CardMeta>$ {product.price}</CardMeta>
                <CardContent>{product.caffeine} | {product.includesDairy}</CardContent>
                <Button>
                    Add to Cart
                </Button>
            </Card>
        </div>
    )
}