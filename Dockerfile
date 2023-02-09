FROM node:18-alpine as build
WORKDIR /opt/app
ADD package*.json ./
RUN npm ci --legacy-peer-deps
ADD . .
RUN npm run build --prod

FROM node:18-alpine
WORKDIR /opt/app
COPY --from=build /opt/app/dist ./dist
ADD package*json ./
RUN npm ci --omit=dev --legacy-peer-deps
CMD ["node", "./dist/main.js"]