import type {
  NotificationService,
  SendCreatePostNotificationInput,
} from '../../../application/services/notification.service';

export class NativeNotificationService implements NotificationService {
  public async sendCreatePostNotification(input: SendCreatePostNotificationInput): Promise<void> {
    // TO-DO criar um mapper que transforma o input do service para o input da tecnologia
    const nativeInput = { usuario_id: input.userId, postagem_id: input.postId };

    return this.send(nativeInput);
  }

  private async send(nativeInput: NativeInput): Promise<void> {
    console.log(`Usuário criado: ${nativeInput.usuario_id} e Postagem criada: ${nativeInput.postagem_id}`);
  }
}

export type NativeInput = {
  usuario_id: number;
  postagem_id: number;
};
