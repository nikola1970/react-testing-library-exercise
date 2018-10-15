import React, { Fragment } from "react";
import axios from "axios";

import { API_URL } from "./Home";

class Single extends React.Component {
    state = {
        photo: "",
        serverError: null
    };
    async componentDidMount() {
        try {
            const response = await axios.get(`${API_URL}/${this.props.match.params.id}`);
            this.setState(() => ({ photo: response.data.url }));
        } catch (e) {
            this.setState(() => ({ serverError: "Error loading the photo..." }));
        }
    }
    render() {
        const { photo, serverError } = this.state;
        const {
            match: {
                params: { id }
            }
        } = this.props;
        if (serverError) return <p data-testid="server-error-single">{serverError}</p>;
        if (!photo) return <p data-testid="loading-indicator-single">Loading...</p>;
        return (
            <Fragment>
                <h1 data-testid="Single Title">Id: {id}</h1>
                <img data-testid="Single Photo" src={photo} alt="default alt" />
            </Fragment>
        );
    }
}

export default Single;
