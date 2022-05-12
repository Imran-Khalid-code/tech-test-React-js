import React from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import CardFront from "./components/CardFront";
import Modal from "./components/Modal";

import userNotes from "./data/notes";

const App = () => {
	const [recent, setRecent] = useState(true);
	const [modal, setModal] = useState(false);

	const handlerecent = (e) => {
		setRecent(!recent);
	};

	const handleModal = (e) => {
		setModal(!modal);
	};

	const sixMonthsAgo = new Date();
	// console.log(sixMonthsAgo);
	sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
	// console.log(sixMonthsAgo);

	const filteredNotes = userNotes.filter((note) => {
		return new Date(note.createdAt) > sixMonthsAgo;
	});

	console.log(filteredNotes);

	const renderNotesLastSixMonths = filteredNotes.map((userNote) => {
		//console.log(filteredNotes);
		return <CardFront key={userNote.id} userNote={userNote} />;
	});

	const renderAllNotes = userNotes.map((userNote) => {
		return <CardFront key={userNote.id} userNote={userNote} />;
	});

	return (
		<>
			<section>
				<NavBar handleModal={handleModal} />
			</section>
			<button onClick={handlerecent}>hit me</button>
			<section>{recent ? renderNotesLastSixMonths : renderAllNotes}</section>

			{modal && (
				<div className="overlay">
					<Modal setModal={setModal} userNotes={userNotes} />
				</div>
			)}
		</>
	);
};

export default App;
