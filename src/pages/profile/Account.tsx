import Select2 from "../../components/form/select/select2";

function Account() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">My Account</h1>
      <form>
        <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col  items-start gap-4 shadow-md">
          <h2 className="text-lg font-semibold text-foreground">
            Contact Information
          </h2>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start">
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col  items-start gap-4 shadow-md mt-6">
          <h2 className="text-lg font-semibold text-foreground">
            Personal Information
          </h2>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start flex-wrap ">
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary"
                placeholder="Enter your last name"
              />
            </div>
            <div className="">
              <Select2
                label="nation"
                options={[
                  { value: "Egypt", label: "Egypt" },
                  { value: "KSA", label: "KSA" },
                ]}
                placeholder="Select gender"
              />
            </div>
            <div>
              <label htmlFor="">birthdate</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary"
                placeholder="Enter your birthdate"
              />
            </div>
            <div>
              <label htmlFor="">Gender</label>
              <select className="w-full border border-gray-300 rounded-md p-4 mt-1 focus:ring-primary focus:border-primary">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 px-20 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors hover:bg-primary/90"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Account;
