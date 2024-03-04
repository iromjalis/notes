import { Request, Response } from 'express';
import UserModel, { User } from '../models/user'; // Tuodaan UserModel ja User-rajapinta, jotka on määritelty user.ts-tiedostossa

// Kontrollerifunktio käyttäjän luomiseen
export const createUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body; // Otetaan käyttäjän tiedot pyynnöstä
  try {
    const existingUser = await UserModel.findOne({ username }); // Tarkistetaan, onko käyttäjä jo olemassa
    if (existingUser) {
      return res.status(400).json({ message: 'Käyttäjä on jo olemassa' });
    }
    const newUser = new UserModel({ username, password }); // Luodaan uusi käyttäjä
    await newUser.save(); // Tallennetaan uusi käyttäjä tietokantaan
    res.status(201).json({ message: 'Käyttäjä luotu onnistuneesti' });
  } catch (error) {
    console.error("Virhe käyttäjän luomisessa:", error);
    res.status(500).json({ message: 'Virhe käyttäjän luomisessa' }); // Lähetetään virheilmoitus, jos käyttäjän luominen epäonnistuu
  }
};
