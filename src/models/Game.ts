type GameDetails = {
  system: string
  developer: string
  publisher: string
  languages: string[]
}

type GameMedia = {
  thumbnail: string
  gallery: string[]
}

type GamePrices = {
  discount?: number
  old?: number
  current?: number
}

class Game {
  id: number
  name: string
  title: string
  description: string
  category: string
  image: string
  infos: string[]
  system: string
  prices: GamePrices
  media: GameMedia
  details: GameDetails

  constructor(
    id: number,
    name: string,
    title: string,
    description: string,
    category: string,
    image: string,
    infos: string[],
    system: string,
    prices: GamePrices,
    media: GameMedia,
    details: GameDetails
  ) {
    this.id = id
    this.name = name
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.infos = infos
    this.system = system
    this.prices = prices
    this.media = media
    this.details = details
  }
}

export default Game
