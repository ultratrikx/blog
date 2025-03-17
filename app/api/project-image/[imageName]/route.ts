import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
    request: NextRequest,
    { params }: { params: { imageName: string } }
) {
    const imageName = params.imageName;
    const projectsDirectory = path.join(process.cwd(), "projects");
    const imagePath = path.join(projectsDirectory, "images", imageName);

    // Check if the file exists
    if (!fs.existsSync(imagePath)) {
        return new NextResponse("Image not found", { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(imagePath);

    // Determine content type based on file extension
    const ext = path.extname(imageName).toLowerCase();
    let contentType = "application/octet-stream";

    if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".png") contentType = "image/png";
    else if (ext === ".gif") contentType = "image/gif";
    else if (ext === ".webp") contentType = "image/webp";
    else if (ext === ".svg") contentType = "image/svg+xml";

    // Return the image with the appropriate content type
    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    });
}
