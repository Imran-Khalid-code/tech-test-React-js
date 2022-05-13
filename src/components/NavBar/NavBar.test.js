import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

it("should render the NavBar", () => {
	//1.Arrange
	render(<NavBar />);

	//2.Act
	// const sixMonths = screen.getByRole("checkbox", { checked: false });
	// const createModal = screen.getByRole("checkbox", { checked: false });

	// //3.Assert
	// expect(sixMonths).toBeInTheDocument();
	// expect(createModal).toBeInTheDocument();
});
