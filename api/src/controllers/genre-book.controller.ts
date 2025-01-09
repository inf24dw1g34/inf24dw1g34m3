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
  Genre,
  Book,
} from '../models';
import {GenreRepository} from '../repositories';

export class GenreBookController {
  constructor(
    @repository(GenreRepository) protected genreRepository: GenreRepository,
  ) { }

  @get('/genres/{id}/books', {
    responses: {
      '200': {
        description: 'Array of Genre has many Book',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Book)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Book>,
  ): Promise<Book[]> {
    return this.genreRepository.books(id).find(filter);
  }

  @post('/genres/{id}/books', {
    responses: {
      '200': {
        description: 'Genre model instance',
        content: {'application/json': {schema: getModelSchemaRef(Book)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Genre.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {
            title: 'NewBookInGenre',
            exclude: ['id'],
            optional: ['genreId']
          }),
        },
      },
    }) book: Omit<Book, 'id'>,
  ): Promise<Book> {
    return this.genreRepository.books(id).create(book);
  }

  @patch('/genres/{id}/books', {
    responses: {
      '200': {
        description: 'Genre.Book PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {partial: true}),
        },
      },
    })
    book: Partial<Book>,
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where<Book>,
  ): Promise<Count> {
    return this.genreRepository.books(id).patch(book, where);
  }

  @del('/genres/{id}/books', {
    responses: {
      '200': {
        description: 'Genre.Book DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where<Book>,
  ): Promise<Count> {
    return this.genreRepository.books(id).delete(where);
  }
}
