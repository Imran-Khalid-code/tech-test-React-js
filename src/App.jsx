import React from "react";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import CardFront from "./components/CardFront";
import userNotes from "./data/notes";

const App = () => {
	const [recent, setRecent] = useState(false);
	// const [modal, showModal] = useState(false);

	const handlerecent = (e) => {
		setRecent(!recent);
	};

	const sixMonthsAgo = new Date();
	console.log(sixMonthsAgo);
	sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
	console.log(sixMonthsAgo);

	const filteredNotes = userNotes.filter(({ createdAt }) => {
		return new Date(createdAt) > sixMonthsAgo;
	});

	const renderNotesLastSixMonths = filteredNotes.map((note) => {
		console.log(filteredNotes);
		return <CardFront key={note.id} note={note} />;
	});

	const renderAllNotes = userNotes.map((userNote) => {
		return <CardFront key={userNote.id} userNote={userNote} />;
	});

	return (
		<>
			<button onClick={handlerecent}>hit me</button>
			<section>{recent ? renderNotesLastSixMonths : renderAllNotes}</section>
			<section>
				<NavBar />
			</section>
		</>
	);
};

export default App;
