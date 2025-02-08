import { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, backendUrl, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("fees", profileData.fees);
      formData.append("available", profileData.available);
      formData.append("address", JSON.stringify(profileData.address));
      formData.append("about", profileData.about);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        formData,
        { headers: { dToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        setImage(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div>
        <div className="flex flex-col gap-4 m-5">
          <div>
            {isEdit ? (
              <label htmlFor="image">
                <div className="inline-block relative cursor-pointer">
                  <img
                    className="bg-blue-400 w-full sm:max-w-64 rounded-lg"
                    src={image ? URL.createObjectURL(image) : profileData.image}
                    alt=""
                  />
                  <img
                    className="w-10 absolute bottom-12 right-12"
                    src={image ? "" : assets.upload_icon}
                    alt=""
                  />
                </div>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
            ) : (
              <img
                className="bg-blue-400 w-full sm:max-w-64 rounded-lg"
                src={profileData.image}
                alt=""
              />
            )}
          </div>
          <div className="flex-1 border border-stone-100 rounded-lg p-8 bg-white">
            {/* Doc Info : name, degree, experience */}
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {profileData.name}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {profileData.degree} - {profileData.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {profileData.experience}
              </button>
            </div>
            {/* Doc About */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
                About:
              </p>
              {isEdit ? (
                <textarea
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      about: e.target.value,
                    }))
                  }
                  value={profileData.about}
                  rows={5}
                  className="w-full p-2 border rounded"
                ></textarea>
              ) : (
                <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                  {profileData.about}
                </p>
              )}
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-800">
                {currency}{" "}
                {isEdit ? (
                  <input
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={profileData.fees}
                    type="number"
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </p>
            <div className="flex gap-2 py-2">
              <p className="font-medium">Address:</p>
              {isEdit ? (
                <p>
                  <input
                    className="bg-gray-50"
                    type="text"
                    value={profileData.address.line1}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <br />
                  <input
                    className="bg-gray-50"
                    type="text"
                    value={profileData.address.line2}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </p>
              ) : (
                <p className="text-gray-500">
                  {profileData.address.line1} <br /> {profileData.address.line2}{" "}
                </p>
              )}
            </div>
            <div className="flex gap-1 pt-2">
              <input
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={profileData.available}
                type="checkbox"
              />
              <label htmlFor="">Available</label>
            </div>
            <div className="mt-10">
              {isEdit ? (
                <button
                  className="border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                  onClick={updateUserProfileData}
                >
                  Save Information
                </button>
              ) : (
                <button
                  className="border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
