# StreetPaws - Stray Animal Welfare Management System

StreetPaws is a comprehensive web application designed to manage stray animal welfare in Lipa City. The platform enables users to report stray animals, apply for adoption, search for lost pets, volunteer for animal welfare activities, and donate to support the cause.

## Features

- **User Authentication**: Secure login and registration system
- **Animal Reporting**: Report stray, lost, or abused animals with image upload and location tagging
- **Adoption Management**: Browse adoptable animals and submit adoption applications
- **Lost & Found**: Report lost pets or found animals to help with reuniting
- **Volunteer Management**: Apply to volunteer and manage volunteer activities
- **Donation System**: Support animal welfare through secure online donations
- **Admin Dashboard**: Comprehensive analytics and management tools
- **GIS Integration**: Map visualization of animal reports and sightings
- **Image Recognition**: Compare uploaded pet photos for potential matches

## Technology Stack

- **Frontend**: Next.js with TypeScript
- **UI Framework**: Chakra UI with custom theme
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Storage**: AWS S3 or Cloudinary for image uploads
- **Maps**: Mapbox or Google Maps API
- **Deployment**: Vercel or similar platform

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/streetpaws.git
   cd streetpaws
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/streetpaws"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="your-mapbox-token"
   ```

4. Initialize the database
   ```bash
   npx prisma db push
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/streetpaws
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and libraries
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles
│   └── generated/         # Generated Prisma client
├── .env                   # Environment variables
└── next.config.js         # Next.js configuration
```

## Deployment

The application can be deployed to Vercel with minimal configuration:

```bash
vercel
```

For other platforms, ensure that you set up the necessary environment variables as described in the installation section.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Lipa City Animal Welfare Department
- All volunteers and contributors to animal welfare in Lipa City
