/** @type {import('next').NextConfig} */
const nextConfig = {
	api: {
		bodyParser: {
			sizeLimit: '50mb' // Increase the limit to 50MB (or whatever you need)
		}
	}
};

export default nextConfig;
