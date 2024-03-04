import { ContextType } from '../types/types'; // Oletetaan, että ContextType on määritelty tiedostossa 'types.ts'
import { User } from '../../../frontend/src/models/User';

export const resolvers = {
  Query: {
    getUser: async (parent: any, args: any, context: ContextType) => {
      // Hae käyttäjä tietokannasta
      const user = context.user;
      const dbConnection = context.dbConnection;
      // Tee jotain käyttäjän ja tietokantayhteyden kanssa
    },
  },
  Mutation: {
    login: async (parent: any, args: any, context: ContextType) => {
      // Kirjaudu käyttäjä sisään
    },
    createUser: async (parent: any, args: any, context: ContextType) => {
      // Luo uusi käyttäjä
    },
  },
};
