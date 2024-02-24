import type { CreatePostInput, CreatePostInteractor } from '../../../application/interactors/create-post.interactor';
import type { Post } from '../../../entities/post';
import { HttpStatus } from '../../../shared/constants';
import { DataError } from '../../../shared/errors';
import type { HTTPRequest } from '../http-request';
import type { HTTPResponse } from '../http-response';
import { Controller } from './controller';
import type { CreatePostHttpMapper } from './mappers/create-post.mapper';

interface HTTPCreatePostBody {
  user_id: number;
  title: string;
  content: string;
}

export type HTTPCreatePostInput = HTTPRequest<void, void, HTTPCreatePostBody, void>;

export class HTTPCreatePostController extends Controller {
  private interactor: CreatePostInteractor;
  private mapper: CreatePostHttpMapper;

  constructor(interactor: CreatePostInteractor, mapper: CreatePostHttpMapper) {
    super();
    this.interactor = interactor;
    this.mapper = mapper;
  }

  async run(input: HTTPCreatePostInput): Promise<HTTPResponse> {
    try {
      const interactorInput: CreatePostInput = this.mapper.RequestToInput(input);

      await this.interactor.execute(interactorInput);

      return { statusCode: HttpStatus.Created };
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }
}
