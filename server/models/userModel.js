// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     bio: {
//       type: String,
//       default: 'Available',
//     },
//     profilePic: {
//       type: String,
//       default:
//         'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
//     },
//     contacts: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign(
//       { id: this._id, email: this.email },
//       process.env.SECRET,
//       {
//         expiresIn: '24h',
//       }
//     );

//     return token;
//   } catch (error) {
//     console.log('error while generating token');
//   }
// };

// const userModel = mongoose.model('User', userSchema);
// export default userModel;
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure unique emails
      trim: true,   // Remove spaces before/after
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: 'Available',
    },
    profilePic: {
      type: String,
      default: function () {
        if (this.email) {
          const hash = crypto.createHash('md5').update(this.email.trim().toLowerCase()).digest('hex');
          return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
        }
        return 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg';
      },
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// **Hash password before saving**
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// **Generate JWT Auth Token**
userSchema.methods.generateAuthToken = function () {
  try {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  } catch (error) {
    console.error('Error generating token:', error);
    return null;
  }
};

// **Create User Model**
const UserModel = mongoose.model('User', userSchema);
export default UserModel;

