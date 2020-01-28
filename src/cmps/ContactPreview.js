import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ContactPreview extends Component {



    render() {
        return (<Link to={"/contact/"+this.props.contact._id}>
            <div className="contatc-preview">
                <h2>{this.props.contact.name}</h2>
            </div>
        </Link>

        )

    }
}