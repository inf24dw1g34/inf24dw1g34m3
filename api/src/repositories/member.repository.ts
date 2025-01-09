import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Member, MemberRelations, Loan} from '../models';
import {LoanRepository} from './loan.repository';

export class MemberRepository extends DefaultCrudRepository<
  Member,
  typeof Member.prototype.id,
  MemberRelations
> {

  public readonly loans: HasManyRepositoryFactory<Loan, typeof Member.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('LoanRepository') protected loanRepositoryGetter: Getter<LoanRepository>,
  ) {
    super(Member, dataSource);
    this.loans = this.createHasManyRepositoryFactoryFor('loans', loanRepositoryGetter,);
    this.registerInclusionResolver('loans', this.loans.inclusionResolver);
  }
}
