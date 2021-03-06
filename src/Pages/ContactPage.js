import React, { Component } from "react";
import ContactList from "../cmps/ContactList";
import ContactService from "../services/ContactService"




//   getContactById,
//   deleteContact,
//   saveContact,
//   getEmptyContact

export default class ContactPage extends Component {

    // contacts=ContactService.getContacts()
    state = {
        contacts: null
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
    }





    render() {
        const { contacts } = this.state
        return (
            (contacts) && <ContactList contacts={this.state.contacts}></ContactList>
        )
    }
}