// Prefix a file in /public with the deploy base path (see next.config.mjs).
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
