
FROM nginx
WORKDIR /api
COPY api /usr/nginx/html
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
CMD ["npm", "start"]