import type { Post } from '../../entities/post';
import type { CreatePostGateway } from '../gateways/create-post.gateway';

export class CreatePostInteractor {
  constructor(private readonly gateway: CreatePostGateway) {}

  public async execute(input: CreatePostInput): Promise<void> {
    await this.gateway.create(input);

    const postId = await this.gateway.getPostIdByTitle(input.title);

    await this.gateway.sendCreatePostNotification({ postId: postId, userId: input.userId });
  }
}

export type CreatePostInput = {
  userId: number;
  title: string;
  content: string;
};
