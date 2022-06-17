import React from "react";
import users from "../db/users.json";

const AllUsers = () => {
	return (
		<ul className="user-group">
			{users.map((user) => (
				<li key={user.id}>
					{user.name} {user.userName} - {user.occupation}
				</li>
			))}
		</ul>
	);
};

export default AllUsers;
