import React from "react";
import s from "./header.module.sass";
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className="container">
			<div className={s.header}>
				<div className="row">
					<div className="col-sm-6">
						<h1>Logo</h1>
					</div>
					<div className="col-sm-6">
						<ul>
							<li><Link to="/">Main</Link></li>
							<li><Link to="/about/">About</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
