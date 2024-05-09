import {
    Image,
    Button,
    Container,
    Header,
    Card,
    CardMeta,
    CardDescription,
    ModalHeader,
    ModalContent,
    ModalDescription,
    Dropdown,
    ModalActions,
    Modal,
    Label, Input
} from "semantic-ui-react";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {TOPPINGS} from "../data/toppings";
import {sweetnessOptions} from "../data/sweetness";
import { v4 as uuidv4 } from 'uuid';
import {supabase} from "../supabase_client";



export const FruitTea = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, defaultAtr } = props.data;
    const { addToCart } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [sweetness, setSweetness] = useState();
    const [topping, setChecked] = useState([]);
    const myUuid = uuidv4();
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        getURL()
    }, []);

    async function getURL() {
        const {data} = await supabase.from('DrinkList').select().eq('id', id)
        const publicURL = supabase.storage.from('drinkImagesStorage').getPublicUrl(data[0].img);

        setImageURL(publicURL.data.publicUrl)
    }

    const handleFTDropdown = (e, { value }) => {
        setSweetness(value);
    };

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setChecked([...topping, e.target.value]);
            console.log("CHECKED ARRAY: ", topping);
        } else {
            console.log("REMOVED TOPPING: ", e.target.value);
            setChecked(topping.filter((item) => item !== e.target.value));
        }
    };


    const handleModal = (e) => {
        addToCart([{id}, {drink}, {price}, {img}, {}, {sweetness}, {}, {topping}, {uid: myUuid}, imageURL])
        e.preventDefault();
        setSweetness({})
        setOpen(false);
    }

    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px", fontFamily: 'Elephant'}}>{drink}</Header>
                <Image src={imageURL} size="large" centered={true}  style={{marginBottom: "15px"}}/>
                <Container fluid  style={{marginBottom: "15px"}}>
                    <CardDescription style={{fontFamily: 'Metro Nova Hawaiian Light'}}>{description}</CardDescription>
                    <p style={{fontFamily: 'Georgia', fontWeight: 'bold'}}>{defaultAtr}</p>
                    <p>${price.toFixed(2)}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>
                {/*default regular will have regular boba as topping == id=6
                   sweetness default is 50% == id=3
                   [{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: milk}, {sweet: sweet}, {flavor: teaFlavor}, {topping: topping}
                   */}
                <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {sweet: 3}, {}, {topping: ['6']}, {uid: myUuid}, imageURL])} color='brown'>
                    Add To Cart
                </Button>
                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Button color='black'>Customize</Button>}
                >
                    <ModalHeader>Customize Your Drink</ModalHeader>
                    <ModalContent>
                        <Header as='h5'>Select Your Level of Sweetness:</Header>
                        <ModalDescription>
                            <Dropdown
                                placeholder='Select Level'
                                fluid
                                selection
                                options={sweetnessOptions}
                                value={sweetness}
                                onChange={handleFTDropdown}
                            />
                        </ModalDescription>

                        <Header as='h5'>Select Toppings:</Header>
                        <ModalDescription>
                            {TOPPINGS.map((option) => (
                                    <div key={option.id}>
                                        <Input type="checkbox"
                                               value={option.id}
                                               onChange={handleCheckbox}/>
                                        <Label>{option.topping}</Label>
                                    </div>
                                )

                            )}
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={handleModal} color='brown'>Add To Cart</Button>
                    </ModalActions>
                </Modal>
            </Card>
        </div>
    );
}

