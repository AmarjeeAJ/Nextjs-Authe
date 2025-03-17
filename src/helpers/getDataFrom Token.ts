import { NextRequest } from "next/server";
import  Jwt  from "jsonwebtoken";

export conts getDataFromToken = (request: NextRequest) => {
    try{
       const token =  request.cookies.get("token")?.value || '';
       Jwt.verify(token, process.env.JWT_SECRET_KEY!);
    } catch (error: any) {
        throw new Error(error.message);
    }
}