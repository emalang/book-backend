# Build stage
FROM node:22-alpine AS build
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# Runtime stage
FROM node:22-alpine AS runtime
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy only what's needed to run
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
## Ensure seed data is available in runtime image
COPY --from=build /usr/src/app/src/seeds/books.json ./dist/seeds/books.json

EXPOSE 3000
CMD ["node", "dist/main.js"]

