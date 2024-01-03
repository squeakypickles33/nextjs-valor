import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../components/layout.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Get a Free Quote Today</title>
      </Head>
      <form className='form'>
      <h4>Let's get started!</h4>
      <h1>Join the Valor Team Today!</h1>
      <h3>Contact us by filling out the form below.</h3>
      <label>First Name: </label>
      <input type='text' id='firstName' /*onChange={handleChange}*/></input>
      <label>Last Name: </label>
      <input type='text' id='lastName' /*onChange={handleChange}*/></input>
      <label>Phone:</label>
      <input type='tel' id='phone' autoComplete='tel' placeholder='(555) 555-5555' required /*onChange={handleChange}*/></input>
      <label>Email: </label>
      <input type='email' id='email' /*onChange={handleChange}*/></input>
      <label>City: </label>
      <input type='city' id='city' /*onChange={handleChange}*/></input>
      <label>State: </label>
      <select id='state' /*onChange={handleChange}*/>
        <option value="" defaultValue="selected">- Select State -</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <label>Zip Code: </label>
      <input type='zip' id='zip' /*onChange={handleChange}*/></input>
      <label>Name of Company: </label>
      <input type='text' id='company' /*onChange={handleChange}*/></input>
      <label>Business Address: </label>
      <input type='text' id='companyaddress' /*onChange={handleChange}*/></input>
      <label>Number of Employees: </label>
      <input type='text' id='numemployees' /*onChange={handleChange}*/></input>
      <label>Referred By: </label>
      <input type='text' id='referred' /*onChange={handleChange}*/></input>
      <label>Comments: </label>
      <input type='text' id='comments' /*onChange={handleChange}*/></input>
      <button /*onClick={submitForm}*/ >Submit</button>
    </form>
    <br />
    <footer>
    <small>Valor Security, Inc<br></br>Express Written Consent Form MARKETING AUTHORIZATION:<br></br>By clicking submit, I, the undersigned, hereby authorize Valor Security, Inc (“Valor Security”), directly or through its affiliates and marketing partners, to contact me from time-to-time by telephone, text, email and/or direct mail with information and offers about products and services that might interest me. By clicking contact me below, I hereby authorize the receipt of such solicitations at the telephone number(s), (including cellular numbers), emails address(es) and/or mailing address(es) shown below, even if such telephone number(s), email address(es) or mailing addresses are listed on any “do not call” or other do not solicit registry or list and I agree that any such telephone calls and text messages may be generated using an automated phone dialing system. To discontinue or opt out of text messages reply with stop. I understand I am not required to consent to make a purchase.</small>

      </footer>
    </Layout>
  );
}