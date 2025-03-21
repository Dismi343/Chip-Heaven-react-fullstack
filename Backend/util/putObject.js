import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

exports.putObject=async(fileUpload,fileName)=>{
    try{
        const params={
            Bucket:process.env.AWS_S3_BUCKET_NAME,
            Key:`${fileName}`,
            body:file,
            contentType:'image/jpeg,jpg,png'
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