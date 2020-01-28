import React, { Component } from "react";
import ContactService from "../services/ContactService"
import { Link } from "react-router-dom";


export default class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.loadContact(id)
    }

    loadContact = async (id) => {
        try {
            const contact = await ContactService.getContactById(id)
            this.setState({ contact })
        }
        catch (err) {
            throw err
        }

    }

    handleDelte = async () => {
        const id = this.state.contact._id
        await ContactService.deleteContact(id)
        this.setState({contact:null})
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        return (

            (contact) && <div className="contact-details">
                <h2>{contact.name}</h2>
                <h3>{contact.phone}</h3>
                <h3>{contact.email}</h3>
                <Link to="/contact">
                    <button onClick={this.handleDelte}>Delete</button>
                </Link>
                <Link to="/">
                    <button>Back To HomePage</button>
                </Link>
            </div>


        )

    }
}