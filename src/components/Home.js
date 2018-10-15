import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LoadPhotos from "./LoadPhotos";

export const API_URL = "https://jsonplaceholder.typicode.com/photos";

const GlobalWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

const PhotosWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Photo = styled.div``;

class Home extends React.Component {
    state = {
        photos: [],
        isLoading: false
    };

    handleLoad = async () => {
        this.setState(() => ({ isLoading: true }));
        try {
            const result = await axios.get(API_URL);
            this.setState(() => ({ photos: result.data.slice(0, 10), isLoading: false }));
        } catch (e) {
            console.log(e);
            this.setState(() => ({ isLoading: false }));
        }
    };

    render() {
        const { photos, isLoading } = this.state;
        return (
            <GlobalWrapper>
                <LoadPhotos loading={isLoading} handleLoad={this.handleLoad} />
                <PhotosWrapper data-testid="photos-wrapper">
                    {photos.map(photo => (
                        <Link key={photo.id} to={`/${photo.id}`}>
                            <Photo>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </Photo>
                        </Link>
                    ))}
                </PhotosWrapper>
            </GlobalWrapper>
        );
    }
}

export default Home;
