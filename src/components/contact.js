import React from 'react';
import fetch from 'isomorphic-fetch';

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contactName: {
                unvalidated:true,
                min:2,
                touched: false,
                value:''
            },
            contactEmail:  {
                unvalidated:true,
                min:5,
                touched: false,
                value:''
                },
            contactSubject:  {
                unvalidated:true,
                min:1,
                touched: false,
                value:''
                },
            contactMessage:  {
                unvalidated:true,
                min:5,
                touched: false,
                value: ''
                },
                send:false,
                sent:false,
                sending:false,
                failed:false
        }
    }

    handleForm = async (e) => {
        let fieldname  = e.target.name;
        let  state = {...this.state}
        let prevfield  =state[fieldname]
        if(fieldname === 'contactEmail'){
            const email = this.validateEmail(e.target.value)
            return await this.setState({[fieldname]: {...prevfield, value: e.target.value,unvalidated:!email}})
        }
        if(e.target.value.length >1 && fieldname !== 'contactEmail'){
           return  await this.setState({[fieldname]: {...prevfield, value: e.target.value,unvalidated:false}})
        }
        await this.setState({[fieldname]: {...prevfield, value: e.target.value}})
        const {contactName, contactEmail, contactSubject, contactMessage } = this.state;
        let self = this;
        setTimeout(() => {
            if(contactName.unvalidated === false && 
                contactEmail.unvalidated === false && 
                contactSubject.unvalidated === false &&
                contactMessage.unvalidated === false ){
                return  self.setState({send:true})
             }
        }, 100)
    }

    handleBlur = (field) => {
        let fieldname  = field.target.name;
       let  state = {...this.state}
       let prevfield  =state[fieldname]
        this.setState({[fieldname]: {...prevfield, touched: true}})
    }

    validateEmail(elementValue){      
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue); 
      } 

    handleSubmit(e){
        e.preventDefault();
        const {contactName, contactEmail, contactSubject, contactMessage, sending, sent, send } = this.state;
        let self = this;
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: contactName.value, email: contactEmail.value, subject:contactSubject.value, message: contactMessage.value})
          }).then(
              self.setState({sending:false,sent:true})
          ).catch(
            self.setState({failed:true})
          )

    }
    render(){
        const {contactName, contactEmail, contactSubject, contactMessage , send, sending, sent, failed} = this.state;
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
            <label for="contactName">Name</label>
                <input onChange={(e) => this.handleForm(e)}  onBlur={(e) => this.handleBlur(e)} name="contactName" type="text" id="contactName" placeholder="Name" value={contactName.value} minLength="2" required="" aria-required="true" className="full-width" />
                {contactName.touched && contactName.unvalidated ? <p>min 2 chars </p>: <p></p>}
            </div>
            <div className="form-field">
            <label for="contactEmail">Email</label>
                <input onChange={(e) => this.handleForm(e)}  onBlur={(e) => this.handleBlur(e)} name="contactEmail" type="email" id="contactEmail" placeholder="Email" value={contactEmail.value} required="" aria-required="true" className="full-width" />
                {contactEmail.touched && contactEmail.unvalidated ? <p>should be an email </p>: <p></p>}
            </div>
            <div className="form-field">
            <label for="contactSubject">Subject</label>
                <input onChange={(e) => this.handleForm(e)} onBlur={(e) => this.handleBlur(e)} name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value={contactSubject.value} className="full-width" />
                {contactSubject.touched && contactSubject.unvalidated ? <p>min 1 char </p>: <p></p>}
            </div>
            <div className="form-field">
            <label for="contactMessage">Message</label>
                <textarea onChange={(e) => this.handleForm(e)} onBlur={(e) => this.handleBlur(e)} name="contactMessage" id="contactMessage" value={contactMessage.value} placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                {contactMessage.touched && contactMessage.unvalidated ? <p>min 1 char</p>: <p></p>}
            </div>
            <div className="form-field">
                <button className="full-width btn--primary submit-button" disabled={send} onClick={(e) => this.handleSubmit(e)}>Submit</button>
                {sending &&<div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
                }
                {sent &&   <div className="message-success">
            Your message was sent, thank you!<br />
        </div>}
        {failed &&  <div className="message-warning">
            Something went wrong. Please try again.
        </div> }
            </div>

            </fieldset>
        </form>

        <div className="message-warning">
            Something went wrong. Please try again.
        </div> 

       
                
    </div>
    <div className="col-four tab-full contact__infos">
        <h4 className="h06">Phone</h4>
        <p>Phone: (+91) 8074962895<br />
        Mobile: (+91) 8008307511<br />
        </p>

        <h4 className="h06">Email</h4>
        <p>rakesh.tagadghar@dltapps.co.uk<br />
        rakeshtagadghar@gmail.com
        </p>

        <h4 className="h06">Address</h4>
        <p>
        Annapurna Studio Living<br />
        Wilson gardens, Bengaluru, KA<br />
        500027  India
        </p>
    </div>

</div>

</section> 
)}
    }

export default Contact;