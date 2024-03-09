import { ContextType } from '../types/types';
import UserModel, { User } from '../models/user'; // Oletetaan, että User-malli ja UserModel ovat oikeassa sijainnissa

export const resolvers = {
  Query: {
    getUser: async (parent: any, args: any, context: ContextType) => {
      const { id } = args;
      return await UserModel.findById(id);
    },
  },
  Mutation: {
    login: async (parent: any, args: any, context: ContextType) => {
      // Kirjaudu käyttäjä sisään
      // Tässä tulee määrittää kirjautumistoiminnallisuus, kuten käyttäjän tunnistus ja valtuutus
      // Palauta esimerkiksi käyttäjäobjekti tai token kirjautuneelle käyttäjälle
      throw new Error('Login not implemented');
    },
    createUser: async (parent: any, args: any, context: ContextType) => {
      const { username, email, password } = args;
      const newUser = await UserModel.create({ username, email, password });
      return newUser;
    },
    register: async (parent: any, args: any, context: ContextType) => {
      const { username, email, password } = args;
      
      try {
        // Tarkista, onko käyttäjä jo olemassa
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          throw new Error('User already exists');
        }

        // Luo uusi käyttäjä tietokantaan
        const createdUser = await UserModel.create({
          username,
          email,
          password,
        });

        // Palauta luotu käyttäjä
        return createdUser;
      } catch (error) {
        // Käske virheen, jos käyttäjän luominen epäonnistuu
        throw new Error('Error creating user: ' + "error.message");
      }
    },
  },
};
