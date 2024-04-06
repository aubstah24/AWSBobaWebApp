import {Divider, Header, Tab, TabPane} from "semantic-ui-react";
import React from "react";
import {PRODUCTS} from "../data/products";
import {DrinkItem} from "../data/DrinkItem";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Coffee} from "./Coffee";
import {MilkTea} from "./MilkTea";
import {Tea} from "./Tea";
import {FruitTea} from "./FruitTea";
import {Latte} from "./Latte";

const panes = [
    { menuItem: 'COFFEE', render: () => <TabPane>
            <Row md={2}>
                {PRODUCTS.map((product, key ) => {
                        if (product.category === "Coffee") {
                            return <Coffee data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'LATTE', render: () => <TabPane>
            <Row md={2}>
                {PRODUCTS.map((product, key ) => {
                        if (product.category === "Latte") {
                            return <Latte data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'TEA', render: () => <TabPane>
            <Row md={2}>
                {PRODUCTS.map((product, key ) => {
                        if (product.category === "Tea") {
                            return <Tea data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'MILK TEA', render: () => <TabPane>
            <Row md={2}>
                {PRODUCTS.map((product, key ) => {
                        if (product.category === "Milk Tea") {
                            return <MilkTea data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'FRUIT TEA', render: () => <TabPane>
            <Row md={2}>
                {PRODUCTS.map((product, key ) => {
                        if (product.category === "Fruit Tea") {
                            return <FruitTea data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
]

export function OnlineOrderingPage() {

    return (
        <div className="onlineorderingpage">
            <Header as="h1" textAlign="center">ORDER ONLINE HERE</Header>

            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            <Divider/>
            <Header as='h2'>All Drinks</Header>
            <Row md={3}>
                {PRODUCTS.map((product, key) => (
                    <Col>
                        <DrinkItem data={product} key={product.id}/>
                    </Col>
                ))}
            </Row>
        </div>
    );

}

