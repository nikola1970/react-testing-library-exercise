import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import axios from "axios";

import Single from "../Single";

afterEach(() => {
    cleanup();
});

const match = {
    params: {
        id: "4"
    }
};
const mockData = {
    data: {
        url: "test-url"
    }
};

jest.mock("axios");

describe("<Single /> component", () => {
    test("initial", async () => {
        axios.get.mockImplementation(() => Promise.resolve(mockData));

        const { getByTestId, queryByTestId } = render(<Single match={match} />);

        expect(getByTestId("loading-indicator-single").textContent).toBe("Loading...");

        await waitForElement(() => getByTestId("Single Title"));
        await waitForElement(() => getByTestId("Single Photo"));

        expect(getByTestId("Single Title").textContent).toBe(`Id: ${match.params.id}`);
        expect(getByTestId("Single Photo").getAttribute("src")).toBe(mockData.data.url);

        expect(queryByTestId("loading-indicator-single")).toBeFalsy();
    });
});
