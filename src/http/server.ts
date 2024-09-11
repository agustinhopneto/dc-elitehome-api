import { envs } from '@/config/envs';
import { app } from './app';

app
	.listen({
		host: '0.0.0.0',
		port: envs.APP_PORT,
	})
	.then(() => {
		console.log(`🚀 HTTP Server is running at ${envs.APP_PORT}!`);
	});
