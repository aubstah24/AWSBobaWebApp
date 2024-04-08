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
import {v4 as uuidv4} from "uuid";


export const MilkTea = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, category, defaultAtr } = props.data;
    const { addToCart } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [toppings, setTopping] = useState([]);
    const [sweetness, setSweetness] = useState();
    const [checked, setChecked] = useState([]);


    const handleDropdown = (e, { value }) => {
        setSweetness(value);
    };

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value]);
            setTopping([...toppings, e.target.value]);
            console.log("Toppings Array: ");
            console.log(toppings)
            console.log(e.target.value)
        } else {
            setChecked(checked.filter((item) => item !== e.target.value));
            setTopping(toppings.filter((item) => item !== e.target.value));
            console.log("Toppings ADJUSTED: ");
            console.log(toppings)
            console.log(e.target.value)
        }
    };

    const uuid = uuidv4();

    const getPrice = () => {
        let total = {price};

        if (!toppings.length) {
            return total;
        } else {
            TOPPINGS.map((top) => {
                for (const item in toppings) {
                    if (item === top.id) {
                        total += top.price;
                    }
                }
            })
            return total;
        }

    }

    return (
        <div className="product">
            <Card fluid>
                <Header as='h2' textAlign='center' style={{paddingTop: "15px"}}>{drink}</Header>
                <Image src={img} size="large" centered={true}/>
                <Container fluid>
                    <CardDescription>{description}</CardDescription>
                    <p>{defaultAtr}</p>
                    <p>${price}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>
                {/*default regular will have regular boba as topping == id=6
                   sweetness default is 50% == id=3 */}
                <Button onClick={() => addToCart({
                    key: {uuid},
                    id: {id},
                    drink: {drink},
                    price: {price},
                    img: {img},
                    flavor: null,
                    topping: [6],
                    milk: null,
                    sweet: 3
                })} color='black'>Add To Cart</Button>
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
                                onChange={handleDropdown}
                            />
                        </ModalDescription>

                        <Header as='h5'>Select Toppings:</Header>
                        <ModalDescription>
                            <Container>
                                {TOPPINGS.map((option) => (
                                    <div key={option.id}>
                                        <Input
                                            type="checkbox"
                                            value={option.id}
                                            onChange={handleCheckbox}
                                        />
                                        <Label>{option.topping}</Label>
                                    </div>
                                    )

                                )}
                            </Container>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={() => addToCart({
                            key: {uuid},
                            id: {id},
                            drink: {drink},
                            price: {price},
                            img: {img},
                            flavor: null,
                            topping: {toppings},
                            milk: null,
                            sweet: {sweetness}
                        })} primary>Add To Cart</Button>
                    </ModalActions>
                </Modal>
            </Card>
        </div>
    );
}
