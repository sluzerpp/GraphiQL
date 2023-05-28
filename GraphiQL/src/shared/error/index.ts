export const createJSONError = (message: string, code: string) => {
  return {
    errors: [
      {
        message,
        extensions: {
          code,
        },
      },
    ],
  };
};

export const createVariablesError = () => {
  return createJSONError('Syntax Error: Invalid JSON', 'VARIABLES_PARSE_FAILED');
};
export const createHeadersError = () => {
  return createJSONError('Syntax Error: Invalid JSON', 'HEADERS_PARSE_FAILED');
};
