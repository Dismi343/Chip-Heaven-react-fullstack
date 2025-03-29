
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { S3Client } from '@aws-sdk/client-s3';

export const putObject =async(file, fielName) => {
    try{
        const params ={
            Bucket:process.env.AWS_S3_BUCKET,
            key: `${fielName}`,
            body: file.data,
            ContentType: "image/jpeg,png,jpg",
        }
        const command = new PutObjectCommand(params);

        const data = await S3Client.send(command);

        if(data.$metadata.httpStatusCode !== 200){
            return;
        }

        let url= `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
        console.log("AWS url - ",url);
        return {url,key:params.Key};


    }catch(error){
        console.log(error);
    }
}