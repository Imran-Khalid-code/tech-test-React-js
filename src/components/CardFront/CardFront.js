import React from "react";

const CardFront = (props) => {
	const { userNote } = props;
	return (
		<section>
			<h3>
				<span>Name</span>: {userNote.user}
			</h3>
			<h3>
				<span>Id</span>: {userNote.id}
			</h3>
			<h3>
				<span>Date</span>: {userNote.createdAt}
			</h3>
			<h3>
				<span>Date</span>: {userNote.note}
			</h3>
		</section>
	);
};

export default CardFront;
