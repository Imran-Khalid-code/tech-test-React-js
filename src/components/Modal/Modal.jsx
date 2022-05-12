import React from "react";
import userNotes from "../../data/notes";
import { useState } from "react";

const Modal = (props) => {
	const { setModal } = props;

	const shortenInstructions = (instructions) =>
		instructions.length < 5
			? instructions
			: instructions.substring(0, 4) + "...";

	const [name, setName] = useState("");
	const [note, setNote] = useState("");

	const createNewNote = (e) => {
		e.preventDefault();
		const formData = {
			id: userNotes.length++,
			name: name,
			note: note,
			createdAt: new Date(),
		};
		userNotes.push(formData);
		console.log(formData);
		console.log(userNotes);
	};

	return (
		<form className="modal" onSubmit={createNewNote}>
			<h1>This is a modal</h1>
			<label htmlFor="">Name</label>
			<input type="text" onChange={(e) => setName(e.target.value)} />
			<label htmlFor="">Name</label>
			<textarea
				type="text"
				onChange={(e) => setNote(e.target.value)}
			></textarea>
			<button onClick={(e) => setModal(false)}>Close Modal</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Modal;
