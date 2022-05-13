import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("<Modal />", () => {
	it("should render the basic fields", () => {
		//1.Arrange
		const { getByTestId } = render(<Modal />);
		const input = getByTestId("nameBar");
		expect(input).toBeTruthy();
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "text");
	});

	test("pass valid name to test name input field", () => {
		render(<Modal />);

		const input = screen.getByTestId("nameBar");
		userEvent.type(input, "Imran");

		expect(screen.getByTestId("nameBar")).toHaveValue("Imran");
		expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
	});
});
