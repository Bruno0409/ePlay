import Section from '../Section'

import { Items, Item, Action } from './styles'

import spiderman from '../../assets/images/banner-homem-aranha..png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=aCyrP7JwmY64XC7j'
  }
]

type Props = {
  defaultCover: string
}

const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`media ${index + 1} de Nome do jogo`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="clique para maximizar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}

export default Gallery
