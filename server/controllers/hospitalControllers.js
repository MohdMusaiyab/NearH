import hospitalModel from "../models/hospitalModel.js";
export const createHospital = async (req, res) => {
  try {
    const {
      name,
      services,
      patientsNo,
      availableBeds,
      totalBeds,
      doctors,
      bloodRequired,
      phoneNumber,
      callAmbulance,
    } = req.body;
    const newHospital = new hospitalModel({
      name,
      services,
      patientsNo,
      availableBeds,
      totalBeds,
      doctors,
      bloodRequired,
      phoneNumber,
      callAmbulance,
    });
    await newHospital.save();
    res.status(201).send({
        success: true,
        message: "Hospital Created Successfully",
        data: newHospital,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
