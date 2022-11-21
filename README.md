# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash

# npm
npm install

```

Install serverless framework 

```bash

# serverless
npm install -g serverless

```




## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Configure AWS CLI credentials https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html

Create AWS s3 bucket and publish into cloudfront https://aws.amazon.com/es/premiumsupport/knowledge-center/cloudfront-serve-static-website/

In the file nuxt.config.ts update the url of the cloudfront distribution 

```nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-security'
      ],
    app: {
      cdnURL: "https://MI_CDN",
    }
})
```


Build the application for production:

```bash
npm run build
```

Copy the public files to s3 created

```bash
aws s3 cp ./.output/public s3://MI_BUCKET_CREADO --recursive 
```

Deploy Server to a Serverless Function 

```bash
serverless deploy      
```

TODO: Agregar comandos para crear un cloudfront delante del API Gateway 



Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
