import useAxiosPublic from "@/Hook/useAxiosPublic";
import axios from "axios";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function CreateParticipantForm({ setQuestions, setUserData }) {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const terms_and_condition = e.target.terms_and_condition.checked;

    const userObject = {
      first_name,
      last_name,
      email,
      country,
      age,
      gender,
      terms_and_condition,
    };

    axiosPublic
      .post("/create_participant", userObject)
      .then((res) => {
        if (res?.data.acknowledged) {
          swal({
            title: "Good job!",
            text: "You created a participant!",
            icon: "success",
            button: "Ok",
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Alert!",
          text: "There is an error!",
          icon: "error",
          button: "Try Again",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] mx-auto mt-3 ">
      {/* info */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* input */}
        <div>
          <p className="text-sm">First Name</p>
          <input
            required
            type="text"
            placeholder="First Name"
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full input-success "
            name="first_name"
          />
        </div>
        <div>
          <p className="text-sm">Last Name</p>
          <input
            required
            type="text"
            placeholder="Last Name"
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full input-success "
            name="last_name"
          />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Your Email</p>
          <input
            required
            type="text"
            placeholder="Your Email"
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full input-success "
            name="email"
          />
        </div>

        {/* input */}
        <div>
          <p className="text-sm">Your Country</p>
          <select
            className="select select-bordered w-full select-success"
            name="country"
            defaultValue="Bangladesh"
          >
            <option disabled selected>
              Your Country
            </option>
            {countries.map((name, idx) => (
              <option key={idx}>{name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            required
            type="text"
            placeholder="Age"
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-24 input-success "
            name="age"
          />

          <div className="flex items-center gap-3">
            <input
              required
              type="radio"
              name="gender"
              id="male"
              className="radio"
              value="male"
            />
            <label htmlFor="male">Male</label>
            <input
              required
              type="radio"
              name="gender"
              id="female"
              className="radio"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <p className="flex items-center gap-3">
          <input
            type="checkbox"
            className="checkbox"
            id="termsAndCondition"
            name="terms_and_condition"
          />

          <label htmlFor="termsAndCondition" className="cursor-pointer">
            {" "}
            Please accept our{" "}
          </label>

          <span className="text-blue-500">Terms and condition</span>
        </p>
      </div>

      <button
        className="btn btn-md btn-neutral mt-6 block ml-auto"
        type="submit"
      >
        Create Participant
      </button>
    </form>
  );
}

export default CreateParticipantForm;
