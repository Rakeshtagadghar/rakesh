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
                }
        }
    }

    handleForm = (e) => {
        let fieldname  = e.target.name;
        let  state = {...this.state}
        let prevfield  =state[fieldname]
        if(fieldname === 'contactEmail'){
            const email = this.validateEmail(e.target.value)
            return this.setState({[fieldname]: {...prevfield, value: e.target.value,unvalidated:!email}})
        }
        if(e.target.value.length >2 && fieldname !== 'contactEmail'){
           return  this.setState({[fieldname]: {...prevfield, value: e.target.value,unvalidated:false}})
        }
        this.setState({[fieldname]: {...prevfield, value: e.target.value}})

        const checkvalidation = Object.keys(this.state);
        let count = 0;

        checkvalidation.map(each => {
            if(this.state[each].unvalidated === false){
               return  count = count+ 1;
            }
        })

        if(count >= 4 ){
            $('.submit-button').removeAttr('disabled')
        }
        
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
        let count = 0;

        checkvalidation.map(each => {
            if(this.state[each].unvalidated === false){
               return  count = count+ 1;
            }
        })

        if(count >= 4 ){
        const {contactName, contactEmail, contactSubject, contactMessage } = this.state;
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: contactName, email: contactEmail, subject:contactSubject, message: contactMessage })
          });
        }
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
            <h1>{console.log(this.state)}</h1>
            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)}  onBlur={(e) => this.handleBlur(e)} name="contactName" type="text" id="contactName" placeholder="Name" value={contactName.value} minLength="2" required="" aria-required="true" className="full-width" />
                {contactName.touched && contactName.unvalidated ? <p>min 2 chars </p>: <p></p>}
            </div>
            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)}  onBlur={(e) => this.handleBlur(e)} name="contactEmail" type="email" id="contactEmail" placeholder="Email" value={contactEmail.value} required="" aria-required="true" className="full-width" />
                {contactEmail.touched && contactEmail.unvalidated ? <p>should be an email </p>: <p></p>}
            </div>
            <div className="form-field">
                <input onChange={(e) => this.handleForm(e)} onBlur={(e) => this.handleBlur(e)} name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value={contactSubject.value} className="full-width" />
                {contactSubject.touched && contactSubject.unvalidated ? <p>min 1 char </p>: <p></p>}
            </div>
            <div className="form-field">
                <textarea onChange={(e) => this.handleForm(e)} onBlur={(e) => this.handleBlur(e)} name="contactMessage" id="contactMessage" value={contactMessage.value} placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                {contactMessage.touched && contactMessage.unvalidated ? <p>min 1 char</p>: <p></p>}
            </div>
            <div className="form-field">
                <button className="full-width btn--primary submit-button" disabled onClick={(e) => this.handleSubmit(e)}>Submit</button>
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