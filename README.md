# Full Stack Web App with Dockerized Services

This project is a full-stack web application using **Next.js (Frontend), Node.js (Backend), Strapi (CMS), Hasura (GraphQL ORM), PostgreSQL (Database)**, and Docker to containerize all services seamlessly.

---
## **Project Structure**

```
project-root/
├── backend/      # Express.js backend (TypeScript)
├── frontend/     # Next.js frontend (TypeScript)
├── strapi/       # Strapi CMS (TypeScript enabled)
├── hasura/       # Hasura GraphQL Engine
├── postgres/     # PostgreSQL Database
├── docker-compose.yml  # Docker Compose Configuration
└── README.md     # Project Documentation
```

---
## **Services Description**

1. **PostgreSQL (Database)**
   - Stores relational data.
   - Exposed on port **5432** (or 5433 if modified).

2. **Hasura (GraphQL ORM)**
   - Provides instant GraphQL API over PostgreSQL.
   - Runs on **port 8080**.

3. **Strapi (CMS Backend)**
   - Headless CMS for content management.
   - Runs on **port 1337**.

4. **Node.js Backend (Express + TypeScript)**
   - Handles business logic and custom APIs.
   - Runs on **port 4000**.

5. **Next.js Frontend (React + TypeScript)**
   - User interface of the application.
   - Runs on **port 3000**.

---
## **Installation and Setup**

### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/project.git
cd project
```

### **2. Install Dependencies**
Each service has its own dependencies. Install them individually:
```sh
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
cd strapi && npm install && cd ..
```

### **3. Start All Services Using Docker**
```sh
docker-compose up -d --build
```
This command builds and runs all services in detached mode.

### **4. Verify Running Services**
Check if all containers are running:
```sh
docker ps
```

### **5. Stop and Restart Services**
```sh
docker-compose down  # Stop all services

docker-compose up -d # Restart all services
```

### **6. Access Services**
- **Frontend (Next.js):** http://localhost:3000
- **Backend (Express):** http://localhost:4000
- **Strapi CMS:** http://localhost:1337
- **Hasura Console:** http://localhost:8080
- **PostgreSQL:** Runs in background (accessible via Hasura & Backend)

---
## **Useful Docker Commands**

### **Container Management**
```sh
docker ps                  # List running containers
docker stop <container_id>  # Stop a container
docker start <container_id> # Start a stopped container
docker restart <container_id> # Restart a container
docker rm <container_id>    # Remove a container
```

### **Image Management**
```sh
docker images               # List all images
docker rmi <image_id>       # Remove an image
docker build -t app-name .  # Build a new image
```

### **Volumes & Logs**
```sh
docker volume ls            # List Docker volumes
docker logs <container_id>  # View logs of a container
docker-compose logs -f      # View live logs for all services
```

---
## **Troubleshooting**

### **1. PostgreSQL Port Conflict (Error: Address already in use)**
If port **5432** is in use, modify `docker-compose.yml` to use **5433** instead:
```yaml
  postgres:
    ports:
      - "5433:5432"
```
Then restart services:
```sh
docker-compose down && docker-compose up -d
```

### **2. Rebuilding Services**
If you change code but it doesn't reflect, force a rebuild:
```sh
docker-compose up --build -d
```

### **3. Check Container Logs**
```sh
docker logs <container_id>
```

---
## **Contributing**
1. Fork the repository.
2. Create a new branch.
3. Commit changes.
4. Submit a pull request.

---
## **License**
MIT License.

Happy Coding! 🚀

