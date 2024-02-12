import {Container, Form, FormButton, FormField, Header, TextArea} from "semantic-ui-react";
import React from "react";

export const AboutUsPage = () => {
    return (
        <Container className='menupage' style={{width: '100%'}}>
            <Header className='pageheader' as='h1'>OUR STORY</Header>
            <Form style={{width: '70%', padding: '40px', left: '18%'}}>
                <FormField>
                    <label>First Name</label>
                    <input placeholder="First Name"/>
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder="First Name"/>
                </FormField>
                <FormField
                    control={TextArea}
                    label="Question/Issue:"
                    placeholder="Describe your issue here or ask any questions..."/>
                <FormButton>SUBMIT</FormButton>
            </Form>
        </Container>
    )

}