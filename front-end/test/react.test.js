import * as React from 'react';
import { render, fireEvent } from "@testing-library/react"

import UpperThird from "../src/components/UpperThird";

test("Renders the correct content", () => {
    const { getByText, getByLabelText } = render(<UpperThird />)

    getByText("Discover the difference a great massage can make");
    getByLabelText("Travel to me")
})
