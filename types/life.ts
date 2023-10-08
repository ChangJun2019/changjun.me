export interface Book {
  'name': string
  'author': string
  'published': string
  'isbn': string
  'cover': string
  'readingTime': string
  'comment': string
}

export interface Game {
  id: number
  name: string
  releaseDate: Date
  playTime: string
  cover: string
  platform: 'Switch' | 'PS5'
  duration: string
  comment: string
}

export interface Video {
  id: number
  name: string
  cover: string
  link: string
}
