import { ImgSlider } from "../../components/ImgSlider";
import { Movies } from "../../components/Movies";
import { ViewersCard } from "../../components/ViewersCard";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <ImgSlider />
      <ViewersCard />
      <Movies />
    </Container>
  );
}
