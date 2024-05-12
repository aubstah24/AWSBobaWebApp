import {Container, Divider, Grid, GridColumn, GridRow, Header, Image, Rail, Segment} from "semantic-ui-react";
import React from "react";
import family from '../images/fam-filler.jpeg';
import kau from '../images/Kaucoffee.jpeg'
import grnwell from '../images/greenwell.png';
import ulu from '../images/uluwehi.png';
import holu from '../images/Holualoa.jpg';

export const AboutUsPage = () => {
    return (
        <Container className='menupage'>

            <div className="bio">
                <Header as='h1' style={{padding: '10px', textAlign: 'center', fontFamily: 'Elephant'}}>OUR
                    STORY</Header>
                <Image src={family} size='big' centered floated/>
                <br/>
                <p>We are a family-owned business and we work hard to create a comfortable experience. Our boba shop is
                    located in our King Laundromat area where you can do your clothes and enjoy a drink.
                    We like call it sip n' wash! We take pride in our drink quality by going the extra lengths to ensure
                    our ingredients are what we say they are.
                    Supporting local is also in our best interest, which is why we personally gather coffee beans from
                    Big Island farms.
                </p>
            </div>

            <Header as='h1'>Our Kope</Header>
                <span style={{fontFamily: 'Metro Nova Hawaiian Regular', fontSize: '16px'}}>
                    'Kope' is Hawaiian for 'Coffee' and we make sure our coffee is 100% locally grown.  Here are some of our local farms we use.
                </span>

            <Grid columns='equal' style={{padding: '40px'}}>
                <GridRow >
                    <GridColumn textAlign='center' width={5}>
                        <Segment>Kaʻu Coffee Mill’s coffees are produced with 100% renewable energy from our Hydroelectric
                            power system. This provides us with clean, sustainable energy while caring for our
                            environment, for the planet and for the neighboring community.
                        </Segment>
                    </GridColumn>
                    <GridColumn width={5}>
                        <Segment>
                            <Image src={kau} size='medium'/>
                            <Rail position='right' attached>
                                <Segment size='big'>Ka'u Coffee</Segment>
                            </Rail>
                        </Segment>
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn>

                    </GridColumn>
                    <GridColumn width={5}>
                        <Segment>
                            <Image src={ulu} size='medium'/>
                            <Rail position='left' attached>
                                <Segment size='big'>Uluwehi Coffee Farm</Segment>
                            </Rail>
                        </Segment>
                    </GridColumn>
                    <GridColumn textAlign='center' width={4}>
                        <Segment>With exceptional quality potential at high altitudes, SL34 is known for flavors characterized by a complex citric acidity, heavy mouthfeel and a clean, sweet finish.
                            SL34 is an Arabica coffee variety mostly found in Kenya.
                        </Segment>
                    </GridColumn>
                </GridRow>

                <GridRow columns={3} >
                    <GridColumn textAlign='center' width={5}>
                        <Segment>Award-winning coffee is grown in the heart of the Big Island and is handpicked at peak ripeness for rich flavor.
                            Carefully selecting coffee beans to ensure that each batch is top quality.
                            From bold to mild, classic to flavored, we have a roast for every coffee lover.
                        </Segment>
                    </GridColumn>
                    <GridColumn width={5}>
                    <Segment>
                        <Image src={grnwell} size='medium'/>
                        <Rail position='right' attached>
                            <Segment size='big'>Greenwell Farms</Segment>
                        </Rail>
                    </Segment>
                </GridColumn>
                </GridRow>

                <GridRow columns={3} >
                    <GridColumn width={6}>

                    </GridColumn>
                    <GridColumn width={6}>
                        <Segment className='aboutcoffee'>
                            <Image src={holu} size='large'/>
                            <Rail position='left' attached>
                                <Segment size='big'>Holualoa Kona Coffee</Segment>
                            </Rail>
                        </Segment>
                    </GridColumn>
                    <GridColumn textAlign='center' width={4}>
                        <Segment>
                            We’re Holualoa Kona Coffee Company, and we’re proud to be innovators of the highest standard. Our coffee and facility is certified Organic by Where Food Comes From.
                            Through meticulous and reliable work, our company has become known as one of the top Organic Coffee Processors in Kona, Hawaii.
                        </Segment>
                    </GridColumn>
                </GridRow>

            </Grid>

            <div className='aboutcoffee'>

            </div>
            <Divider/>

            <Header as="h2" style={{padding: '10px', textAlign: 'center', fontFamily: 'Elephant', fontSize: '30px'}}>Contact
                Us!</Header>
            <p style={{textAlign: 'center'}}>If you have any questions or concerns, please email us with your name
                at <b>Contact@DaMorningGrind.com</b>.</p>
            <p style={{textAlign: 'center'}}>We will get back to you as soon as possible.</p>
            <p style={{textAlign: 'center'}}>***If you are writing to us about an order, please include your order
                number in the subject field.</p>

        </Container>
    )

}