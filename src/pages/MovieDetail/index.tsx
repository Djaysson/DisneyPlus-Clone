import PlayIcon from "../../assets/images/play-icon-black.png";
import TrailerIcon from "../../assets/images/play-icon-white.png";
import GroupIcon from "../../assets/images/group-icon.png";
import {
  Container,
  Background,
  ImageTitle,
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupWatchButton,
  SubTitle,
  Description,
} from "./styles";

export function MovieDetail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/609A58A6359518D424B5B55807799E06A07283DD843ABBA599376F82A9C8DAA2/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="Movie image"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFD58184BDC18C4216845F3627CBBCD09E468BC4FC980E0EA7C858F460D524B4/scale?width=1440&aspectRatio=1.78&format=png"
          alt="Movie image"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src={PlayIcon} alt="Play icon" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src={TrailerIcon} alt="Trailer icon" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src={GroupIcon} alt="Group icon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2021 • Season 1 • Science Fiction, Action, Adventure</SubTitle>

      <Description>
        No longer just a hired gun, Boba Fett reinvents himself on Tatooine
        alongside Fennec Shand.
      </Description>
    </Container>
  );
}
