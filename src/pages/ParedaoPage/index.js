import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Header, Segment } from "semantic-ui-react";
import api from "../../api/api";
import ParticipanteCard from "../../components/ParticipanteCard/ParticipanteCard";

const ParedaoPage = (props) => {
	const [paredao, setParedao] = useState([]);
	const { slug } = useParams();
	// console.log("ParedaoPage", slug);

	useEffect(() => {
		api.get("paredao/?slug=" + slug).then((response) => {
			// console.log("ParedaoPage:useEffect", response.data[0]);
			setParedao(response.data[0]);
		});
	}, [slug]);

	return (
		<Container>
			<Header as="h1">
				{paredao.title}
				<Header.Subheader>{paredao.content}</Header.Subheader>
			</Header>
			{(() => {
				if (paredao.eliminado) {
					return (
						<Segment>
							<Header as="h2">Eliminado</Header>
							{paredao.eliminado.map((data) => {
								return <ParticipanteCard key={data.ID} data={data} />;
							})}
						</Segment>
					);
				}
			})()}
			<Segment>

			</Segment>
			<Card.Group>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
			</Card.Group>
			<Card.Group>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Matthew Harris</Card.Header>
						<Card.Meta>Co-Worker</Card.Meta>
						<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
			</Card.Group>
		</Container>
	);
};

export default ParedaoPage;
