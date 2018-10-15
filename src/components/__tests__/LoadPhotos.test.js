import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import LoadPhotos from "../LoadPhotos";

afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

describe("<LoadPhotos /> component", () => {
    test("initial state", () => {
        const { getByTestId } = render(<LoadPhotos />);

        const loadButton = getByTestId("load-photos");

        expect(loadButton.disabled).toBe(false);

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("click handler", () => {
        const handleLoad = jest.fn();

        const { getByTestId } = render(<LoadPhotos handleLoad={handleLoad} />);

        const loadButton = getByTestId("load-photos");

        fireEvent.click(loadButton);

        expect(handleLoad).toHaveBeenCalledTimes(1);

        fireEvent.click(loadButton);

        expect(handleLoad).toHaveBeenCalledTimes(2);

        expect(console.error).toHaveBeenCalledTimes(0);
    });

    test("with loading true flag", () => {
        const { getByTestId } = render(<LoadPhotos loading={true} />);

        expect(getByTestId("load-photos").disabled).toBeTruthy();
    });

    test("with loading false flag", () => {
        const { getByTestId } = render(<LoadPhotos loading={false} />);

        expect(getByTestId("load-photos").disabled).toBeFalsy();
    });
});
