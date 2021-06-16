import mongoose from 'mongoose';
import { mongoURI } from '../config/keys';

mongoose.connect(mongoURI)