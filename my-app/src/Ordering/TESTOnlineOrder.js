import { Header, Tab, TabPane} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {Coffee} from "./Coffee";
import {MilkTea} from "./MilkTea";
import {Tea} from "./Tea";
import {FruitTea} from "./FruitTea";
import {Latte} from "./Latte";
import {supabase} from "../supabase_client";


const { data } = await supabase.from("DrinkList").select();

const topicPanes = [
    { menuItem: 'COFFEE', render: () => <TabPane>
            <Row md={2}>
                {data.map((product ) => {
                        if (product.category === "Coffee") {
                            return <Coffee data={product} key={product.id} />;
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

export async function TESTOnlineOrder() {

    return (
        <div className="onlineorderingpage">
            <Header as="h1" textAlign="center">ORDER ONLINE HERE</Header>

            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={topicPanes} />
        </div>
    );

}

