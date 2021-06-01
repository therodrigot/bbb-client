import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Divider, Header, Icon, Image, Message, Segment } from "semantic-ui-react";
import ParticipanteMiniCard from "../../components/ParticipanteMiniCard";

const Home = () => {
	return (
		<Container>
			<Header as="h2">Como Está A Casa Agora?</Header>
			<Message>
				<Message.Header>Semana X</Message.Header>
				<p>We updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
			</Message>
			<Divider horizontal>
				<Header as="h3">Semana X</Header>
			</Divider>
			<Segment.Group padded>
				<Segment padded>
					<Header as="h3">Líder</Header>
					<Card.Group>
						<ParticipanteMiniCard />
					</Card.Group>
				</Segment>
				<Segment padded>
					<Header as="h3">Anjo</Header>
					<Card.Group>
						<ParticipanteMiniCard />
					</Card.Group>
				</Segment>
				<Segment padded>
					<Header as="h3">Monstro</Header>
					<Card.Group>
						<ParticipanteMiniCard />
						<ParticipanteMiniCard />
					</Card.Group>
				</Segment>
				<Segment padded>
					<Header as="h3">Imunizados</Header>
					<Card.Group>
						<ParticipanteMiniCard />
						<ParticipanteMiniCard />
						<ParticipanteMiniCard />
					</Card.Group>
				</Segment>
				<Segment padded>
					<Header as="h3">Paredão</Header>
					<Segment basic compact>
						<Card.Group>
							<ParticipanteMiniCard />
							<ParticipanteMiniCard />
							<ParticipanteMiniCard />
						</Card.Group>
					</Segment>
					<Segment basic compact>
						<Button as={Link} to="/paredao/2">
							Ver Paredão
						</Button>
					</Segment>
				</Segment>
				<Segment padded>
					<Header as="h3">Eliminado</Header>
					<Button as={Link} to="/paredao/2">
						Ver Paredão
					</Button>
				</Segment>
			</Segment.Group>
		</Container>
	);
};

export default Home;
