import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'DND Toolbox API Specs',
      version: '1.0.0',
    },
  },
  apiFolder: 'src/pages/api',
  schemaFolders: ['src/models']
});
export default swaggerHandler();