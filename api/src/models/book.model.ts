import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Genre} from './genre.model';
import {Loan} from './loan.model';
import {Author} from './author.model';
import {BookAuthorThrough} from './book-author-through.model';

@model()
export class Book extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  publicationYear?: string;

  @property({
    type: 'number',
    required: true,
  })
  pageCount: number;

  @property({
    type: 'boolean',
    required: true,
  })
  available: boolean;

  @belongsTo(() => Genre)
  genreId: number;

  @hasMany(() => Loan)
  loans: Loan[];

  @hasMany(() => Author, {through: {model: () => BookAuthorThrough}})
  authors: Author[];

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
