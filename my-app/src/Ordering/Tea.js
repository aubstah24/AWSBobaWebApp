import {
    Button,
    Card,
    CardDescription,
    CardMeta,
    Container,
    Dropdown,
    Header,
    Image,
    Modal,
    ModalActions,
    ModalContent,
    ModalDescription,
    ModalHeader
} from "semantic-ui-react";
import {useContext, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {teaflavors} from "../data/teaflavors";


export const Tea = (props) => {
    const { id, drink, price, img, description, caffeine, includesDairy, defaultAtr, flavor } = props.data;
    const { addToCart } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [teaFlavor, setFlavor] = useState();

    const handleDropdown = (e, { value }) => {
        setFlavor(value);
    };

    const handleModal = () => {
        return {
            id: {id},
            drink: {drink},
            price: {price},
            img: {img},
            flavor: {flavor}
        };
    }

    return (
        <div key={id} className="product">
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
                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Button>Select Tea</Button>}
                >
                    <ModalHeader>Tea Flavors</ModalHeader>
                    <ModalContent>
                        <Header as='h5'>Select One Tea Flavor:</Header>

                        <ModalDescription>
                            <Dropdown
                                placeholder='Select Flavor'
                                fluid
                                selection
                                options={teaflavors}
                                value={teaFlavor}
                                onChange={handleDropdown}
                            />

                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={() => addToCart({
                            id: {id},
                            drink: {drink},
                            price: {price},
                            img: {img},
                            flavor: {teaFlavor}
                        })} primary>Add to Cart</Button>
                    </ModalActions>
                </Modal>
            </Card>
        </div>
    );
}