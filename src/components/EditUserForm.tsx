import React, { useState } from "react";
import { User } from "../types/user";
import { GENDER_OPTIONS } from "../constants/constants";

interface EditUserFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState(user);
  const [isSaveEnabled, setSaveEnabled] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSaveEnabled(true);
  };

  const handleSave = () => onSave(formData);

  return (
    <>
      <div>
        <div className="flex justify-between">
          <p className="w-[28%] flex flex-col">
            <span className="text-gray-600">Age</span>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border px-1 w-full rounded-lg"
            />
          </p>
          <p className="w-[28%] flex flex-col">
            <span className="text-gray-600">Gender</span>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="h-full rounded-lg px-1"
            >
              {GENDER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </p>
          <p className="w-[28%] flex flex-col">
            <span className="text-gray-600">Country</span>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border px-1 w-full rounded-lg"
            />
          </p>
        </div>
        <p className="flex flex-col my-[10px]">
          <span>Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border px-1 w-full min-h-[106px] rounded-lg"
          />
        </p>
        <div className="flex justify-end space-x-3">
          <button className="" onClick={onCancel}>
            ❌
          </button>
          <button className="" disabled={!isSaveEnabled} onClick={handleSave}>
            ✅
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default EditUserForm;
