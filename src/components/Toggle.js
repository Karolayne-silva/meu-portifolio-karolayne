import "../styles/header.css";

export default function Toggle({ handleChange, isChecked }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        onChange={handleChange}
        checked={isChecked}
        className="toggle"
      />
      <label htmlFor="check"></label>
    </div>
  );
}
