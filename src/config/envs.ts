import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
	NODE_ENV: env.get('NODE_ENV').default('development').asString(),
	APP_PORT: env.get('APP_PORT').default(4000).asIntPositive(),
	POSTGRES_CONN_STRING: env.get('POSTGRES_CONN_STRING').required().asString(),
};
