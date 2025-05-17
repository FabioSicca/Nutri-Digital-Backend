# Start a basic postgres container

1. 
```bash
docker pull postgres
```

2. 

```bash
docker run --name nutridigitaldb -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres
```

3. 

```bash
docker exec -it nutridigitaldb bash
psql -h localhost -U postgres
CREATE DATABASE nutridigitaldb;
```

4. 

```bash
\c nutridigitaldb;
```

5. 

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

6. 

```bash
npm run seed:food
npm run seed:user
```

7. 

```bash
npx drizzle-kit studio
```

