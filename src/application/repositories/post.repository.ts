import type { Post } from '../../entities/post';

export interface PostRepository {
  getPostIdByTitle(title: string): Promise<number>;
  create(post: Post): Promise<void>;
}
