import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descobre animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com a chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e, finalmente, decida o destino do mundo bruxo. Seu legado é o que
          você faz dele. Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PS5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> Áudio em inglês, francês, italiano, alemão, espanhol e
          japonês. Textos em português do Brasil. As opções de audio e legenda
          podem ser alteradas nas configuracoes do jogo.
        </p>
      </Section>
      <Gallery defaultCover={residentEvil} />
    </>
  )
}

export default Product
