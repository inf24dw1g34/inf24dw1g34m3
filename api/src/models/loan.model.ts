import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Book} from './book.model';
import {Member} from './member.model';

@model()
export class Loan extends Entity {
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
  loanDate: string;

  @property({
    type: 'string',
    required: true,
  })
  expectedReturnDate: string;

  @property({
    type: 'string',
  })
  returnDate?: string;

  @belongsTo(() => Book)
  bookId: number;

  @belongsTo(() => Member)
  memberId: number;

  constructor(data?: Partial<Loan>) {
    super(data);
  }
}

export interface LoanRelations {
  // describe navigational properties here
}

export type LoanWithRelations = Loan & LoanRelations;
