// In a separate server action file, e.g., `/lib/actions.ts`

import { db } from '@/lib/db';

export async function removeProfileImage(authUserId: string) {
  return db.user.update({
    where: { clerkId: authUserId },
    data: { profileImage: '' },
  });
}

export async function uploadProfileImage(authUserId: string, image: string) {
  return db.user.update({
    where: { clerkId: authUserId },
    data: { profileImage: image },
  });
}

export async function updateUserInfo(authUserId: string, name: string) {
  return db.user.update({
    where: { clerkId: authUserId },
    data: { name },
  });
}
