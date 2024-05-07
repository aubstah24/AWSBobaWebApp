import { Header, Tab, TabPane} from "semantic-ui-react";
import React from "react";
import {PRODUCTS} from "../data/products";
import {Row} from "react-bootstrap";
import {Coffee} from "./Coffee";
import {MilkTea} from "./MilkTea";
import {Tea} from "./Tea";
import {FruitTea} from "./FruitTea";
import {Latte} from "./Latte";
import {supabase} from "../supabase_client";

const { data } = await supabase.from("DrinkList").select();

const panes = [
    { menuItem: 'COFFEE', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
                        if (product.category === "Coffee") {

                            return <Coffee data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'LATTE', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
                        if (product.category === "Latte") {
                            return <Latte data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'TEA', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
                        if (product.category === "Tea") {
                            return <Tea data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'MILK TEA', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
                        if (product.category === "Milk Tea") {
                            return <MilkTea data={product} key={product.id}/>;
                        }
                    }
                )}
            </Row>
        </TabPane> },
    { menuItem: 'FRUIT TEA', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
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
            <Header as="h1" style={{padding: '20px', textAlign: 'center', fontFamily: 'Elephant'}}>ORDER ONLINE HERE</Header>

            <Tab menu={{ fluid: true, vertical: false, tabular: true }} panes={panes} />

            <br/>
        </div>
    );

}

