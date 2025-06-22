export interface AppError {
   message: string;
   status: number | string;
   statusText: string;
   code?: string;
   details?: unknown;
}
