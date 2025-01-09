import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {BookAuthorThrough, BookAuthorThroughRelations} from '../models';

export class BookAuthorThroughRepository extends DefaultCrudRepository<
  BookAuthorThrough,
  typeof BookAuthorThrough.prototype.id,
  BookAuthorThroughRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BookAuthorThrough, dataSource);
  }
}
