import { log } from './log.mjs';

export const handler = async (event) => {
  log(`${JSON.stringify(event)}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };

  return response;
};
