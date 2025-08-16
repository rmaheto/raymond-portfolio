export type AppResult<T> = {
  message: string;
  code: string;
  loading: boolean;
  data: T;
  errors?: {
    code: string;              // e.g., "INVALID_REQUEST"
    locale: string;            // e.g., "eng-USA"
    localizedMessage: string;  // e.g., "Invalid verification token"
    severity: 'INFO' | 'WARNING' | 'ERROR'; // enum-style union (optional)
  }
}
