'use client';
import { ChangeEvent, useState } from 'react';

export default function TestUpload() {
	const [image, setImage] = useState<File | null>(null);
	const [compressedImage, setCompressedImage] = useState<string | null>(null);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setImage(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (image) {
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onloadend = async () => {
				const base64Image = reader.result?.toString().split(',')[1]; // Get base64 string

				if (base64Image) {
					const response = await fetch('/api/compressed', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ image: base64Image })
					});

					const data = await response.json();
					// pang get lang siguro incase na okay na yung upload
					if (data.compressedImage) {
						// setCompressedImage(`data:image/png;base64,${data.compressedImage}`);
						setCompressedImage(`public/tinypng/${data.compressedImage}`);
					} else {
						console.error('Compression failed', data.error);
					}
				}
			};
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='file' accept='image/*' onChange={handleImageChange} />
				<button type='submit'>Compress Image</button>
			</form>

			{compressedImage && (
				<div>
					<h3>Compressed Image:</h3>
					<img src={compressedImage} alt='Compressed' />
				</div>
			)}
		</div>
	);
}
