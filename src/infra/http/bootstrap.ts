import { HTTPCreatePostController } from '../../adapters/http/controllers/create-post.controller';
import { HTTPCreateUserController } from '../../adapters/http/controllers/create-user.controller';
import { CreatePostHttpMapper } from '../../adapters/http/controllers/mappers/create-post.mapper';
import { CreateUserHttpMapper } from '../../adapters/http/controllers/mappers/create-user.mapper';
import { SignInHttpMapper } from '../../adapters/http/controllers/mappers/sing-in.mapper';
import { HTTPSignInController } from '../../adapters/http/controllers/sign-in.controller';
import { CreatePostGateway } from '../../application/gateways/create-post.gateway';
import { CreateUserGateway } from '../../application/gateways/create-user.gateway';
import { SignInGateway } from '../../application/gateways/sign-in-gateway';
import { CreatePostInteractor } from '../../application/interactors/create-post.interactor';
import { CreateUserInteractor } from '../../application/interactors/create-user.interactor';
import { SignInInteractor } from '../../application/interactors/sign-in.interactor';
import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post.repository';
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user.repository';
import { BcryptEncryptorService } from '../services/bcrypt-encryptor.service';
import { JwtSignInService } from '../services/jwt-sign-in.service';
import { NativeNotificationService } from '../services/native-notification.service';

export const createUserHttpMapper = new CreateUserHttpMapper();
export const createPostHttpMapper = new CreatePostHttpMapper();
export const signInHttpMapper = new SignInHttpMapper();

export const nativeNotificationService = new NativeNotificationService();
export const bcryptEncryptorService = new BcryptEncryptorService();
export const jwtSignInService = new JwtSignInService();

export const postRepository = new InMemoryPostRepository();
export const userRepository = new InMemoryUserRepository();

export const createPostGateway = new CreatePostGateway(postRepository, nativeNotificationService);
export const createUserGateway = new CreateUserGateway(userRepository, bcryptEncryptorService);
export const signInGateway = new SignInGateway(jwtSignInService, userRepository, bcryptEncryptorService);

export const createUserInteractor = new CreateUserInteractor(createUserGateway);
export const createPostInteractor = new CreatePostInteractor(createPostGateway);
export const signInInteractor = new SignInInteractor(signInGateway);

export const createPostController = new HTTPCreatePostController(createPostInteractor, createPostHttpMapper);
export const createUserController = new HTTPCreateUserController(createUserInteractor, createUserHttpMapper);
export const signInController = new HTTPSignInController(signInInteractor, signInHttpMapper);
