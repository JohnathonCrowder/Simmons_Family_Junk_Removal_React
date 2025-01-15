import mongoose from 'mongoose';
import Admin from '../models/Admin';
import dotenv from 'dotenv';

dotenv.config();

const adminCredentials = {
  username: 'admin',
  password: 'admin123' // You should change this to a secure password
};

async function createAdminUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: adminCredentials.username });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create new admin user
    const admin = new Admin(adminCredentials);
    await admin.save();
    
    console.log('Admin user created successfully');
    console.log('Username:', adminCredentials.username);
    console.log('Password:', adminCredentials.password);
    console.log('\nPlease change the password after first login!');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the script
createAdminUser();