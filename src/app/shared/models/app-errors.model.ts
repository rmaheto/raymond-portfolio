export interface ApiErrorResponse {
  errors: ApiError[];
}

export interface ApiError {
  code: string;              // e.g., "INVALID_REQUEST"
  locale: string;            // e.g., "eng-USA"
  localizedMessage: string;  // e.g., "Invalid verification token"
  severity: 'INFO' | 'WARNING' | 'ERROR'; // enum-style union (optional)
}
