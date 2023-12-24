// rsc
import React from "react";
import users from "../db/users.json";

const HelloBootstrap = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<table className="table table-bordered border-primary table-dark table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Barbara</td>
						<td>Kendrick</td>
						<td>@muse</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Vincent Jr</td>
						<td>Kendrick</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colSpan="2">Vaughn the Champion</td>
						<td>@King</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>
							{users.map((user) => (
								<li key={user.id}>{user.name}</li>
							))}
						</td>
						<td>Kendrick</td>
						<td>@code</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default HelloBootstrap;
