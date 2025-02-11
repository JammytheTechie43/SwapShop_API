# SwapShop_API

#API Design

Tech Stack:

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB (or SQL if later preferred)
Authentication: OAuth via University of Michigan’s Single Sign-On (SSO)
Hosting: Could use Heroku, Vercel, or AWS
Messaging: WebSockets or API-based messaging system

Core API Endpoints

1. Authentication & User Management
User Signup/Login (OAuth with U-M)

POST /api/auth/login → Logs in user via U-M OAuth
POST /api/auth/logout → Logs out user
GET /api/auth/me → Gets the currently authenticated user
User Profile

GET /api/users/:id → Fetch user profile
PUT /api/users/:id → Update user profile
DELETE /api/users/:id → Soft delete user account
Role-Based Access Control

Admin Panel → Admins can manage users, delete inappropriate listings, etc.

2. Item Listings (CRUD)
Create, Read, Update, Delete Items

POST /api/items → Create new item listing
GET /api/items → Get all item listings
GET /api/items/:id → Get specific item
PUT /api/items/:id → Update an item listing
DELETE /api/items/:id → Delete an item (only by owner or admin)
Filtering & Searching

GET /api/items?category=furniture → Filter by category
GET /api/items?location=North_Campus → Filter by location
GET /api/items?search=table → Search items

3. Messaging System
POST /api/messages → Send a message
GET /api/messages/:conversationId → Fetch messages in a conversation
GET /api/conversations → Get all conversations for a user
(We can either use WebSockets for real-time chat or REST-based messaging.)

4. Admin Moderation
GET /api/admin/users → Admin fetches all users
DELETE /api/admin/items/:id → Admin deletes inappropriate item listings
