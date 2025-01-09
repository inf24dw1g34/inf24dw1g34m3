import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Loan, LoanRelations, Book, Member} from '../models';
import {BookRepository} from './book.repository';
import {MemberRepository} from './member.repository';

export class LoanRepository extends DefaultCrudRepository<
  Loan,
  typeof Loan.prototype.id,
  LoanRelations
> {

  public readonly book: BelongsToAccessor<Book, typeof Loan.prototype.id>;

  public readonly member: BelongsToAccessor<Member, typeof Loan.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('BookRepository') protected bookRepositoryGetter: Getter<BookRepository>, @repository.getter('MemberRepository') protected memberRepositoryGetter: Getter<MemberRepository>,
  ) {
    super(Loan, dataSource);
    this.member = this.createBelongsToAccessorFor('member', memberRepositoryGetter,);
    this.registerInclusionResolver('member', this.member.inclusionResolver);
    this.book = this.createBelongsToAccessorFor('book', bookRepositoryGetter,);
    this.registerInclusionResolver('book', this.book.inclusionResolver);
  }
}
