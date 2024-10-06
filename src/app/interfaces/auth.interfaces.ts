export interface Login_Request {
  identity_document: string;
  password: string;
  g_recaptcha_response: string;
}

export interface ForgotPassword_Request {
  identity_document: string;
}

export interface ForgotPassword_Response {
  msg: string;
  urlResetPassword: string;
}

export interface Login_Response {
  jwt_token: string;
  error: string | boolean;
}



