import { ImgSlider } from "../../components/ImgSlider";
import { ViewersCard } from "../../components/ViewersCard";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <ImgSlider />
      <ViewersCard />
    </Container>
  );
}
