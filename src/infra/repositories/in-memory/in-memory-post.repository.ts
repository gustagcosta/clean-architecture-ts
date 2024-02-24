import type { PostRepository } from '../../../application/repositories/post.repository';
import type { Post } from '../../../entities/post';
import { ConflictError } from '../../../shared/errors';

export class InMemoryPostRepository implements PostRepository {
  posts: Post[];

  constructor() {
    this.posts = [];
  }

  public async getPostIdByTitle(title: string): Promise<number> {
    const post = this.posts.find((post) => post.title === title);

    if (!post?.id) {
      return 0;
    }

    return post.id;
  }

  public async create(post: Post): Promise<void> {
    const id = this.posts.length + 1;
    const existingPost = this.posts.find((p) => p.title === post.title);

    if (existingPost) {
      throw new ConflictError('post with this title already exist');
    }

    post.id = id;

    this.posts.push(post);
  }
}
