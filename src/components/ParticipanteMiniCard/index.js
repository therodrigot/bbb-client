import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Header, Icon, Image, Label } from "semantic-ui-react";

const ParticipanteMiniCard = (props) => {
	return (
		<Label as={Link} to="/participante/caio">
			<Image avatar spaced="right" src="http://bbb21/wp-content/uploads/2021/05/Pasted-19-250x250.jpg" />
			Camilla de Lucas
		</Label>
		// <Card>
		// 	<Card.Content>
		// 		<Grid>
		// 			<Grid.Column floated="left" width={10}>
		// 				<Header>
		// 					<Image src="http://bbb21/wp-content/uploads/2021/05/Pasted-19-250x250.jpg" circular />
		// 					<Header.Content>Username</Header.Content>
		// 				</Header>
		// 			</Grid.Column>
		// 			<Grid.Column floated="right" width={4}  verticalAlign='middle'>
		// 				<Button icon size="tiny">
		// 					<Icon name="chevron right" />
		// 				</Button>
		// 			</Grid.Column>
		// 		</Grid>
		// 	</Card.Content>
		// </Card>
	);
};

export default ParticipanteMiniCard;
