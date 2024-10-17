/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    webpack: (config) => {
        config.module.rules.push({
          test: /\.gql/,
          use: [
            {
              loader: './gqlLoader.js',
            },
          ],
        })
     
        return config
      },
};

export default nextConfig;
