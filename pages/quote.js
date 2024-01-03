import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';

export default function Quote() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    promo: '',
    package: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (fieldName, e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.innerText,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // change console log to API post
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      zip: '',
      promo: '',
      package: '',
    });

  };

  return (
    <Layout>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <title>Get a Free Quote Today</title>
      </Head>
      {formSubmitted ? (
        <div className={`${utilStyles.heading2Xl} flex justify-center text-center`}>
          Thank you for submitting the form! We will contact you shortly.
        </div>
      ) : (
        <div>
      <form className={styles.container} className="grid flex-col justify-center" onSubmit={handleSubmit}>
      <h4 className={`${utilStyles.headingMd} flex justify-center`}>Get a Free Quote Today</h4>
      <h1 className={`${utilStyles.headingXl} flex justify-center`}>Join Valor Security Today!</h1>
      <h3 className={`${utilStyles.headingMd} flex justify-center`}>Leave us your phone number and email and we'll contact you within 24 hours.</h3>
      <br />
      <div className="flex-row">
      <label>First Name: </label>
      <input type="text" placeholder="Type here" name="firstName" value={formData.firstName} className="w-full max-w-max input input-bordered" onChange={handleInputChange} required/>
      <label>Last Name: </label>
      <input type="text" placeholder="Type here" name="lastName" value={formData.lastName} className="w-full max-w-max input input-bordered" onChange={handleInputChange} required/>
      </div>
      <br />
      <div  className="flex-row">
      <label>Phone:</label>
      <input type="tel" placeholder="(555) 555-5555" name="phone" value={formData.phone} autoComplete='tel' required className="w-full max-w-max input input-bordered" onChange={handleInputChange}/>
      <label>Email: </label>
      <input type="email" placeholder="example@gmail.com" name="email" value={formData.email} className="w-full max-w-max input input-bordered" onChange={handleInputChange} required/>
      </div>
      <br />
      <div  className="flex-row">
      <label>City: </label>
      <input type="text" placeholder="Type Here" name="city" value={formData.city} className="w-full max-w-max input input-bordered" onChange={handleInputChange} required/>
      <label>State: </label>
      <select value={formData.state} className="w-full max-w-xs select select-bordered" onChange={handleInputChange} required>
        <option defaultValue="" >- Select State -</option>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="District Of Columbia">District Of Columbia</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
      <label>Zip Code: </label>
      <input type="number" placeholder="Type here" name="zip" value={formData.zip} className="w-full max-w-max input input-bordered" onChange={handleInputChange} required/>
      </div>
      <br />
      <div className="flex-row">
      <label>Promo: </label>
      <input type="text" placeholder="Type here" name="promo" value={formData.promo} className="w-full max-w-max input input-bordered" onChange={handleInputChange}/>
      <label>Package:</label>
      <select className="w-full max-w-xs select select-bordered">
        <option disabled defaultValue>- Select Package -</option>
          <option>Remote $53.99</option>
          <option>VIDEO or AUTOMATION $63.99</option>
          <option>Video Lite Nest Aware+ 24/7 $69.99</option>
          <option>Video Automation Nest Aware+ 24/7 $69.99</option>
      </select>
      <br />
      </div>
      <br />
      <button type="submit" className="grid btn btn-neutral">Submit</button>
    </form>
    <br />
    <p className="flex text-center" style={{ fontSize: '70%' }} >Valor Security, Inc<br></br>Express Written Consent Form MARKETING AUTHORIZATION:<br></br>By clicking submit, I, the undersigned, hereby authorize Valor Security, Inc (“Valor Security”), directly or through its affiliates and marketing partners, to contact me from time-to-time by telephone, text, email and/or direct mail with information and offers about products and services that might interest me. By clicking contact me below, I hereby authorize the receipt of such solicitations at the telephone number(s), (including cellular numbers), emails address(es) and/or mailing address(es) shown below, even if such telephone number(s), email address(es) or mailing addresses are listed on any “do not call” or other do not solicit registry or list and I agree that any such telephone calls and text messages may be generated using an automated phone dialing system. To discontinue or opt out of text messages reply with stop. I understand I am not required to consent to make a purchase.</p>
    </div>
    )}
    </Layout>
  );
}