import type { Post } from '../../entities/post';
import type { CreatePostInput } from '../interactors/create-post.interactor';
import type { PostRepository } from '../repositories/post.repository';
import type { NotificationService, SendCreatePostNotificationInput } from '../services/notification.service';

export class CreatePostGateway {
  constructor(private readonly repository: PostRepository, private readonly notificationService: NotificationService) {}

  public async sendCreatePostNotification(input: SendCreatePostNotificationInput): Promise<void> {
    return this.notificationService.sendCreatePostNotification(input);
  }

  public async getPostIdByTitle(title: string): Promise<number> {
    return this.repository.getPostIdByTitle(title);
  }

  public async create(input: CreatePostInput): Promise<void> {
    return this.repository.create(input);
  }
}
