import Logo01 from "../../assets/images/cta-logo-one.svg";
import Logo02 from "../../assets/images/cta-logo-two.png";
import {
  Container,
  Content,
  LogoOne,
  LogoTwo,
  SignUp,
  Description,
} from "./styles";

export function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src={Logo01} alt="Logo one" />
        <SignUp>GET ALL THERE </SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 07/14/22, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo src={Logo02} alt="Logo two" />
      </Content>
    </Container>
  );
}
