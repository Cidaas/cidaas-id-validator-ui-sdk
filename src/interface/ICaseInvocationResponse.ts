export interface CaseInvocationResponse {
  data?: CaseInvocationData;
  status: number;
  success: boolean;
  error?: string;
  error_code?: string;
}

export interface CaseInvocationData {
  case_processing_url: string;
  case_redirect_url: string;
  case_id: string;
  client_id: string;
  flow_type: string;
}
