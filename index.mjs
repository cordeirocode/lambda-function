import { log } from './log.mjs';

export const handler = async (event) => {
  // TODO implement
  log('Hello Lambda, from Joao!');

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  
  return response;
};
