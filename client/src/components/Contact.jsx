import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();

        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setLandlord(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact : <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Enter your message here..."
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className=" bg-slate-700 text-white text-center p-3 rounded-lg uppercase hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
