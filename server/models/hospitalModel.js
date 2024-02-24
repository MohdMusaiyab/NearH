import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
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
      required: true,
    },
    availableBeds: {
      type: Number,
      required: true,
    },
    totalBeds: {
      type: Number,
      required: true,
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
        },
        experience: {
          type: Number,
          required: true,
        },
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

export default mongoose.model("hospital", hospitalSchema);
