import React from "react";

const CardFront = (props) => {
	const { user, id, createdAt, note } = props.userNote;
	return (
		<section>
			<h3>
				<span>Name</span>: {user}
			</h3>
			<h3>
				<span>Id</span>: {id}
			</h3>
			<h3>
				<span>Date</span>: {createdAt}
			</h3>
			<h3>
				<span>Note</span>: {note}
			</h3>
		</section>
	);
};

export default CardFront;
