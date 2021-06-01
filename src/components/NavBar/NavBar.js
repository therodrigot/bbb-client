import { LinkContainer } from "react-router-bootstrap";
import { Component } from "react";
import api from "../../api/api";
import { Dropdown, Menu } from "semantic-ui-react";

class NavBar extends Component {
	state = { participantes: [] };

	async componentDidMount() {
		const response = await api.get("participante");
		this.setState({ participantes: response.data });
	}

	render() {
		return (
			<Menu stackable>
				<Menu.Item>BBB21</Menu.Item>
				<LinkContainer to="/" exact>
					<Menu.Item>Home</Menu.Item>
				</LinkContainer>
				<Dropdown item text="Participantes">
					<Dropdown.Menu>
						<LinkContainer key="0" className="dropdown-item" to="/participantes/">
							<Dropdown.Item>Ver Todos</Dropdown.Item>
						</LinkContainer>
						{this.state.participantes.map((item, i) => {
							return (
								<LinkContainer key={item.id} className="dropdown-item" to={"/participante/" + item.slug}>
									<Dropdown.Item>{item.title}</Dropdown.Item>
								</LinkContainer>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
				<LinkContainer to="/paredao/2" exact>
					<Menu.Item>Paredão 1</Menu.Item>
				</LinkContainer>
			</Menu>
		);
	}
}

export default NavBar;
