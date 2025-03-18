import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        
        if (!token) {
            throw new Error("Token not found");
        }

        const decodedData = Jwt.verify(token, process.env.JWT_SECRET_KEY!);

        return decodedData; // Return decoded token data
    } catch (error: any) {
        throw new Error(`Token verification failed: ${error.message}`);
    }
};
