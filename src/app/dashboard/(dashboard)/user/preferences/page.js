'use client'
import { useState } from "react";

export default function Page() {
  const [editMode, setEditMode] = useState(false);
  const [theme, setTheme] = useState('light');
  const [timezone, setTimezone] = useState('UTC');
  const [language, setLanguage] = useState('en');
  const [dateTimeFormat, setDateTimeFormat] = useState('YYYY-MM-DD HH:mm:ss');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleTimezoneChange = (selectedTimezone) => {
    setTimezone(selectedTimezone);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleDateTimeFormatChange = (selectedFormat) => {
    setDateTimeFormat(selectedFormat);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditMode();
  };

  return (
    <div className="rounded-xl shadow  p-5 bg-blue-400 border">
      <div className=" flex justify-between items-center">
        <h1 className="font-semibold text-4xl bg-transparent text-white rounded-xl w-fit mb-5 ">Preferences</h1>
        <button className="btn bg-transparent hover:bg-blue-400 btn-wide text-white" onClick={toggleEditMode}>
          {editMode ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Time Zone</span>
          </label>
          <select className="input input-bordered" value={timezone} onChange={(e) => handleTimezoneChange(e.target.value)} disabled={!editMode}>
            <option value="UTC-6">UTC-6</option>
            <option value="UTC-5">UTC-5</option>
            <option value="UTC+6">UTC+6</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Language</span>
          </label>
          <select className="input input-bordered" value={language} onChange={(e) => handleLanguageChange(e.target.value)} disabled={!editMode}>
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Date/Time Format</span>
          </label>
          <select className="input input-bordered" value={dateTimeFormat} onChange={(e) => handleDateTimeFormatChange(e.target.value)} disabled={!editMode}>
            <option value="YYYY-MM-DD HH:mm:ss">YYYY-MM-DD HH:mm:ss</option>
            <option value="YYYY-MM-DD HH:mm:ss">YYYY-MM-DD HH:mm:ss</option>
            <option value="YYYY-MM-DD HH:mm:ss">YYYY-MM-DD HH:mm:ss</option>
          </select>
        </div>
        {editMode && <input type="submit" className="btn text-white bg-transparent hover:bg-blue-400 btn-wide mt-4" value='Save' />}
      </form>
    </div>
  );
}
