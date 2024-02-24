import type { CreatePostInput } from '../../../../application/interactors/create-post.interactor';
import { DataError } from '../../../../shared/errors';
import type { HTTPCreatePostInput } from '../create-post.controller';

export class CreatePostHttpMapper {
  public RequestToInput(httpInput: HTTPCreatePostInput): CreatePostInput {
    if (!httpInput.body) {
      throw new DataError('invalid input. body not provided.');
    }

    const { user_id, title, content } = httpInput.body || {};

    if (typeof user_id !== 'number' || typeof title !== 'string' || typeof content !== 'string') {
      throw new DataError('invalid input. Please provide valid name, email, and password.');
    }

    return {
      userId: Number(httpInput.body.user_id),
      title: httpInput.body.title,
      content: httpInput.body.content,
    };
  }
}
