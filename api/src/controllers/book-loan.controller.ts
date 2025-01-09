import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Book,
  Loan,
} from '../models';
import {BookRepository} from '../repositories';

export class BookLoanController {
  constructor(
    @repository(BookRepository) protected bookRepository: BookRepository,
  ) { }

  @get('/books/{id}/loans', {
    responses: {
      '200': {
        description: 'Array of Book has many Loan',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Loan)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Loan>,
  ): Promise<Loan[]> {
    return this.bookRepository.loans(id).find(filter);
  }

  @post('/books/{id}/loans', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: {'application/json': {schema: getModelSchemaRef(Loan)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Book.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {
            title: 'NewLoanInBook',
            exclude: ['id'],
            optional: ['bookId']
          }),
        },
      },
    }) loan: Omit<Loan, 'id'>,
  ): Promise<Loan> {
    return this.bookRepository.loans(id).create(loan);
  }

  @patch('/books/{id}/loans', {
    responses: {
      '200': {
        description: 'Book.Loan PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {partial: true}),
        },
      },
    })
    loan: Partial<Loan>,
    @param.query.object('where', getWhereSchemaFor(Loan)) where?: Where<Loan>,
  ): Promise<Count> {
    return this.bookRepository.loans(id).patch(loan, where);
  }

  @del('/books/{id}/loans', {
    responses: {
      '200': {
        description: 'Book.Loan DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Loan)) where?: Where<Loan>,
  ): Promise<Count> {
    return this.bookRepository.loans(id).delete(where);
  }
}
