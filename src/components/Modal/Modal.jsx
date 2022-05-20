import React from "react";
import userNotes from "../../data/notes";
import styles from "./Modal.module.scss";
import { useState } from "react";

const Modal = (props) => {
	const { setModal } = props;

	const [name, setName] = useState("");
	const [note, setNote] = useState("");
	const [noteError, setNoteError] = useState(false);

	// const [content, setContent] = useState(0);

	// const shortenInstructions = (content) =>
	// 	content.length < 50
	// 		? content
	// 		: content.substring(0, 40) + "You have reached the maximum word limit ! ";

	const createNewNote = (e) => {
		e.preventDefault();
		if (!name || !note) {
		} else if ((!name && !note) || note.length > 500) {
			console.log("if statement ran");
			setNoteError(true);
		} else {
			const formData = {
				id: userNotes.length++,
				name: name,
				note: note,
				createdAt: new Date(),
			};
			userNotes.push(formData);
			console.log("form submitted");
		}
	};

	return (
		<form className={styles.modal} onSubmit={createNewNote}>
			<h1>Create Note</h1>
			<label htmlFor=""> Name </label>
			<input
				type="text"
				data-testid="nameBar"
				placeholder="Enter name..."
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor=""> Note </label>
			<textarea
				type="text"
				placeholder="notes..."
				onChange={(e) => setNote(e.target.value)}
				// maxLength={500}
			/>
			{noteError && (
				<small>You have reached the maximum character count.</small>
			)}
			<button onClick={(e) => setModal(false)}>Close Modal</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Modal;
