import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import ParticipanteCard from "../ParticipanteCard/ParticipanteCard";

const ParticipantesList = (props) => {
	// console.log("ParticipantesList",props);
	const history = useHistory();

	const routeChange = (slug) => {
		history.push("/participante/" + slug);
	};

	return (
		<Container>
			<Grid relaxed columns={4}>
				{props.participantes.map((participanteData) => {
					return (
						<Grid.Column key={participanteData.id} onClick={() => routeChange(participanteData.slug)}>
							<ParticipanteCard data={participanteData} />
						</Grid.Column>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ParticipantesList;
