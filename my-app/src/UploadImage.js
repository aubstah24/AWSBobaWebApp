import {Button, Container, Form, Header, Input} from "semantic-ui-react";
import {useState} from "react";


export const UploadImage = () => {

    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');
    const [viewPdf, setViewPdf] = useState(null);

    const fileType = ['application/pdf'];
    const handlePDFFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            } else {
                setPdfFile(null);
                setPdfFileError('Please select valid pdf type');
            }
        } else {
            console.log("Select your file");
        }
    }

    const handlePDFFileSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    }

    return (
        <div>
            <Form onSubmit={handlePDFFileSubmit}>
                <Input type="file" onChange={handlePDFFileChange}/>
                {pdfFileError && (<div>{pdfFileError}</div>)}
                <br/> <br/>
                <Button type="submit">UPLOAD MENU</Button>
            </Form>
            <br/> <br/>
            <Header as='h4'>VIEW MENU PDF</Header>
            <Container>

            </Container>
        </div>
    )
}