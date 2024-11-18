import { useEffect, useState } from "react";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const onChanged = (e) => {
    setMessage(e.target.value);
  };
  // console.log(landlord.username);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div>
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChanged}
          ></textarea>
        </div>
      )}
    </>
  );
}
