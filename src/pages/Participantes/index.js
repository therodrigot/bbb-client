import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import api from "../../api/api";

import ParticipantesList from "../../components/ParticipantesList/ParticipantesList";

class ParticipantesPage extends Component {
	constructor(props) {
		super(props);
		this.state = { participantes: [] };
	}

	async componentDidMount() {
		const response = await api.get("participante");
		this.setState({ participantes: response.data });
	}

	render() {
		return (
			<Container>
				<ParticipantesList className="container" participantes={this.state.participantes} />
			</Container>
		);
	}
}

export default ParticipantesPage;
