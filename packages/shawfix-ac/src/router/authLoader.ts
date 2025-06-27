/**
 * 页面鉴权
 * @returns
 */
export async function authLoader() {
  try {
    const userInfo: unknown = await Promise.resolve();
    return userInfo;
  } catch (_err) {
    return {};
  }
}
