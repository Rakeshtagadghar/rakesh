import React from 'react';
import fetch from 'isomorphic-fetch';

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactMessage: ''
        }
    }

    handleForm = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const {contactName, contactEmail, contactSubject, contactMessage } = this.state;
        const   data =  {
            name: contactName,   
            email: contactEmail,  
            subject:contactSubject,
            message: contactMessage
        }
        fetch({
            method: "POST", 
            url:"http://localhost:3000/send", 
            body: JSON.stringify(data)
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    render(){
        const {contactName, contactEmail, contactSubject, contactMessage } = this.state;
    return (
       <section id="contact" className="s-contact target-section">

<div className="overlay"></div>

<div className="row narrow section-intro">
    <div className="col-full">
        <h3>Contact</h3>
        <h1>Say Hello.</h1>
        
        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
    </div>
</div>

<div className="row contact__main">
    <div className="col-eight tab-full contact__form">
        <form name="contactForm" >
            <fieldset>

            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)} name="contactName" type="text" id="contactName" placeholder="Name" value={contactName} minLength="2" required="" aria-required="true" className="full-width" />
            </div>
            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)} name="contactEmail" type="email" id="contactEmail" placeholder="Email" value={contactEmail} required="" aria-required="true" className="full-width" />
            </div>
            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)} name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value={contactSubject} className="full-width" />
            </div>
            <div className="form-field">
                <textarea onChange={(e) => this.handleForm(e)} name="contactMessage" id="contactMessage" value={contactMessage} placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
            </div>
            <div className="form-field">
                <button className="full-width btn--primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>

            </fieldset>
        </form>

        <div className="message-warning">
            Something went wrong. Please try again.
        </div> 

        <div className="message-success">
            Your message was sent, thank you!<br />
        </div>
                
    </div>
    <div className="col-four tab-full contact__infos">
        <h4 className="h06">Phone</h4>
        <p>Phone: (+63) 555 1212<br />
        Mobile: (+63) 555 0100<br />
        Fax: (+63) 555 0101
        </p>

        <h4 className="h06">Email</h4>
        <p>someone@holawebsite.com<br />
        info@holawebsite.com
        </p>

        <h4 className="h06">Address</h4>
        <p>
        1600 Amphitheatre Parkway<br />
        Mountain View, CA<br />
        94043 US
        </p>
    </div>

</div>

</section> 
)}
    }

export default Contact;