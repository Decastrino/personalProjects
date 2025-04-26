FROM alpine AS stage1
FROM stage1 AS stage2
FROM stage2 AS development


# ### Base image (shared setup)
# FROM node:20-alpine AS base
# WORKDIR /app
# COPY package*.json ./

# ### Development stage
# FROM base AS development
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "dev"]

# ### Production stage
# FROM base AS production
# ENV NODE_ENV=production
# RUN npm ci --only=production
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

# docker build --target=development -t guess-my-number-dev .
# docker run -p 3000:3000 guess-my-number-dev

# docker build --target=production -t guess-my-number .
# docker run -p 3000:3000 guess-my-number

#docker build -t guess-my-number-node .
# docker run -d -p 3000:3000 guess-my-number-node

# docker run -it -v $(pwd):/app -p 3000:3000 guess-my-number-node --> for dev containers
