import {Button, Grid, GridColumn, GridRow, Header, Image} from "semantic-ui-react";
import React from "react";
import inside from "../images/boba_inside.jpg";
import matcha from "../images/matcha_landing.png";
import gallery from "../images/boba_gallery_filler.jpg";


export const LandingPage = () => {

    return (
        <div className="landing">
            <Grid>
                <GridRow columns={1} >
                    <GridColumn className="welcome">
                            <Header className='landingheader' as='h1' style={{padding: '10px', textAlign: 'center', fontFamily: 'Elephant'}}>WELCOME TO OUR FAMILY</Header>
                            <p style={{fontFamily: 'Metro Nova Hawaiian Regular'}}>Welcome to our family-owned boba shop. We sell coffee, espresso, boba teas, and boba milk
                                teas. </p>
                            <Button color="black" href="/menu">SEE MENU</Button>
                    </GridColumn>
                </GridRow>
                <GridRow columns={2} className="info">
                    <GridColumn>
                        <Image src={inside} alt={inside} fluid/>
                    </GridColumn>
                    <GridColumn className="coffeesection">
                        <Header as="h2" style={{fontFamily: 'Metro Nova Hawaiian Regular'}}>
                            Travel with our roasts from around the world...
                        </Header>
                        <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                    </GridColumn>
                </GridRow>
                <GridRow columns={2} className="info">
                    <GridColumn className="coffeesection">
                        <Header as="h2" style={{fontFamily: 'Metro Nova Hawaiian Regular'}}>
                            ...And check out our green tea blends
                        </Header>
                        <p>There is a whole world when you talk about Green Tea.  We have our high end matcha powder as well as our hojicha blend.  We have green tea for our tea-based boba drinks or our plain hot tea.  </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={matcha} alt={matcha} fluid />
                    </GridColumn>
                </GridRow>
            </Grid>

            <br/><br/>


            <Grid>
                <Header as="h2" className="gridgallery">SOME OF OUR FAVORITES...</Header>
                <GridRow columns={4}>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                </GridRow>
                <GridRow columns={4}>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                    <GridColumn>
                        <Image src={gallery} alt={gallery} circular fluid/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )

}