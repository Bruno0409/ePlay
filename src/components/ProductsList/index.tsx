import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (games: Game) => {
    const tags = []

    if (games.release_date) {
      tags.push(games.release_date)
    }

    if (games.prices.discount) {
      tags.push(`${games.prices.discount}%`)
    }

    if (games.prices.current) {
      tags.push(parseToBrl(games.prices.current))
    }

    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
