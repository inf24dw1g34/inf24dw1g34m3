import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Loan} from '../models';
import {LoanRepository} from '../repositories';

export class LoanController {
  constructor(
    @repository(LoanRepository)
    public loanRepository : LoanRepository,
  ) {}

  @post('/loans')
  @response(200, {
    description: 'Loan model instance',
    content: {'application/json': {schema: getModelSchemaRef(Loan)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {
            title: 'NewLoan',
            exclude: ['id'],
          }),
        },
      },
    })
    loan: Omit<Loan, 'id'>,
  ): Promise<Loan> {
    return this.loanRepository.create(loan);
  }

  @get('/loans/count')
  @response(200, {
    description: 'Loan model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Loan) where?: Where<Loan>,
  ): Promise<Count> {
    return this.loanRepository.count(where);
  }

  @get('/loans')
  @response(200, {
    description: 'Array of Loan model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Loan, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Loan) filter?: Filter<Loan>,
  ): Promise<Loan[]> {
    return this.loanRepository.find(filter);
  }

  @patch('/loans')
  @response(200, {
    description: 'Loan PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {partial: true}),
        },
      },
    })
    loan: Loan,
    @param.where(Loan) where?: Where<Loan>,
  ): Promise<Count> {
    return this.loanRepository.updateAll(loan, where);
  }

  @get('/loans/{id}')
  @response(200, {
    description: 'Loan model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Loan, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Loan, {exclude: 'where'}) filter?: FilterExcludingWhere<Loan>
  ): Promise<Loan> {
    return this.loanRepository.findById(id, filter);
  }

  @patch('/loans/{id}')
  @response(204, {
    description: 'Loan PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {partial: true}),
        },
      },
    })
    loan: Loan,
  ): Promise<void> {
    await this.loanRepository.updateById(id, loan);
  }

  @put('/loans/{id}')
  @response(204, {
    description: 'Loan PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() loan: Loan,
  ): Promise<void> {
    await this.loanRepository.replaceById(id, loan);
  }

  @del('/loans/{id}')
  @response(204, {
    description: 'Loan DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.loanRepository.deleteById(id);
  }
}
