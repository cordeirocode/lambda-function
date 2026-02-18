import { log } from './log.mjs';

export const handler = async (event) => {
  log("Novo teste apos implementacao de Github Actions");

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };

  return response;
};
