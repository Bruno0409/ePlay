import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container className="footer">
    <div className="container">
      <FooterSection>
        <SectionTitle>Categoria</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <div>
        <p>{currentYear} - © E-Play. Todos os direitos reservados.</p>
      </div>
    </div>
  </Container>
)

export default Footer
