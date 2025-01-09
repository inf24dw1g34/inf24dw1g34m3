import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Loan,
  Book,
} from '../models';
import {LoanRepository} from '../repositories';

export class LoanBookController {
  constructor(
    @repository(LoanRepository)
    public loanRepository: LoanRepository,
  ) { }

  @get('/loans/{id}/book', {
    responses: {
      '200': {
        description: 'Book belonging to Loan',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Book),
          },
        },
      },
    },
  })
  async getBook(
    @param.path.number('id') id: typeof Loan.prototype.id,
  ): Promise<Book> {
    return this.loanRepository.book(id);
  }
}
