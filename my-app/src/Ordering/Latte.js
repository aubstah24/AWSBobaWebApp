import {
    Button,
    Card,
    CardDescription,
    CardMeta,
    Container,
    Dropdown, DropdownItem,
    Header,
    Image,
    Modal,
    ModalActions,
    ModalContent,
    ModalDescription,
    ModalHeader, Select
} from "semantic-ui-react";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {v4 as uuidv4} from "uuid";
import {supabase} from "../supabase_client";



export const Latte = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, defaultAtr } = props.data;
    const { addToCart } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [milkOptions, setMilkOptions] = useState([]);
    const [milk, setMilk] = useState('');
    const myUuid = uuidv4();
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        getURL();
        getOptions();
    }, []);

    async function getOptions() {
        const {data} = await supabase.from('MilkOptions').select();
        setMilkOptions(data)
    }

    async function getURL() {
        const {data} = await supabase.from('DrinkList').select().eq('id', id)
        const publicURL = supabase.storage.from('drinkImagesStorage').getPublicUrl(data[0].img);

        setImageURL(publicURL.data.publicUrl)
    }


    const handleDropdown = (e, { value }) => {
        e.preventDefault();
        setMilk(value);
        console.log(value);
    };

    const handleModal = (e) => {
        addToCart([{id}, {drink}, {price}, {img}, {milk}, {}, {}, [], {uid: myUuid}, imageURL])
        e.preventDefault();
        setOpen(false);
    }

    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={imageURL} size="large" centered={true}/>
                <Container fluid>
                    <CardDescription>{description}</CardDescription>
                    <p>{defaultAtr}</p>
                    <p>${price.toFixed(2)}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>
                <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {}, {}, [], {uid: myUuid}, imageURL])} color='black'>
                    Add To Cart
                </Button>
                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Button color="pink">Customize</Button>}
                >
                    <ModalHeader>Milk Substitutes</ModalHeader>
                    <ModalContent>
                        <Header as='h5'>Select One Substitute:</Header>

                        <ModalDescription>
                            <Dropdown placeholder='Select Milk'
                                      selection
                                      value={milk}
                                      options={milkOptions}
                                        onChange={handleDropdown}/>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={handleModal} color="black">Add to Cart</Button>
                    </ModalActions>
                </Modal>
            </Card>
        </div>
    );
}