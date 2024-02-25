import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    services: [
      {
        service: {
          type: String,
        },
        rate: {
          type: Number,
        },
      },
    ],
    patientsNo: {
      type: Number,
      default: 0,
    },
    availableBeds: {
      type: Number,
    },
    totalBeds: {
      type: Number,
    },
    doctors: [
      {
        name: {
          type: String,
          required: true,
        },
        specialty: {
          type: String,
          required: true,
        }
      },
    ],
    bloodRequired: [
      {
        type: String,
        enum: ["A", "B", "AB+", "O", "Other"],
      },
    ],
    phoneNumber: {
      type: String,
      required: true,
    },
    callAmbulance: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hospital", hospitalSchema);
