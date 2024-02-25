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
export const updateHospital = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const existingHospital = await Hospital.findOne({ creator: id });

    if (!existingHospital) {
      // Hospital not found, return unauthorized
      return res.status(401).json({ message: "Unauthorized - Hospital not found" });
    }

    // Update the hospital
    const updatedHospital = await Hospital.findOneAndUpdate(
      { creator: id },
      { $set: updates },
      { new: true } // Return the modified document
    );

    return res
      .status(200)
      .json({
        message: "Hospital updated successfully",
        hospital: updatedHospital,
      });
  } catch (error) {
    console.log(error);
  }
};
