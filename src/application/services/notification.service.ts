export interface NotificationService {
  sendCreatePostNotification(input: SendCreatePostNotificationInput): Promise<void>;
}

export type SendCreatePostNotificationInput = {
  postId: number;
  userId: number;
};
