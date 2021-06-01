import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import api from "../../api/api";

class ParticipantePage extends Component {
	constructor(props) {
		super(props);
		this.state = { participante: [] };
		this.slug = props.match.params.slug;
	}

	feedParticipanteData(slugParam) {
		if (slugParam) {
			this.slug = this.props.match.params.slug;
		}

		api.get("participante/?slug=" + this.slug).then((response) => {
			this.setState({ participante: response.data });
		});
	}

	componentDidMount() {
		this.feedParticipanteData();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.slug !== this.props.match.params.slug) {
			this.feedParticipanteData(this.props.match.params.slug);
		}
		// console.log("!", prevProps.match.params.slug, this.props.match.params.slug);
		// const response = await api.get("participante/?slug=" + this.slug);
		// this.setState({ participante: response.data });
	}
	render() {
		return (
			<Container>
				{this.state.participante.map((item, i) => {
					return (
						<div key={item.id}>
							<img src={item.image} alt="" />
							<h1>{item.title}</h1>
							<div>Paredões: {item.paredoes}</div>
							<div>{item.content}</div>
						</div>
					);
				})}
			</Container>
		);
	}
}

export default ParticipantePage;
