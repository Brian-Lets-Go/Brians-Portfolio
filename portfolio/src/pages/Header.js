import React from "react";
import Tabs from "./Tabs";

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header>
			<div>
				<h2>Brian's Portfolio</h2>
			</div>
			<div>
				<Tabs
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Tabs>
			</div>
		</header>
	);
}

export default Header;