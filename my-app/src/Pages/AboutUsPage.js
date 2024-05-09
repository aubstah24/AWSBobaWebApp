import {Container, Divider, Form, FormButton, FormField, Header, TextArea} from "semantic-ui-react";
import React from "react";

export const AboutUsPage = () => {
    return (
        <Container className='menupage'>

            <div className="bio">
                <Header as='h1' style={{padding: '10px', textAlign: 'center', fontFamily: 'Elephant'}}>OUR STORY</Header>
                <p>We are a family-owned business and we wanted to provide affordable drinks while customers do their laundry.  We call it sip n' wash!
                We tak pride in our drink quality by going the extra lengths to ensure our ingredients are what we say they are.  </p>
            </div>

            <Divider/>

            <Header as="h2" style={{padding: '10px', textAlign: 'center', fontFamily: 'Elephant'}}>Questions:</Header>
            <p style={{textAlign: 'center'}}>If you have any questions or concerns, please fill out this form and we will get back to you as soon as we can.</p>
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