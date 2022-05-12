import React from "react";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import CardFront from "./components/CardFront";
// import Card from "./components/Card";
import userNotes from "./data/notes";

const App = () => {
	const [recent, setRecent] = useState(false);
	// const [modal, showModal] = useState(false);

	const lastSixMonths = (e) => {
		setRecent(!recent);
	};

	// const handleLastSixMonths = userNotes.filter((userNote) => {
	// 	const todayDate = new Date();
	// 	const newDate = todayDate.setMonth(todayDate.getMonth() - 6);
	// 	if (userNote <= newDate) {
	// 		return userNote;
	// 	} else {
	// 		return "";
	// 	}
	// });

	// const renderNotesLastSixMonths = handleLastSixMonths.map((userNote) => {
	// 	return <CardFront key={userNote.id} userNote={userNote} />;
	// });

	// const renderAllNotes = userNotes.map((userNote) => {
	// 	return <CardFront key={userNote.id} note={userNote} />;
	// });

	// 	const renderNotesLastSixMonths = handleLastSixMonths.map((note) => {
	// 		//console.log(beer);
	// 		return <Card key={note.id} note={note} />;
	// 	});

	// 	const renderAllNotes = notes.map((note) => {
	// 		return <Card key={note.id} note={note} />;
	// 	});

	// 	//creating a Modal:

	// 	const createModal = document.createElement("div");
	// 	createModal.classList.add("modal");

	// 	const modalContainer = document.createElement("div");
	// 	modalContainer.classList.add("modal-container");

	// 	const handleModal = (e) => {
	// 		showModal(!modal);
	// 	};

	// 	return (
	// 		<>
	// 			<section>
	// 				<NavBar lastSixMonths={lastSixMonths} handleModal={handleModal} />
	// 			</section>
	// 			<section className="App">
	// 				{recent ? renderNotesLastSixMonths : renderAllNotes}
	// 			</section>
	// 		</>
	// 	);
	// };
	console.log(userNotes);
	const getCardFront = (userNote) => (
		<CardFront key={userNote.id} userNote={userNote} />
	);
	return (
		<>
			<section>{/* <Dashboard notes={notes} /> */}</section>
			<section>{userNotes.map(getCardFront)}</section>
			<section>
				<NavBar />
			</section>
			{/* <section>
				<NavBar lastSixMonths={lastSixMonths} />
			</section>
			<section className="App">
				{recent ? renderNotesLastSixMonths : renderAllNotes}
			</section> */}
		</>
	);
};

export default App;
