import React from "react";

const Modal = (props) => {
	const { note } = props;
	const modalHeader = document.createElement("h4");
	modalHeader.innerText = note.name;

	const modalID = document.createElement("h3");
	modalID.innerText = note.id;

	const modalCreated = document.createElement("createdAt");
	modalCreated.classList.add("createdAt");

	modalCreated = note.createdAt;

	//Modal Description
	const modalDescription = document.createElement("div");
	modalDescription.classList.add("modal-description");
	modalDescription.innerText = note.description;

	const shortenInstructions = (instructions) =>
		instructions.length < 600
			? instructions
			: instructions.substring(0, 500) + "...";

	return (
		div >
		(
			<section>
				<h3>
					<span>Name</span>: {note.name}
				</h3>
				<h3>
					<span>Id</span>: {note.id}
				</h3>
				<h3>
					<span>Date</span>: {note.createdAt}
				</h3>
				<h3>
					<span>Description</span>: {shortenInstructions(note.description)}
				</h3>
			</section>
		)
	);
};

export default Modal;
