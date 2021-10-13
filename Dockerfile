FROM node:14 as base



# Bundle APP files
COPY src src/
COPY package.json .




FROM base as production
# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

COPY . .

RUN npm run build

# Show current folder structure in logs
RUN ls -al -R

CMD [ "node", "dist/src/index.js" ]


