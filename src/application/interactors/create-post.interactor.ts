import type { Post } from '../../entities/post';
import type { CreatePostGateway } from '../gateways/create-post.gateway';

export class CreatePostInteractor {
  constructor(private readonly gateway: CreatePostGateway) {}

  public async execute(post: Post): Promise<void> {
    await this.gateway.create(post);

    const postId = await this.gateway.getPostIdByTitle(post.title);

    await this.gateway.sendCreatePostNotification({ postId: postId, userId: post.userId });
  }
}
