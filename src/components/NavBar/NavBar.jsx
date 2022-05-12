import React from "react";

const NavBar = (props) => {
	const { lastSixMonths, handleModal } = props;
	return (
		<nav>
			<div>
				<label>
					<h5>Recent Notes</h5>
					<input type="checkbox" onClick={lastSixMonths} />
				</label>
				<div>
					<label>
						<h5>Create Modal</h5>
						<input type="checkbox" onClick={handleModal} />
					</label>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
