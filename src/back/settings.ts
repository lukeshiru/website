import { resolve } from "path";

/**
 * CORS settings.
 *
 * @exports
 */
export const CORS: string = [
	"default-src 'self'",
	"child-src 'self'",
	"connect-src 'self'",
	"font-src 'self'",
	"img-src 'self'",
	"media-src 'self'",
	"object-src 'self'",
	"script-src 'self' 'unsafe-eval'",
	"style-src 'self' 'unsafe-inline'"
].join("; ");

/**
 * Server port.
 *
 * @exports
 */
export const PORT: number = parseInt(process.env.OPENSHIFT_NODEJS_PORT || "8080", 10);

/**
 * Server host.
 *
 * @exports
 */
export const HOST: string = process.env.OPENSHIFT_NODEJS_IP || "localhost";

/**
 * Static directory.
 *
 * @exports
 */
export const STATIC_DIR: string = resolve(`${__dirname}/../../static`);

/**
 * Static directory.
 *
 * @exports
 */
export const FRONT_DIR: string = resolve(`${__dirname}/../../dist/front`);