import React from 'react';
import {Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import {product} from '../data/items.json'

const CartProductRow = ({ lineItem }) => {
    return (
        <div className="row product">
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Image src={lineItem.media.source} alt={lineItem.name} height="50" />
                    </GridColumn>
                    <GridColumn>
                        <Header as='h5'>{lineItem.name}</Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as='h5'>{lineItem.quantity}</Header>
                    </GridColumn>
                    <GridColumn>
                        {lineItem.line_total.formatted_with_symbol}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default CartProductRow;