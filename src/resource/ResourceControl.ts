export interface ResourceControl {
  setAccessToken: (accessToken: string) => void;
  clearCache: () => void;
}
