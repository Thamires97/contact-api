# Contact API

This project is an API for managing a contact agenda, allowing CRUD (Create, Read, Update, Delete) operations with authentication and authorization.

## Technologies Used

- **Node.js** (v18+)
- **Express**
- **Prisma ORM**
- **SQLite** (database)
- **Postman** (for API testing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd contact-api
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Configure the database (SQLite) by creating a `.env` file with the following variable:
   ```
   DATABASE_URL="file:./dev.db"
   ```
5. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
6. Start the server:
   ```bash
   yarn dev
   ```

## Endpoints

### Authentication

- `POST /register` - Creates a new user
- `POST /login` - Logs in and returns a JWT token

### Contacts

- `POST /contacts` - Adds a new contact
- `GET /contacts` - Lists all contacts
- `GET /contacts/:id` - Retrieves a contact by ID
- `PUT /contacts/:id` - Updates a contact
- `DELETE /contacts/:id` - Deletes a contact by ID
