export default function AdmissionEnquiry() {
  return (
    <div className="page-layout">
      <div className="flex flex-col-reverse md:flex-row my-16 lg:my-32 px-20 xs:px-5">
        <div className="w-100 md:w-1/2 sm:mt-14">
          <div className="flex flex-col">
            <h1 className="text-heading ">Admission Proccess</h1>
            <span className="underline w-2/12"></span>
          </div>
          <div className="flex flex-col mt-14 font-semibold debug">
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
        <div className="w-100 md:w-1/2 md:mt-14">
          <div className="flex flex-col">
            <h1 className="text-heading ">Admission Enquiry</h1>
            <span className="underline w-2/12"></span>
          </div>
          <dir className="sm:mt-10 xs:pl-0">
            <form>
              <div className="flex flex-col sm:flex-row">
                <div className="w-1/2 xs:w-full">
                  <div className="form-control py-2 pt-0 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Student Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Student Name"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>
                  <div className="form-control py-2 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Father's Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Father's Name"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>
                  <div className="form-control py-2 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">School</span>
                    </label>
                    <select className="select select-bordered">
                      <option disabled value="DEFAULT">
                        Select School
                      </option>
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
                    <label className="label">
                      <span className="label-text">Mobile Number</span>
                    </label>
                    <input
                      type="number"
                      minLength="10"
                      maxLength="10"
                      placeholder="Mobile Number"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>

                  <div className="form-control py-2 pt-0 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-2 xs:pl-0 xs:w-100">
                  <div className="flex flex-row sm:flex-col">
                    <div className="form-control py-2 pt-0 w-10/12 sm:w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Current Standard</span>
                      </label>
                      <select className="select select-bordered">
                        <option disabled value="DEFAULT">
                          Select your current standard
                        </option>
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
                    <div className="form-control py-0 pl-2 sm:pl-0 sm:py-2 w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">BOARD</span>
                      </label>
                      <select className="select select-bordered">
                        <option disabled value="DEFAULT">
                          Select your school BOARD
                        </option>
                        <option>CBSE</option>
                        <option>ICSE</option>
                        <option>GSEB</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-control py-2 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>
                  <div className="form-control py-2 pt-0 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">WhatsApp Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="WhatsApp Number"
                      className="input input-bordered w-full max-w-xs font-semibold"
                    />
                  </div>
                </div>
              </div>
              <div className="form-control py-2">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text pl-5">
                    I verify the above infromation with all my knwoledge and I
                    allow Mirror Instutute to use my phone number and email for
                    future communication.
                  </span>
                </label>
              </div>
              <div className="btn btn-accent py-2" typeof="submit">
                Submit
              </div>
            </form>
          </dir>
        </div>
      </div>
    </div>
  );
}
