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
BookAuthorThrough,
Author,
} from '../models';
import {BookRepository} from '../repositories';

export class BookAuthorController {
  constructor(
    @repository(BookRepository) protected bookRepository: BookRepository,
  ) { }

  @get('/books/{id}/authors', {
    responses: {
      '200': {
        description: 'Array of Book has many Author through BookAuthorThrough',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Author)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Author>,
  ): Promise<Author[]> {
    return this.bookRepository.authors(id).find(filter);
  }

  @post('/books/{id}/authors', {
    responses: {
      '200': {
        description: 'create a Author model instance',
        content: {'application/json': {schema: getModelSchemaRef(Author)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Book.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Author, {
            title: 'NewAuthorInBook',
            exclude: ['id'],
          }),
        },
      },
    }) author: Omit<Author, 'id'>,
  ): Promise<Author> {
    return this.bookRepository.authors(id).create(author);
  }

  @patch('/books/{id}/authors', {
    responses: {
      '200': {
        description: 'Book.Author PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Author, {partial: true}),
        },
      },
    })
    author: Partial<Author>,
    @param.query.object('where', getWhereSchemaFor(Author)) where?: Where<Author>,
  ): Promise<Count> {
    return this.bookRepository.authors(id).patch(author, where);
  }

  @del('/books/{id}/authors', {
    responses: {
      '200': {
        description: 'Book.Author DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Author)) where?: Where<Author>,
  ): Promise<Count> {
    return this.bookRepository.authors(id).delete(where);
  }
}
