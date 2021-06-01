import React from "react";
import { Card, Image } from "semantic-ui-react";

const ParticipanteCard = (props) => {
	console.log("ParticipanteCard:props", props);
	return (
		<Card>
			<Image src={props.data.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{props.data.title}</Card.Header>
				<Card.Meta>
					<div>{props.data.eliminado ? "isEliminado" : ""}</div>
					<div>{props.data.lider ? "isLider" : ""}</div>
					<div>{props.data.monstro ? "isMonstro" : ""}</div>
					<div>{props.data.anjo ? "isAnjo" : ""}</div>
					<div>{props.data.emparedado ? "isEmparedado" : ""}</div>
					<div>{props.data.imune ? "isImune" : ""}</div>
				</Card.Meta>
				<Card.Description>{props.data.content}</Card.Description>
			</Card.Content>
		</Card>
		// <Card className={(props.data.isEliminado ? "eliminado" : "")+" participantecard round"} onClick={props.data.onClick}>
		// 	<figure>
		// 		<img src={props.data.image} alt={props.data.name} />
		// 	</figure>
		// 	<div className="content">
		// 		<h2>{props.data.name}</h2>
		// 		<div className="flags">
		// 			<div>{props.data.isEliminado ? "isEliminado" : ""}</div>
		// 			<div>{props.data.isLider ? "isLider" : ""}</div>
		// 			<div>{props.data.isMonstro ? "isMonstro" : ""}</div>
		// 		</div>
		// 	</div>
		// </Card>
	);
};

export default ParticipanteCard;
