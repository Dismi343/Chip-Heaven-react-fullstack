const { S3Client } = require('@aws-sdk/client-s3');
exports.s3Client = new S3Client(
    {
        region:process.env.AWS_REGION,
        credentials : {
            accesskEYiD: process.env.AWS_ACCESS_KEY,
            secreteAccessKey: process.env.AWS_SECRET_KEY,

        }
    }
)