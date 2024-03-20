import "./SideBar.css";
import Input from "./Input";

function SideBar() {
  return (
    <div className="mt-20 ml-5">
      <h2 className="sidebar-title">Location</h2>

      <div>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
        //   handleChange={handleChange}
          value="maharashtra"
          title="maharashtra"
          name="test"
        />
        <Input
        //   handleChange={handleChange}
          value="kerala"
          title="Kerala"
          name="test"
        />
        <Input
        //   handleChange={handleChange}
          value="uttarpradesh"
          title="Uttarpradesh"
          name="test"
        />
        <Input
        //   handleChange={handleChange}
          value="delhi"
          title="Delhi"
          name="test"
        />
      </div>
    </div>
  );
}

export default SideBar;