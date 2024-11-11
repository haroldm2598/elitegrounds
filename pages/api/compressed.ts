import type { NextApiRequest, NextApiResponse } from 'next';
import tinify from 'tinify';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Set your TinyPNG API key
tinify.key = process.env.TINIFY_API_KEY || 'YOUR_API_KEY';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			// Ensure an image file is present
			if (!req.body || !req.body.image || typeof req.body.image !== 'string') {
				return res
					.status(400)
					.json({ error: 'No image provided or invalid image data.' });
			}

			const base64Image = req.body.image;

			// Decode the base64 string to buffer
			const buffer = Buffer.from(base64Image, 'base64');

			// Compress the image using the TinyPNG API
			const compressed = await tinify.fromBuffer(buffer).toBuffer();

			// Define the directory path where the image will be saved
			const outputDir = path.join(process.cwd(), 'public', 'tinypng');

			// Ensure the "tinypng" directory exists; create it if it doesn't
			if (!fs.existsSync(outputDir)) {
				fs.mkdirSync(outputDir, { recursive: true });
			}

			// Generate a unique filename using UUID or timestamp
			const uniqueFileName = `${uuidv4()}.png`; // You can also use a timestamp here if you prefer

			// Define the path to save the compressed image with the unique filename
			const outputFilePath = path.join(outputDir, uniqueFileName);

			// Save the compressed image to the filesystem
			fs.writeFileSync(outputFilePath, compressed);

			// Return the URL where the image can be accessed
			return res.status(200).json({
				message: 'Image compressed and saved successfully.',
				imagePath: `/tinypng/${uniqueFileName}` // Accessible via this URL
			});

			// // Convert buffer to base64
			// const compressedBase64 = (compressed as Buffer).toString('base64');

			// return res.status(200).json({ compressedImage: compressedBase64 });
		} catch (error) {
			console.error('Error during compression:', error);
			return res.status(500).json({ error: 'Failed to compress image.' });
		}
	} else {
		// Handle method not allowed
		res.setHeader('Allow', ['POST']);
		return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
	}
}
