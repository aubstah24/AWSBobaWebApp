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
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../Cart/CartContext";
import {v4 as uuidv4} from "uuid";
import {supabase} from "../supabase_client";


const { data } = await supabase.from("TeaFlavors").select();


export const Tea = (props) => {
    const {id, drink, price, img, description, caffeine, includesDairy, defaultAtr} = props.data;
    const {addToCart} = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [teaFlavor, setFlavor] = useState();
    const [imageURL, setImageURL] = useState(null);
    const myUuid = uuidv4();

    useEffect(() => {
        getURL()
    }, []);

    async function getURL() {
        const {data} = await supabase.from('DrinkList').select().eq('id', id)
        const publicURL = supabase.storage.from('drinkImagesStorage').getPublicUrl(data[0].img);

        setImageURL(publicURL.data.publicUrl)
    }

    const handleDropdown = (e, {value}) => {
        setFlavor(value);
    };

    const handleModal = (e) => {
        addToCart([{id}, {drink}, {price}, {img}, {}, {}, {teaFlavor}, [], {uid: myUuid}, imageURL])
        e.preventDefault();
        setFlavor(prevState => {
        });
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
                    <p>${price}</p>
                    <CardMeta>
                        {caffeine === "TRUE" ? "Contains Caffeine" : "Caffeine-Free"}
                        <br/>
                        {includesDairy === "TRUE" ? "Contains Dairy" : "Dairy-Free"}
                    </CardMeta>
                </Container>

                {id === 23 ?
                    <Button onClick={() => addToCart([{id}, {drink}, {price}, {img}, {}, {}, {teaFlavor: "Green Tea"}, [], {uid: myUuid}, imageURL])} color="black">Add to Cart</Button>
                :
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
                                options={data}
                                value={teaFlavor}
                                onChange={handleDropdown}
                            />

                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={handleModal} color="black">Add to Cart</Button>
                    </ModalActions>
                </Modal>
                }
            </Card>
        </div>
    );
}