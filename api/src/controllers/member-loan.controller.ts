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
  Member,
  Loan,
} from '../models';
import {MemberRepository} from '../repositories';

export class MemberLoanController {
  constructor(
    @repository(MemberRepository) protected memberRepository: MemberRepository,
  ) { }

  @get('/members/{id}/loans', {
    responses: {
      '200': {
        description: 'Array of Member has many Loan',
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
    return this.memberRepository.loans(id).find(filter);
  }

  @post('/members/{id}/loans', {
    responses: {
      '200': {
        description: 'Member model instance',
        content: {'application/json': {schema: getModelSchemaRef(Loan)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Member.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loan, {
            title: 'NewLoanInMember',
            exclude: ['id'],
            optional: ['memberId']
          }),
        },
      },
    }) loan: Omit<Loan, 'id'>,
  ): Promise<Loan> {
    return this.memberRepository.loans(id).create(loan);
  }

  @patch('/members/{id}/loans', {
    responses: {
      '200': {
        description: 'Member.Loan PATCH success count',
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
    return this.memberRepository.loans(id).patch(loan, where);
  }

  @del('/members/{id}/loans', {
    responses: {
      '200': {
        description: 'Member.Loan DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Loan)) where?: Where<Loan>,
  ): Promise<Count> {
    return this.memberRepository.loans(id).delete(where);
  }
}
