import { useState, useEffect } from "react";

export default function About() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      let response = await fetch(
        "http://laravel.tamaraebi.ca/api/contacts"
      );
      let data = await response.json();
      //   console.log(data);
      setContacts(data);
    };
    getContact();
  }, []);

  return (
    <main id="main">
      <h1 id="portfolio">Welcome to Tamara's portfolio!</h1>
        <div id="contact_so">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <a href={contact.url}>
                <h4>{contact.title}</h4>
              </a>
            </div>
          ))}
        </div>
        <p id="intro">
        I am a highly motivated and enthusiastic web development professional with a strong foundation in HTML, CSS, PHP, AWS and JavaScript 
        seeking to join a constantly challenging work environment that enables the application of my knowledge, skills and experiences, promotes
        my intellectual development and career growth towards achieving corporate goals and vision. I have Proficiency in developing responsive
        websites and applications. Experienced in collaborating with cross-functional teams to achieve project goals. Strong problem-solving and 
        communication skills with a passion for learning new technologies.
        </p>
    </main>
  );
}
