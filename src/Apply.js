
import './Apply.css';
import data from './data/apply.json';

import React from "react";

class Apply extends React.Component {
    submit() {
        console.log("Something")
    }
    render() {
        return (
            <form>
                {data.text
                    .filter(text => text.lang === this.props.lang)
                    .map((text) => (      
                        <div className="apply-app">      
                            <div className="apply-title">{text.title}</div>
                            <div className="apply-name">{text.name}: <input type="text" className="apply-name-input"></input></div>
                            <div className="apply-mail">{text.mail}: <input type="text"  className="apply-mail-input"></input></div>
                            <div className="apply-facebook">{text.facebook}: <input type="text"  className="apply-facebook-input"></input></div>
                            {
                                text.contact.map((contact) => (
                                    <div>
                                        <br/>
                                        <div>
                                            <div className="apply-contact-name">{contact.name}: <input type="text"  className="apply-contact-name-input"></input></div>
                                            <div className="apply-contact-title">{contact.title}: <input type="text"  className="apply-contact-title-input"></input></div>
                                        </div>
                                        <div>
                                            <div className="apply-contact-phone">{contact.phone}: <input type="text"  className="apply-contact-phone-input"></input></div>
                                            <div className="apply-contact-email">{contact.email}: <input type="text"  className="apply-contact-email-input"></input></div>
                                        </div>
                                    </div>
                                ))
                            }
                            <br/>
                            <div className="apply-rules">{text.rules}: </div>
                            <div className="apply-terms">
                            {
                                text.terms.map((term) => (                                
                                    <li>{term.rule}</li>                                   
                                    
                                ))
                            }
                            </div>
                            <button id="Apply-Submit" onClick={this.submit.bind(this)}>Submit</button>
                        </div>
                    ))
                }
                
            </form>
      )
  }
}

export default Apply;
