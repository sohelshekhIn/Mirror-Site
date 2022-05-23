import successImg from "../public/images/design-elements/success.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdmissionEnquiry() {
  const [formStatus, setFormStatus] = useState("");
  return (
    <div className="page-layout">
      <div className="flex flex-col-reverse md:flex-row my-16 lg:my-32 px-5 md:px-20 ">
        <div className="w-100 md:w-1/2 sm:mt-14">
          <div className="flex flex-col">
            <h1 className="text-heading ">Admission Proccess</h1>
            <span className="underline w-2/12"></span>
          </div>
          <div className="flex flex-col mt-14 font-semibold ">
            <p className="py-2">
              1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              2. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              3. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              4. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              5. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              6. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              7. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              8. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              9. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe,
            </p>
            <p className="py-2">
              10. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe
            </p>
            <p className="py-2">
              11. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe
            </p>
            aliquid.
          </div>
        </div>
        <div className="divider md:divider-horizontal divider-vertical"></div>
        {formStatus === "success" ? (
          <SubmittedUI />
        ) : (
          <EnquiryForm formState={setFormStatus} />
        )}
      </div>
    </div>
  );
}

export function SubmittedUI() {
  return (
    <div className="container w-100 md:w-1/2 md:mt-14 p-5 md:p-16">
      <Image src={successImg} alt="Successfully submitted" className="w-1/12" />
      <div className="text-center mt-4">
        <h1 className="text-2xl font-semibold">
          Your application has been submitted successfully.
        </h1>
        <p className="text-lg">We will get back to you soon.</p>
      </div>
    </div>
  );
}

export function EnquiryForm({ formState }) {
  const [permissionStatus, setPermissionStatus] = useState(false);
  const [formData, setFormData] = useState({
    sname: "",
    fname: "",
    school: "",
    mobile: "",
    email: "",
    std: "",
    board: "",
    city: "",
    wp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
      formState("success");
    } else {
      document
        .getElementById("checkBoxLabel")
        .classList.add("text-red-500", "font-bold");
    }
  };

  return (
    <div className="w-100 md:w-1/2 md:mt-14">
      <div className="flex flex-col">
        <h1 className="text-heading ">Admission Enquiry</h1>
        <span className="underline w-2/12"></span>
      </div>
      <dir className="sm:mt-10 xs:pl-0 xl:w-10/12">
        <form>
          <div className="flex flex-col sm:flex-row">
            <div className="w-1/2 xs:w-full">
              <div className="form-control py-2 pt-0 w-full max-w-xs">
                <label htmlFor="sname" className="label">
                  <span className="label-text">Student Name</span>
                </label>
                <input
                  name="sname"
                  onChange={handleChange}
                  value={formData.sname}
                  type="text"
                  placeholder="Student Name"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>
              <div className="form-control py-2 w-full max-w-xs">
                <label htmlFor="fname" className="label">
                  <span className="label-text">Father's Name</span>
                </label>
                <input
                  name="fname"
                  onChange={handleChange}
                  value={formData.fname}
                  type="text"
                  placeholder="Father's Name"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>
              <div className="form-control py-2 w-full max-w-xs">
                <label htmlFor="school" className="label">
                  <span className="label-text">School</span>
                </label>
                <select
                  name="school"
                  onChange={handleChange}
                  value={formData.school}
                  className="select select-bordered"
                >
                  <option value="DEFAULT">Select School</option>
                  <option>Bharatiya Vidya Bhavans</option>
                  <option>Vrajbhoomi International</option>
                  <option>Podar International</option>
                  <option>Euro / Altius Foritious</option>
                  <option>ETS CBSE</option>
                  <option>Zen School</option>
                  <option>Vibrant International</option>
                  <option>SNV International</option>
                  <option>St.Anne's School</option>
                  <option>St.Marry's School</option>
                  <option>Unique School</option>
                  <option>Mother Care</option>
                  <option>ETS GSEB</option>
                  <option>Santram English</option>
                  <option>Shrishti English</option>
                </select>
              </div>
              <div className="form-control py-2 pt-0 w-full max-w-xs">
                <label htmlFor="mobile" className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  name="mobile"
                  onChange={handleChange}
                  value={formData.mobile}
                  type="number"
                  minLength="10"
                  maxLength="10"
                  placeholder="Mobile Number"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>

              <div className="form-control py-2 pt-0 w-full max-w-xs">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>
            </div>
            <div className="w-1/2 pl-0 sm:pl-2 xs:w-full">
              <div className="form-control py-2 pt-0 w-full max-w-xs">
                <label htmlFor="std" className="label">
                  <span className="label-text">Current Standard</span>
                </label>
                <select
                  name="std"
                  onChange={handleChange}
                  value={formData.std}
                  className="select select-bordered"
                >
                  <option value="DEFAULT">Select your current standard</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11 Maths</option>
                  <option>11 Bio</option>
                  <option>12 Maths</option>
                  <option>12 Bio</option>
                </select>
              </div>
              <div className="form-control py-2 w-full max-w-xs">
                <label htmlFor="board" className="label">
                  <span className="label-text">BOARD</span>
                </label>
                <select
                  name="board"
                  onChange={handleChange}
                  value={formData.board}
                  className="select select-bordered"
                >
                  <option value="DEFAULT">Select your school BOARD</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>GSEB</option>
                </select>
              </div>
              <div className="form-control py-2 w-full max-w-xs">
                <label htmlFor="city" className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  type="text"
                  placeholder="City"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>
              <div
                htmlFor="wp"
                className="form-control py-2 pt-0 w-full max-w-xs"
              >
                <label className="label">
                  <span className="label-text">WhatsApp Number</span>
                </label>
                <input
                  name="wp"
                  onChange={handleChange}
                  value={formData.wp}
                  type="number"
                  placeholder="WhatsApp Number"
                  className="input input-bordered w-full max-w-xs font-semibold"
                />
              </div>
            </div>
          </div>
          <div className="form-control py-2">
            <label className="label cursor-pointer  md:w-11/12">
              <input
                onChange={() => {
                  setPermissionStatus(!permissionStatus);
                }}
                type="checkbox"
                id="checkbox"
                className="checkbox"
              />
              <span className="label-text pl-5" id="checkBoxLabel">
                I hereby declare that the above information is true and correct.
                I am aware that the information provided above is being used for
                admission purpose only.
              </span>
            </label>
          </div>
          <button
            className={
              "btn btn-accent py-2" + (permissionStatus ? "" : " btn-disabled")
            }
            onClick={handleFormSubmission}
            typeof="submit"
          >
            Submit
          </button>
        </form>
      </dir>
    </div>
  );
}
