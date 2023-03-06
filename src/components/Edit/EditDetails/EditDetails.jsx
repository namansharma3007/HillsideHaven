import React, {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditDetails = (detailsChange) => {
    const[detailsSendBack, sendDetaislBackValues] = useState({})
    const[displayDetails, sendDisplayDetails] = useState({})
    const[selectedUserMail, setUserMail] = useState(detailsChange != null ? detailsChange?.email : "");

    let {email} = useParams();
    console.log(detailsChange)

    useEffect(() => {
        fetch("https://serverhillsidehaven-production.up.railway.app/customerDetails/detailsFilter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email: email}),
        })
          .then((response) => response.json())
          .then((data) => setcustomerDetails(data.data));
      }, [email]);

    const handleChange = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        const details = {
          email: email,
          address: formData.get("exampleInputAddress"),
          adhaarCard: formData.get("exampleInputAdhaar"),
          phoneNo: formData.get("exampleInputMobile"),
        };
        console.log(details)
        // sendDetaislBackValues(details)
        sendValues(details)
      };

      const sendValues = async (details) => {
        const data = {
          email: details.email,
          phoneNo: details.phoneNo,
          address: details.address,
          adhaarCard: details.adhaarCard,
        };
        try {
          const response = await axios.post(
            "https://serverhillsidehaven-production.up.railway.app/customerDetails/updateDetails",
            data
          );
        } catch (error) {
          console.error(error);
        }
    
      };

  return (
    <section className="edit-details-container">
        <div className="details">
          <form onSubmit={handleChange}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-danger-subtle"
                id="exampleInputEmail1"
                name="exampleInputEmail1"
                value={email}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputAdhaar" className="form-label">
                Adhaar card
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAdhaar"
                name="exampleInputAdhaar"
                // onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputMobile" className="form-label">
                Mobile number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputMobile"
                name="exampleInputMobile"
                // onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                name="exampleInputAddress"
                // onChange={handleChange}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Submit"
              name="submit"
            />
          </form>
        </div>
    </section>
  )
}

export default EditDetails