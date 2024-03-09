import { Schema, Document, model } from 'mongoose';

// Määrittele käyttäjän tietomalli
export interface User extends Document {
  username: string;
  password: string;
  email: string;
}

// Määrittele käyttäjän skeema
const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = model<User>('User', UserSchema);


// Luo ja vie käyttäjän tietomalli MongoDB:hen
export default model<User>('User', UserSchema);
