import React, { Component } from "react";
import ContactPreview from "./ContactPreview";


export default class ContactList extends Component {



    render(){
        return(
            <div>
                
               {this.props.contacts.map(contact=><ContactPreview key={contact._id} contact={contact}></ContactPreview>)}

            </div>
            
        ) 
            
        
    }
}