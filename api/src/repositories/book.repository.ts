import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Book, BookRelations, Genre, Loan, Author, BookAuthorThrough} from '../models';
import {GenreRepository} from './genre.repository';
import {LoanRepository} from './loan.repository';
import {BookAuthorThroughRepository} from './book-author-through.repository';
import {AuthorRepository} from './author.repository';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id,
  BookRelations
> {

  public readonly genre: BelongsToAccessor<Genre, typeof Book.prototype.id>;

  public readonly loans: HasManyRepositoryFactory<Loan, typeof Book.prototype.id>;

  public readonly authors: HasManyThroughRepositoryFactory<Author, typeof Author.prototype.id,
          BookAuthorThrough,
          typeof Book.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('GenreRepository') protected genreRepositoryGetter: Getter<GenreRepository>, @repository.getter('LoanRepository') protected loanRepositoryGetter: Getter<LoanRepository>, @repository.getter('BookAuthorThroughRepository') protected bookAuthorThroughRepositoryGetter: Getter<BookAuthorThroughRepository>, @repository.getter('AuthorRepository') protected authorRepositoryGetter: Getter<AuthorRepository>,
  ) {
    super(Book, dataSource);
    this.authors = this.createHasManyThroughRepositoryFactoryFor('authors', authorRepositoryGetter, bookAuthorThroughRepositoryGetter,);
    this.registerInclusionResolver('authors', this.authors.inclusionResolver);
    this.loans = this.createHasManyRepositoryFactoryFor('loans', loanRepositoryGetter,);
    this.registerInclusionResolver('loans', this.loans.inclusionResolver);
    this.genre = this.createBelongsToAccessorFor('genre', genreRepositoryGetter,);
    this.registerInclusionResolver('genre', this.genre.inclusionResolver);
  }
}
