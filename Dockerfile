# Stage 1: Build the app
FROM node:18-bullseye as builder
WORKDIR /usr/src/app
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci
COPY . .
RUN npm run build
# After this, dist/ is created inside /usr/src/app

# Stage 2: Run the app
FROM node:18-bullseye
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/.env ./.env
COPY --from=builder /usr/src/app/package*.json ./

# Only install production dependencies
RUN npm install --only=production

EXPOSE 8000
CMD ["node", "dist/main"]