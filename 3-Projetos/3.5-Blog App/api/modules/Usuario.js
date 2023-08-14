import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  usuario: { typeof: String, required: true, min: 4, unique: true },
  senha: { typeof: String, required: true },
});

const UserModel = model('Usuario', UserSchema);

export default UserModel;
