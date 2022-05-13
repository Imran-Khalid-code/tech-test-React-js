import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
	const { handleModal, handlerecent } = props;
	return (
		<nav className={styles.navFlex}>
			<div>
				<label>
					<h5>Notes</h5>
					<input type="checkbox" onClick={handlerecent} />
				</label>
			</div>

			<div>
				<label>
					<h5>Create Modal</h5>
					<input type="checkbox" onClick={handleModal} />
				</label>
			</div>
		</nav>
	);
};

export default NavBar;
