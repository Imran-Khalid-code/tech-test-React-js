import React from "react";

const CardFront = ({ userNote }) => {
	const { createdAt, user, id, note } = userNote;
	return (
		<div>
			<section>
				<h3>
					<span>User</span>:{/* //console.log(user) */} {user}
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
		</div>
	);
};

export default CardFront;
