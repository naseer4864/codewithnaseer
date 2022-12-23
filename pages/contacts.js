const Contacts = () => {
    return (
        <div className="contact">
            <div className="sub-contact">
                <div className="about-us">
                    <h3>ABOUT US</h3>
                    <p>"Welcome to Code-With-Naseer, the premier
                         learning app for Coding. Our team of
                          experienced software Engineers has
                           developed a platform that helps users Learn Coding.
                           At Code-With-Naseer, we believe that Coding is Essential.
                            That's why we've created a user-friendly interface 
                            to make learning Coding accessible and enjoyable.
                            Since launching, we've been recognized by many individuals
                             and have helped thousands of users understand codding easily.
                             We hope you'll join us on our mission to make Code-With-Naseer great
                              and start learning with us today.
                           </p>
                </div>
            <div className="con-banner">
                <h3>WHAT PEOPLE SAYS ABOUT US</h3>
                <div className="student">
                    <div className="tex1">
                        <p>
                        I always thought coding was too difficult for me,
                         but once I started taking online courses on Code-With-Naseer and
                          practicing on my own, I realized that it's
                           actually quite accessible. It's now one
                            of my favorite hobbies, and I even landed
                             a new job as a developer. If I can learn to code, anyone can.  
                        </p>
                        <h3>Oyeniyi Hawau</h3>
                    </div>
                    <div className="tex1">
                        <p>
                        Learning to code on Code-With-Naseer has completely transformed my career.
                         I used to work in a field that I wasn't passionate
                          about, but now I have a job doing something I love.
                           Coding is challenging, but it's also incredibly rewarding.
                            I highly recommend it to anyone looking for a career change 
                        </p>
                        <h3>Micheal Chibuzo</h3>
                    </div>
                    <div className="tex1">
                        <p>
                        Learning to code on Code-With-Naseer has been an amazing journey for me.
                         It's not always easy, but it's so rewarding to see
                          my skills improve and to be able to build things
                           that I never would have thought possible before.
                            I highly recommend it to anyone who is interested
                             in technology or wants to learn a new skill.
                        </p>
                        <h3>Musa Garba</h3>
                    </div>
                </div>
            </div>
            <div className="call-us">
                <h3>GET IN TOCH TODAY</h3>
                <form id="myform"  action="https://getform.io/f/494a595a-3cc7-4578-b1d8-55ad9e96a99f" method="POST">
                    <input type="text" placeholder="FIRST NAME" className="first-name" name="firt name"/>
                    <input type="text" placeholder="LAST NAME" className="last-name" name="last name"/>
                    <input type="email" placeholder="EMAIL" className="email" name="email"/>
                    <input type="number" placeholder="NUMBER" className="number"  name="number"/>
                    <select className="option">
                        <option value="request">Request</option>
                        <option value="suggest">Suggestions</option>
                        <option value="Others">Others</option>
                    </select>
                    <textarea rows="20" cols="0" placeholder="MESSAGE"  className="msg" name="message"/>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            </div>
        </div>
     );
}
 
export default Contacts;