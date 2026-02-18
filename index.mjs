import { log } from './log.mjs';
import { S3 } from "aws-sdk/clients/s3";

const s3Client = new S3({ region: "us-east-2" });

export const handler = async (event) => {
  const record = event.Records[0];
  const Bucket = record.s3.bucket.name;
  const Key = record.s3.object.key;

  const getObjectResult = await s3Client.getObject({
    Bucket,
    Key,
  });

  const mega_byte = 1024 * 1024;

  if (getObjectResult.Contentlength > mega_byte) {
    log(`File is too large`);

    return {
      statusCode: 400,
      body: JSON.stringify({ error: "File is too large" }),
    };
  }

  log(`File is OK`);

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };

  return response;
};
