import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container className="footer">
    <div className="container">
      <FooterSection>
        <SectionTitle>Categoria</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em Breve
            </Link>
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
