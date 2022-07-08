import { Container, Card } from "./styles";
import DisneyImg from "../../assets/images/viewers-disney.png";
import PixarImg from "../../assets/images/viewers-pixar.png";
import MarvelImg from "../../assets/images/viewers-marvel.png";
import StarwarsImg from "../../assets/images/viewers-starwars.png";
import NationalImg from "../../assets/images/viewers-national.png";

export function ViewersCard() {
  return (
    <Container>
      <Card>
        <img src={DisneyImg} alt="Disney logo image" />
      </Card>
      <Card>
        <img src={PixarImg} alt="Pixar logo image" />
      </Card>
      <Card>
        <img src={MarvelImg} alt="Marvel logo image" />
      </Card>
      <Card>
        <img src={StarwarsImg} alt="Star Wars logo image" />
      </Card>
      <Card>
        <img src={NationalImg} alt="National Geographic logo image" />
      </Card>
    </Container>
  );
}
