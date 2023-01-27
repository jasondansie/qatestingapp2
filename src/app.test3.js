import { fireEvent, getQueriesForElement } from "@testing-library/react";
import React from "react";
import ReactDOM  from "react";

import App from "./App";

test("renders the correct content", () => {
    const { getByText, getByLabelText } = render(<App />);
})

test("allows user to add item to list", () => {
    //renders a React component to the DOM

    const root = document.createElement("div");

    ReactDOM.render(<App />, root);

    const { getByText, getByLabelText } = getQueriesForElement(root);

    const input = getByLabelText("What needs to be done?");
    const button = getByText("Add #1");

    fireEvent.change(input, {target })

})