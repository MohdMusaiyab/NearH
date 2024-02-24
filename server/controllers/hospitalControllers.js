import Hospital from "../models/hospitalModel.js";
// Creating a Hospital
export const createHospital = async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    await hospital.save();
    res.status(201).send({
      success: true,
      message: "Hospital Created Successfully",
      data: hospital,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
