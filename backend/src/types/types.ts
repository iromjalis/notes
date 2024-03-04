import { MongoClient } from 'mongodb';
import { User } from '../../../frontend/src/models/User';

export interface DatabaseConnection {
  client: MongoClient; // MongoDB:n klientti
}

export interface ContextType {
  dbConnection: DatabaseConnection; // Tietokantayhteys
  user: User | null; // Kirjautunut käyttäjä tai null, jos ei kirjautunut
}
