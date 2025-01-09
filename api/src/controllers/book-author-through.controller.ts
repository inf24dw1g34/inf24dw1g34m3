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
import {BookAuthorThrough} from '../models';
import {BookAuthorThroughRepository} from '../repositories';

export class BookAuthorThroughController {
  constructor(
    @repository(BookAuthorThroughRepository)
    public bookAuthorThroughRepository : BookAuthorThroughRepository,
  ) {}

  @post('/book-author-throughs')
  @response(200, {
    description: 'BookAuthorThrough model instance',
    content: {'application/json': {schema: getModelSchemaRef(BookAuthorThrough)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookAuthorThrough, {
            title: 'NewBookAuthorThrough',
            exclude: ['id'],
          }),
        },
      },
    })
    bookAuthorThrough: Omit<BookAuthorThrough, 'id'>,
  ): Promise<BookAuthorThrough> {
    return this.bookAuthorThroughRepository.create(bookAuthorThrough);
  }

  @get('/book-author-throughs/count')
  @response(200, {
    description: 'BookAuthorThrough model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BookAuthorThrough) where?: Where<BookAuthorThrough>,
  ): Promise<Count> {
    return this.bookAuthorThroughRepository.count(where);
  }

  @get('/book-author-throughs')
  @response(200, {
    description: 'Array of BookAuthorThrough model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BookAuthorThrough, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BookAuthorThrough) filter?: Filter<BookAuthorThrough>,
  ): Promise<BookAuthorThrough[]> {
    return this.bookAuthorThroughRepository.find(filter);
  }

  @patch('/book-author-throughs')
  @response(200, {
    description: 'BookAuthorThrough PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookAuthorThrough, {partial: true}),
        },
      },
    })
    bookAuthorThrough: BookAuthorThrough,
    @param.where(BookAuthorThrough) where?: Where<BookAuthorThrough>,
  ): Promise<Count> {
    return this.bookAuthorThroughRepository.updateAll(bookAuthorThrough, where);
  }

  @get('/book-author-throughs/{id}')
  @response(200, {
    description: 'BookAuthorThrough model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BookAuthorThrough, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BookAuthorThrough, {exclude: 'where'}) filter?: FilterExcludingWhere<BookAuthorThrough>
  ): Promise<BookAuthorThrough> {
    return this.bookAuthorThroughRepository.findById(id, filter);
  }

  @patch('/book-author-throughs/{id}')
  @response(204, {
    description: 'BookAuthorThrough PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookAuthorThrough, {partial: true}),
        },
      },
    })
    bookAuthorThrough: BookAuthorThrough,
  ): Promise<void> {
    await this.bookAuthorThroughRepository.updateById(id, bookAuthorThrough);
  }

  @put('/book-author-throughs/{id}')
  @response(204, {
    description: 'BookAuthorThrough PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bookAuthorThrough: BookAuthorThrough,
  ): Promise<void> {
    await this.bookAuthorThroughRepository.replaceById(id, bookAuthorThrough);
  }

  @del('/book-author-throughs/{id}')
  @response(204, {
    description: 'BookAuthorThrough DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bookAuthorThroughRepository.deleteById(id);
  }
}
