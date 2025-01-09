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
  Member,
} from '../models';
import {LoanRepository} from '../repositories';

export class LoanMemberController {
  constructor(
    @repository(LoanRepository)
    public loanRepository: LoanRepository,
  ) { }

  @get('/loans/{id}/member', {
    responses: {
      '200': {
        description: 'Member belonging to Loan',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Member),
          },
        },
      },
    },
  })
  async getMember(
    @param.path.number('id') id: typeof Loan.prototype.id,
  ): Promise<Member> {
    return this.loanRepository.member(id);
  }
}
