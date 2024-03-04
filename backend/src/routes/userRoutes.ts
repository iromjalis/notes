import express from 'express';
import { createUserController } from '../controllers/userController'; // Tuodaan createUserController-funktio, joka on määritelty userController.ts-tiedostossa

const router = express.Router();

// Luodaan uusi käyttäjä
router.post('/users', createUserController);

export default router;
