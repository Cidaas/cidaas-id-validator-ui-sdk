export interface CaseInvocationResponse {
  data: CaseInvocationData;
  status: number;
  success: boolean;
}

export interface CaseInvocationData {
  case_processing_url: string;
  case_id: string;
  client_id: string;
  flow_type: string;
}
