import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export default function Contact() {


    //service id  service_atl1rih
    //public key  SxmJVJmvpjWbUMZ__
    //template id  template_0eajhtg

    const [form, setForm] = useState({
        name: "",
        email: "",
        num: "",
        msg: "",
    });

   

    // console.log("clients :", clients);


    //     function submit() {
    //     if (!form.name) return toast.error("Name is Required!");
    //     if (!form.email) return toast.error("Email is Required!");
    //     if (!form.email.includes("@gmail.com"))
    //       return toast.error("Enter valid Gmail!");

    //     dispatch(addclient(form));
    //     // setOpenModal(false);
    //     setForm({ name: "", email: "", num: "" ,msg: ""});
    //     toast.success("Your Message Send Successfully 🎉");
    //   }


    const form1 = useRef();

    const sendEmail = (e) => {
        if (!form.name) return toast.error("Name is Required!");
        if (!form.email) return toast.error("Email is Required!");
        if (!form.email.includes("@gmail.com")) return toast.error("Enter valid Gmail!");

        e.preventDefault();

        emailjs.sendForm(
            'service_atl1rih',
            'template_0eajhtg',
            form1.current,
            'SxmJVJmvpjWbUMZ__'
        )
            .then((result) => {
                toast.success("Your Message Send Successfully 🎉");
                setForm({ name: "", email: "", num: "", msg: "" });
            }, (error) => {
                alert("Failed to send message");
            });
    };







    return (
        <div>
            <Toaster position="top-right" />
            <div id="contact"></div>
            <div className="contact">
                <div className="cc1">
                    <h2>🤝 Let's Work Together</h2>
                </div>
                <div className="cc2">
                    <div className="cbox1">
                        <h2>💬 Connect With Me</h2>
                        <p>Ready to build something amazing together?
                            I’m currently learning web and app development,
                            and I love working on creative ideas.</p>
                        <p>If you need help designing a modern website or
                            want to collaborate on an app idea, let’s
                            connect and make it real.</p>
                        <a href="tel:7206881771">📞+91 7206881771</a>
                        <a href="mailto:mrgurirai77@gmail.com" target="_blank" rel="noreferrer">📧mrgurirai77@gmail.com</a>
                        <a href="mailto:mrgurirai77@gmail.com" target="_blank" rel="noreferrer">📬mrgurirai77@gmail.com</a>
                        <div className="iyx">
                            <a href="https://x.com/mrgurirai77?t=cYp3RZtP9NN9fGbn7DSDog&s=09" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://youtube.com/@itsgurirai13?si=OA7R2eQOIMvWh8vs" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/_its_guri__13/?utm_source=qr&igsh=MWpoZmt4NGt6aDhneQ%3D%3D#" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="cbox2">
                        <h2>🚀 Start a Project</h2>
                        <div className="inputdiv1">
                            <form ref={form1} onSubmit={sendEmail}>
                                <input type="text" name="user_name" placeholder="Your Name" value={form.name}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, name: e.target.value }))
                                    } />
                                <input type="email" name="user_email" placeholder="Your Email" required value={form.email}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, email: e.target.value }))
                                    } />
                                <input type="tel" name="user_phone" placeholder="Your Phone" required value={form.num}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, num: e.target.value }))
                                    } />
                                <textarea placeholder="Your Message" name="message" rows="2" required value={form.msg}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, msg: e.target.value }))}></textarea>

                                <button className="sbutton" type="submit" >Let's Collaborate 🚀</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}