import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f46f3db9-ab15-4fb1-87e8-a34d97ede864");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if(res.success){
        alert(res.message)
    }
  };

  return (
    <section id='contact' className='container contact'>
        <h1>Get in touch</h1>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, omnis. Esse odit tenetur dolorem laboriosam nihil numquam necessitatibus ullam harum!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                     <span><MdOutlineMail /></span>
                     <p>dandriyal8449@gmail.com</p>
                    </div>

                    <div className='contact-detail'>
                    <span><FaPhoneAlt /></span>
                    <p>+917428447814</p>
                    </div>

                    <div className='contact-detail'>
                    <span><IoLocationSharp /></span>
                    <p>Delhi</p>
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />

                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>

                <button className='contact-submit'type='submit' >Submit now</button>

            </form>
        </div>
    </section>
  )
}

export default Contact