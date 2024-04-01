import React from 'react';
import {Button, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";

const ProductRow = ({ product, addProduct }) => {
    const handleAddProduct = e => {
        e.preventDefault();
        addProduct(product.id);
    }

    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Image src={product.image} alt="Product Image" />
                </GridColumn>
                <GridColumn>
                    <Header as='h4'>{product.drink}</Header>
                    <span>{product.description}</span>
                </GridColumn>
                <GridColumn>
                    <p>$ {product.price}</p>
                </GridColumn>
                <Button color='success' onClick={handleAddProduct}>
                    <span>Add to cart</span>
                </Button>
            </GridRow>
        </Grid>
    );
}

export default ProductRow;