export type ApiRequestContextType = {
  params: Promise<{
    [key: string]: string;
  }>;
};
