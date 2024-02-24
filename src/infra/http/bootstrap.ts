import { HTTPCreatePostController } from '../../adapters/http/controllers/create-post.controller';
import { HTTPCreateUserController } from '../../adapters/http/controllers/create-user.controller';
import { CreatePostGateway } from '../../application/gateways/create-post.gateway';
import { CreateUserGateway } from '../../application/gateways/create-user.gateway';
import { CreatePostInteractor } from '../../application/interactors/create-post.interactor';
import { CreateUserInteractor } from '../../application/interactors/create-user.interactor';
import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post.repository';
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user.repository';
import { NativeNotificationService } from '../services/native/native-notification.service';

export const nativeNotificationService = new NativeNotificationService();
export const postRepository = new InMemoryPostRepository();
export const userRepository = new InMemoryUserRepository();
export const createPostGateway = new CreatePostGateway(postRepository, nativeNotificationService);
export const createUserGateway = new CreateUserGateway(userRepository);
export const createUserInteractor = new CreateUserInteractor(createUserGateway);
export const createPostInteractor = new CreatePostInteractor(createPostGateway);
export const createPostController = new HTTPCreatePostController(createPostInteractor);
export const createUserController = new HTTPCreateUserController(createUserInteractor);
