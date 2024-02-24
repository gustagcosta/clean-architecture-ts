import type { CreatePostInput } from '../interactors/create-post.interactor';

export interface PostRepository {
  getPostIdByTitle(title: string): Promise<number>;
  create(input: CreatePostInput): Promise<void>;
}
