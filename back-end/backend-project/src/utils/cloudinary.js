import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

async function uploadAndTransformImage(filePathOrUrl) {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    // Determine if the input is a local file or a URL
    const isLocalFile = fs.existsSync(filePathOrUrl);

    // Upload the image
    const uploadResult = await cloudinary.uploader.upload(filePathOrUrl, {
      public_id: "shoes", // Adjust as needed
      resource_type: "auto",
    });

    console.log("Upload Result:", uploadResult);
    console.log("Uploaded File URL:", uploadResult.url);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
    });

    console.log("Optimized URL:", optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url(uploadResult.public_id, {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });

    console.log("Auto-Cropped URL:", autoCropUrl);

    return uploadResult; // Return the result for further processing if needed
  } catch (error) {
    console.error("Error during upload:", error);

    // If the input was a local file, unlink it
    if (fs.existsSync(filePathOrUrl)) {
      try {
        fs.unlinkSync(filePathOrUrl);
        console.log("Local file unlinked due to error.");
      } catch (unlinkError) {
        console.error("Failed to unlink local file:", unlinkError);
      }
    }

    throw error; // Re-throw the error to be handled by the caller
  }
}

export default uploadAndTransformImage;
