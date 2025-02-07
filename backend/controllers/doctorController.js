import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async (req, res) => {
  try {
    const { docId } = req.body;
    // Validate docId
    if (!docId) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID is required",
      });
    }
    const docData = await doctorModel.findById(docId);
    // Check if doctor exists
    if (!docData) {
        return res.status(404).json({
          success: false,
          message: "Doctor not found",
        });
      }
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.status(200).json({
      success: true,
      message: "Availablity Changed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { changeAvailablity, doctorList };
