import React from "react";
import s from "./footer.module.sass";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className={s.footer}>
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<h1>Footer</h1>
					</div>
					<div className="col-sm-6">
						<ul>
							<li>
								<Link to="/">Main</Link>
							</li>
							<li>
								<Link to="/about/">About</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
