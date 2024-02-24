import type { CreatePostInteractor } from '../../../application/interactors/create-post.interactor';
import type { Post } from '../../../entities/post';
import { DataError } from '../../../shared/errors';
import type HTTPRequest from '../http-request';
import type HTTPResponse from '../http-response';
import { Controller } from './controller';

interface HTTPCreatePostBody {
  user_id: number;
  title: string;
  content: string;
}

type HTTPCreatePostInput = HTTPRequest<void, void, HTTPCreatePostBody, void>;

export class HTTPCreatePostController extends Controller {
  private interactor: CreatePostInteractor;

  constructor(interactor: CreatePostInteractor) {
    super();
    this.interactor = interactor;
  }

  async run(input: HTTPCreatePostInput): Promise<HTTPResponse> {
    try {
      const post: Post = this.validate(input);

      await this.interactor.execute(post);

      return { statusCode: 201 };
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  private validate(input: HTTPCreatePostInput): Post {
    // talvez isso aqui seria um mapper

    const { user_id, title, content } = input.body || {};

    if (typeof user_id !== 'number' || typeof title !== 'string' || typeof content !== 'string') {
      throw new DataError('invalid input. Please provide valid user_id, title, and content.');
    }

    return {
      userId: user_id,
      title: title,
      content: content
    };
  }
}
