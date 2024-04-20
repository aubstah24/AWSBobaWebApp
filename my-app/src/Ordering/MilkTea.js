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
import React, {useContext, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {TOPPINGS} from "../data/toppings";
import {sweetnessOptions} from "../data/sweetness";
import { v4 as uuidv4 } from 'uuid';



export const MilkTea = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, defaultAtr } = props.data;
    const { addToCart, updateTopping, removeTopping, topping, resetOptions } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [sweetness, setSweetness] = useState();
    const [checked, setChecked] = useState([]);
    const myUuid = uuidv4();

    const handleMTDropdown = (e, { value }) => {
        console.log("VALUE: ", value);
        setSweetness(value);
    };

    const handleCheckbox = (e, { value }) => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value]);
            updateTopping(e.target.value)
            console.log("Toppings Array: ");
            console.log(topping)
        } else {
            setChecked(checked.filter((item) => item !== e.target.value));
            removeTopping(e.target.value);
        }
    };

    const handleModal = (e) => {
        addToCart([{id}, {drink}, {price}, {img}, {}, {sweetness}, {}, {topping}, {uid: myUuid}])
        e.preventDefault();
        resetOptions();
        setSweetness(prevState => {})
        setOpen(false);
    }

    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={img} size="large" centered={true}/>
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
                {/*default regular will have regular boba as topping == id=6
                   sweetness default is 50% == id=3
                   [{id: 1}, {drink: Tea}, {price: 3}, {img: ./img/img.png}, {milk: milk}, {sweet: sweet}, {flavor: teaFlavor}, {topping: topping}
                   */}
                <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {sweet: 3}, {}, {topping: [6]}, {uid: myUuid}])} color='black'>
                    Add To Cart
                </Button>
                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Button>Customize</Button>}
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
                                onChange={handleMTDropdown}
                            />
                        </ModalDescription>

                        <Header as='h5'>Select Toppings:</Header>
                        <ModalDescription>
                            <Container>
                                {TOPPINGS.map((option) => (
                                    <div key={option.id}>
                                        <Input type="checkbox"
                                               value={option.id}
                                               onChange={handleCheckbox}/>
                                        <Label>{option.topping}</Label>
                                    </div>
                                    )

                                )}
                            </Container>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={handleModal} primary>Add To Cart</Button>
                    </ModalActions>
                </Modal>
            </Card>
        </div>
    );
}

