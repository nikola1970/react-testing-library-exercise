import React from "react";
import { render, cleanup, waitForElement, fireEvent } from "react-testing-library";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

import Home from "../Home";

afterEach(() => {
    cleanup();
});

const mockData = {
    data: [
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
            albumId: 1,
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
            albumId: 1,
            id: 4,
            title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            url: "https://via.placeholder.com/600/d32776",
            thumbnailUrl: "https://via.placeholder.com/150/d32776"
        }
    ]
};

jest.mock("axios");

describe("<Home /> component", () => {
    test("initial", async () => {
        axios.get.mockImplementation(() => Promise.resolve(mockData));

        const { getByTestId } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(getByTestId("photos-wrapper").childElementCount).toBe(0);

        fireEvent.click(getByTestId("load-photos"));

        await waitForElement(() => getByTestId("photos-wrapper"));

        expect(getByTestId("photos-wrapper").childElementCount).toBe(4);
    });
});
