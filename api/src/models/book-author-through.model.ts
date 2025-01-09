import {Entity, model, property} from '@loopback/repository';

@model()
export class BookAuthorThrough extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  bookId?: number;

  @property({
    type: 'number',
  })
  authorId?: number;

  constructor(data?: Partial<BookAuthorThrough>) {
    super(data);
  }
}

export interface BookAuthorThroughRelations {
  // describe navigational properties here
}

export type BookAuthorThroughWithRelations = BookAuthorThrough & BookAuthorThroughRelations;
